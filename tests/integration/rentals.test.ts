import supertest from "supertest";
import app from "app";
import httpStatus from "http-status";

const server = supertest(app);

describe("GET /rentals suite case", () => {
  it('should respond with status 200 if there are rentals', async () => {
    const { status, body } = await server.get("/rentals");

    expect(status).toBe(httpStatus.OK);
  });
});

describe("GET /rentals/:id suite cases", () => {
  it('should respond with status 400 when id is not valid', async () => {
    const { status } = await server.get("/rentals/id");

    expect(status).toBe(httpStatus.BAD_REQUEST);
  });
  it('should respond with status 404 when id is valid, but non existent', async () => {
    const { status } = await server.get("/rentals/1.5");

    expect(status).toBe(httpStatus.NOT_FOUND);
  });
  it('should respond with status 200 if rental id exists', async () => {
    const { status } = await server.get("/rentals/1");

    expect(status).toBe(httpStatus.OK);
  });
});