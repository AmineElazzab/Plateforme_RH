"use strict";
const Training = use("App/Models/Training");

class TrainingController {
  //create training
  async create({ request, response }) {
    try {
      const training = await Training.create(
        request.only([
          "training_name",
          "training_description",
          "training_type",
          "training_duration",
          "training_link",
        ])
      );
      return response.json(training);
    } catch (error) {
      console.error(error);
      return response.status(500).send({
        error:
          "There was a problem creating the training, please try again later.",
      });
    }
  }

  //get all trainings
  async index({ request, response }) {
    try {
      const trainings = await Training.all();
      return response.json(trainings);
    } catch (error) {
      console.error(error);
      return response.status(500).send({
        error:
          "There was a problem retrieving the trainings, please try again later.",
      });
    }
  }

  //get training by id
  async show({ request, response }) {
    try {
      const training = await Training.find(request.params.training_id);
      if (!training) {
        return response.status(404).send({
          error: "No training found",
        });
      }
      return response.json(training);
    } catch (error) {
      console.error(error);
      return response.status(500).send({
        error:
          "There was a problem retrieving the training, please try again later.",
      });
    }
  }

  //update training
  async update({ request, response }) {
    try {
      const training = await Training.find(request.params.training_id);
      if (!training) {
        return response.status(404).send({
          error: "No training found",
        });
      }
      training.training_name = request.body.training_name;
      training.training_description = request.body.training_description;
      training.training_type = request.body.training_type;
      training.training_duration = request.body.training_duration;
      training.training_link = request.body.training_link;
      await training.save();
      return response.json(training);
    } catch (error) {
      console.error(error);
      return response.status(500).send({
        error:
          "There was a problem updating the training, please try again later.",
      });
    }
  }

  //delete training
  async delete({ request, response }) {
    try {
      const training = await Training.find(request.params.training_id);
      if (!training) {
        return response.status(404).send({
          error: "No training found",
        });
      }
      await training.delete();
      return response.json({
        message: "Training deleted.",
      });
    } catch (error) {
      console.error(error);
      return response.status(500).send({
        error:
          "There was a problem deleting the training, please try again later.",
      });
    }
  }
}

module.exports = TrainingController;