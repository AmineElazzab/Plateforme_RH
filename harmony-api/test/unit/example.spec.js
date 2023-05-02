"use strict";

const { test, trait } = use("Test/Suite")("Auth Controller - Login");
const Hash = use("Hash");
const User = use("App/Models/User");

trait("Test/ApiClient");

test("should return error if user not found", async ({ client }) => {
  const response = await client
    .post("/api/auth/login")
    .send({
      email: "invalidemail@example.com",
      password: "mypassword",
    })
    .end();

  response.assertStatus(404);
  response.assertJSON({ error: "User not found" });
});

test("should return error if password is invalid", async ({ client }) => {
  const user = await User.create({
    email: "validemail@example.com",
    username: "validusername",
    password: "mypassword",
  });

  const response = await client
    .post("/api/auth/login")
    .send({
      email: "validemail@example.com",
      password: "invalidpassword",
    })
    .end();

  response.assertStatus(401);
  response.assertJSON({ error: "Invalid password" });
});

test("should return user object and token on successful login", async ({
  client,
}) => {
  const password = await Hash.make("secret");

  const response = await client
    .post("/api/auth/login")
    .send({
      email: "validemail@example.com",
      password: "mypassword",
    })
    .end();

  response.assertStatus(200);
  response.assertJSONSubset({
    email: "validemail@example.com",
    token: response.body.token,
  });
});
