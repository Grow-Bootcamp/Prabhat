const request = require("supertest");
const app = require("./day3S");

test("GET /users", async () => {
  const res = await request(app).get("/users");

  expect(res.status).toBe(200);
});