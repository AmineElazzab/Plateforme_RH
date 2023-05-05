"use strict";
const Mail = use("Mail");
const Suggestion = use("App/Models/Suggestion");
const User = use("App/Models/User");

class SuggestionController {
  async sendSuggestionEmail({ request, response, auth }) {
    const { suggestion_name, suggestion_description } = request.all();
    // const { suggestion_name, suggestion_description } = request.post();
    const user = await auth.getUser();

    const suggestion = await Suggestion.create({
      suggestion_name,
      suggestion_description,
      user_id: user.user_id,
    });
    await suggestion.save();

    const users = await User.query()
      .select("users.email", "roles.role_name")
      .innerJoin("roles", "users.user_role_id", "roles.role_id")
      .whereIn("roles.role_name", [
        "administrator",
        "human resources",
        "project leader ",
      ])
      .fetch();

    const mailData = {
      user: user.toJSON(),
      suggestion_name,
      suggestion_description,
    };

    // console.log("user admin role and email", users.toJSON());

    try {
      await Promise.all(
        users.toJSON().map(async (user) => {
          await Mail.send("emails.suggestions", mailData, (message) => {
            message.to(user.email).subject(suggestion_name);
            if (user.email === auth.user.email) {
              message.from(auth.user.email);
            } else {
              message.from("noreply@example.com");
            }
          });
          // console.log("Email sent to", user.email);
          console.log("Email sent to", user.email, "from", auth.user.email);
        })
      );

      return response.status(200).json({
        message: "Suggestion sent successfully",
        suggestion: {
          suggestion_name,
          suggestion_description,
          user_id: user.user_id,
        },
      });
    } catch (error) {
      console.error("Error while sending email", error);
      return response.status(500).json({
        error: "Failed to send suggestion email",
      });
    }
  }
}

module.exports = SuggestionController;
