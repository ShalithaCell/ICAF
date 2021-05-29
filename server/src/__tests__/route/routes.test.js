const request = require("supertest");

const server = require('../../app');

beforeAll(async () =>
{
    // do something before anything else runs
    // await server.serverStart;
    // request = supertest(server);
    console.log('Jest starting!');
});
// close the server after each test
afterAll(async () =>
{
    server.close();
    console.log('server closed!');
});

// describe('check application route works', () =>
// {
//     test('get info route GET /', async () =>
//     {
//         const response = await request(server).get('/api/');
//
//         expect(response.status).toEqual(200);
//     });
// });

// test('check application route works', async () =>
// {
//     const response = await request.get('/api/');
//
//     expect(response.status).toEqual(200);
// });

describe("When testing the server.js", () =>
{
    const agent = request.agent(server);

    it("Should connect successfully and be able to return a response", async () =>
    {
        const response = await request(server).get('/api/');

        expect(response.status).toBe(200);
        console.log(response.text);
    });
});
