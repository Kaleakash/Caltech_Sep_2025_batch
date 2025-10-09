import {add,sub} from './operation'

describe("Operation Testing",()=> {

    test("Addition function testing ",()=> {
        let result1 = add(10,20)
        expect(result1).toBe(30)
    })

    test("Sub function testing ",()=> {
        let result1 = sub(100,50)
        expect(result1).toBe(50)
    })

})