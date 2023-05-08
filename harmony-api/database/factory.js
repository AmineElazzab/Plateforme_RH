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
    project_start_date: startDate.toISOString(),
    project_end_date: faker.date({ year: 2023 }).toISOString(),
    project_milestones: "Kick-Off",
    project_status: "Open",
    project_type: "Internal",
    project_progress: 0,
    created_at: startDate.toISOString(),
    updated_at: startDate.toISOString(),
  };
});

Factory.blueprint("App/Models/Training", async (faker, i, data) => {
  const names = [
    "Front-End Frameworks (e.g., React, Angular, Vue.js)",
    "Back-End Frameworks (e.g., Express, Django, Ruby on Rails)",
    "Databases (e.g., MySQL, MongoDB, PostgreSQL)",
    "Version Control (e.g., Git, SVN)",
    "Cloud Computing (e.g., AWS, Azure, Google Cloud)",
    "DevOps (e.g., Docker, Kubernetes, Jenkins)",
    "Testing (e.g., Jest, Mocha, Selenium)",
    "Programming Languages (e.g., Python, Java, C++)",
    "Mobile Development (e.g., React Native, Flutter, Swift)",
    "Machine Learning (e.g., TensorFlow, PyTorch, Scikit-Learn)",
    "Artificial Intelligence (e.g., Natural Language Processing, Computer Vision)",
    "Blockchain (e.g., Ethereum, Hyperledger, Corda)",
    "Internet of Things (e.g., Arduino, Raspberry Pi, Particle)",
    "Cybersecurity (e.g., Penetration Testing, Cryptography, Network Security)",
  ];
  const type= [
    "Online Courses",
    "Bootcamps: Intensive",
    "Workshops and Conferences",
    "Tutorials and Documentation",
    "Hackathons",
  ]
  const startDate = new Date();
  return {
    training_name: names[i],
    training_description: faker.sentence(),
    training_type: type[i],
    training_duration:
      faker.integer({ min: 1, max: 5 }) +
      " " +
      faker.pickone(["days", "weeks", "months"]),
    training_link: faker.url(),
    created_at: startDate.toISOString(),
    updated_at: startDate.toISOString(),
  };
});
