import {Services} from "./services";

test('test API Call', async () =>{
    const service = new Services()
    const questions = Object.values(await service.find_questions("10","hard", "boolean"))

    expect(questions.length).toEqual(10)
})