const request = require("supertest");
const express = require("express");

const app = express();
app.use(express.static("public"));

describe("Server Tests", () => {
  test("should serve static files", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });

  test("should return 404 for unknown routes", async () => {
    const response = await request(app).get("/nonexistent");
    expect(response.statusCode).toBe(404);
  });
});
