const request = require("supertest");

const server = require('../../app');

describe('When testing the user create', () =>
{
    const agent = request.agent(server);

    it('responds with json', async () => new Promise((resolve) =>
    {
        const randomEmail = `test123456${new Date()}@gmail.com`;

        request(server)
            .post('/api/v1/user/')
            .send({
                name     : 'testingUser',
                password : "Shalitha@123456",
                email    : randomEmail,
                phone    : "0711234567",
                role     : "user" })
            .set('Accept', 'application/json')
            .retry(2)
            .expect('Content-Type', /json/)
            .end((err, res) =>
            {
                expect(res.status).toBe(200);

                expect(res.body.success).toBe(true);
                expect(res.body.message.include(randomEmail)).toBe(true);
                resolve();
            });
    }), 30000);
});
