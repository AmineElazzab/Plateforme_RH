"use strict";
const Departement = use("App/Models/Departement");

class DepartmentController {
  async store({ request, response }) {
    try {
      const departement = await Departement.create(
        request.only(["departement_name"])
      );

      return response.json(departement);
    } catch (error) {
      console.error(error);

      return response.status(500).send({
        error:
          "There was a problem creating the departement, please try again later.",
      });
    }
  }
}

module.exports = DepartmentController;
