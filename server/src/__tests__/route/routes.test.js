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

describe('When testing the server.js', () =>
{
    const agent = request.agent(server);

    it('Should connect successfully and be able to return a response',
        async () => new Promise((resolve) =>
        {
            request(server)
                .get('/api/')
                .set('Accept', 'application/json')
                .retry(2)
                .expect('Content-Type', /json/)
                .end((err, res) =>
                {
                    expect(res.status).toBe(200);

                    resolve();
                });
        }), 30000);
});

describe('When testing the login', () =>
{
    const agent = request.agent(server);

    it('responds with json', async () => new Promise((resolve) =>
    {
        request(server)
            .post('/api/v1/auth/')
            .send({ email: 'admin@gmail.com', password: "Shalitha123456" })
            .set('Accept', 'application/json')
            .retry(2)
            .expect('Content-Type', /json/)
            .end((err, res) =>
            {
                expect(res.status).toBe(200);

                expect(res.body.success).toBe(true);

                resolve();
            });
    }), 30000);
});
