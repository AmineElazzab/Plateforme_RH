"use strict";

const { test, trait } = use("Test/Suite")("Auth");
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
  const response = await client
    .post("/api/auth/login")
    .send({
      email: "user@gmail.com",
      password: "invalidpassword",
    })
    .end();

  response.assertStatus(401);
  response.assertJSON({ error: "Invalid password" });
});

test("should return user object and token on successful login", async ({
  client,
}) => {
  const response = await client
    .post("/api/auth/login")
    .send({
      email: "user@gmail.com",
      password: "123456",
    })
    .end();

  response.assertStatus(200);
  response.assertJSONSubset({
    email: "user@gmail.com",
    token: response.body.token,
    
  });
});

test("should create a new user and return a token", async ({ client }) => {
  const response = await client
    .post("/api/auth/register")
    .send({
      user_address : "123 address",
      user_phone : "0697352024",
      user_fullname : "fahd roussafi",
      user_image : "image test",
      user_role_id : "5",
      user_department_id : "1",
      username: "testuser",
      email: "testuser@example.com",
      password: "password",
      password_confirmation: "password",
    })
    .end();

  response.assertStatus(200);
  response.assertJSONSubset({
    username: "testuser",
    email: "testuser@example.com",
    token: response.body.token,
  });
});
