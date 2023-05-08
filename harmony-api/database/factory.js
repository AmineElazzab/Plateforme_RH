"use strict";

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Hash = use("Hash");

Factory.blueprint("App/Models/User", async (faker) => {
  return {
    email: faker.email(),
    password: "12345678",
    user_role_id: faker.integer({ min: 1, max: 5 }),
    user_department_id: faker.integer({ min: 1, max: 2 }),
    user_phone: faker.phone({ formatted: false }),
    user_address: faker.address(),
    user_fullname: faker.name(),
    user_image: faker.avatar(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
});

Factory.blueprint("App/Models/Role", async (faker, i, data) => {
  const names = [
    "Administrator",
    "Project Manager",
    "Project Leader",
    "Human Resources",
    "Collaborator",
  ];
  const descriptions = [
    "Administrator is the highest role in this application. Administrator can do anything in this application.",
    "Project Manager is the second highest role in this application. Project Manager can do anything except create new user.",
    "Project Leader is the third highest role in this application. Project Leader can do anything except create new user.",
    "Human Resources is the fourth highest role in this application. Human Resources can do anything except create new user.",
    "Collaborator is the lowest role in this application. Collaborator can only see the project that he/she is assigned to.",
  ];

  return {
    role_name: names[i],
    role_description: descriptions[i],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
});

Factory.blueprint("App/Models/Departement", async (faker, i, data) => {
  const names = ["IT", "IoT"];
  return {
    departement_name: names[i],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
});

Factory.blueprint("App/Models/Project", async (faker, i, data) => {
  const names = ["Project 1", "Project 2"];
  const startDate = new Date();
  return {
    project_name: names[i],
    project_description: faker.sentence(),
    project_priority: faker.integer({ min: 1, max: 5 }),
    project_start_date: "2023-05-08 09:30:46",
    project_end_date: "2023-06-08 09:30:46",
    project_milestones: "Kick-Off",
    project_status: "Open",
    project_type: "Internal",
    project_progress: 0,
    created_at: startDate.toISOString(),
    updated_at: startDate.toISOString(),
  };
});
