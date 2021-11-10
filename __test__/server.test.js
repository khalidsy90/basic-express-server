'use strict'

const {server}=require('../src/server');
const supertest=require("supertest");
const mokRequest=supertest(server);

describe('WEB SERVER',()=>{

    //check if server a living
    test('/hello works',async()=>{
        const response=await mokRequest.get('/hello')
        expect(response.status).toBe(200);
    })
    //check if 404 is handled
    test('should respond with 404 on an invalid method',async()=>{
        const response=await mokRequest.get('/foo')
        expect(response.status).toBe(404)
    })
    //check if general error handling is work
    test('should respond with 500 on an invalid method',async()=>{
        const response=await mokRequest.get('/error')
        expect(response.status).toBe(500)
    })
})