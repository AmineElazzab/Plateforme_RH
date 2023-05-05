"use strict";

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Hash = use("Hash");

Factory.blueprint("App/Models/User", async (faker) => {
  return {
    username: faker.username(),
    email: faker.email(),
    password: await Hash.make(faker.password()),
    user_role_id: faker.integer({ min: 1, max: 6 }),
    user_department_id: faker.integer({ min: 1, max: 2 }),
    user_phone: faker.phone({ formatted: false }),
    user_address: faker.address(),
    user_fullname: faker.name(),
    user_image: faker.avatar(),
  };
});

Factory.blueprint("App/Models/Role", async (faker) => {
  return {
    role_name: faker.word(),
  };
});

Factory.blueprint("App/Models/Departement", async (faker) => {
  return {
    departement_name: "Test"
  };
});
