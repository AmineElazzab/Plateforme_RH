"use strict";

const Salary = use("App/Models/Salary");

class SalaryController {
  //create salary
  async store({ request, response }) {
    // try {
    //   const salary = await Salary.create(
    //     request.only([
    //       "salary_amount",
    //       "salary_type",
    //       "salary_user_id",
    //       "salary_incentives",
    //       "salary_total",
    //     ])
    //   );
    //   return response.json(salary);
    // } catch (error) {
    //   console.error(error);
    //   return response.status(500).send({
    //     error:
    //       "There was a problem creating the salary, please try again later.",
    //   });
    // }
    const amount = parseFloat(request.input("salary_amount"));
    const incentives = parseFloat(request.input("salary_incentives"));
    if (isNaN(amount) || isNaN(incentives)) {
      return response.status(400).send({
        error: "Invalid salary amount or incentives value.",
      });
    }
    const total = amount + incentives;
    const salary = await Salary.create({
      salary_amount: amount,
      salary_type: request.input("salary_type"),
      salary_user_id: request.input("salary_user_id"),
      salary_incentives: incentives,
      salary_total: total,
    });
    return response.json(salary);
  }

  //get all salaries
  async index({ request, response }) {
    try {
      const salaries = await Salary.all();
      return response.json(salaries);
    } catch (error) {
      console.error(error);
      return response.status(500).send({
        error:
          "There was a problem retrieving the salaries, please try again later.",
      });
    }
  }

  //get salary by id
  async show({ request, response }) {
    try {
      const salary = await Salary.findOrFail(request.params.id);
      return response.json(salary);
    } catch (error) {
      console.error(error);
      return response.status(500).send({
        error:
          "There was a problem retrieving the salary, please try again later.",
      });
    }
  }

  //update salary
  async update({ request, response }) {
    try {
      const salary = await Salary.findOrFail(request.params.id);
      salary.merge(
        request.only([
          "salary_amount",
          "salary_type",
          "salary_user_id",
          "salary_total",
        ])
      );
      await salary.save();
      return response.json(salary);
    } catch (error) {
      console.error(error);
      return response.status(500).send({
        error:
          "There was a problem updating the salary, please try again later.",
      });
    }
  }

  //delete salary
  async destroy({ request, response }) {
    try {
      const salary = await Salary.findOrFail(request.params.id);
      await salary.delete();
      return response.json({ message: "Salary deleted successfully" });
    } catch (error) {
      console.error(error);
      return response.status(500).send({
        error:
          "There was a problem deleting the salary, please try again later.",
      });
    }
  }
}

module.exports = SalaryController;
