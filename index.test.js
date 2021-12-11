const request = require("supertest");
const app = require("./index");

it("Hello World", async () => {
  const agent = request.agent(app);
  const res = await agent.get("/");
  expect(res.body.message).toBe("Hello World!!");
});
