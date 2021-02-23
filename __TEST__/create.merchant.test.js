const { INET } = require('sequelize/types')
const request = require('supertest')
describe('POST /merchants', function(){
    it('should send response with 201 status code', function(done){

        //setup
        const body = {
            merchantCode: '1',
            name: 'ISMAYA GROUP',
            location: 'JAKARTA'
        };

        //execute
        request(app)
        .post('/merchants')
        .send(body)
        .end(function(err, res){
            if(err) done(err); //supertest error

            //assert
            expect(res.statusCode).toEqual(201);
            expect(typeof res.body).toEqual('object');
            expect(res.body).toHaveProperty('id');
            expect(typeof res.body.id).toEqual('number');
            expect(res.body).toHaveProperty('merchantCode');
            expect(res.body.merchantCode).toEqual(body.merchantCode);
            expect(res.body).toHaveProperty('name');
            expect(res.body.name).toEqual(body.name);
            expect(res.body).toHaveProperty('location');
            expect(res.body.location).toEqual(body.location);

            done();
        })
    })
})