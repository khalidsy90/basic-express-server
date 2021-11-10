loggerMiddleWar=require('../src/middleware/logger')




describe("test the middleware logger",()=>{
let consoleSpy;
let req={};
let res={};
let next=jest.fn();
    beforeEach(()=>{
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        })
        
        afterEach(()=>{
        consoleSpy.mockRestore();
        })
    test('test console log',()=>{
        loggerMiddleWar(req,res,next)
        expect(consoleSpy).toHaveBeenCalled();
    })
    test('test if next function is called',()=>{
        loggerMiddleWar(req,res,next)
        expect(next).toHaveBeenCalled();
    })
})