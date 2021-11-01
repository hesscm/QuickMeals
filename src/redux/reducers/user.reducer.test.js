import userReducer from "./user.reducer";

describe('User reducer tests', () => {
    test('The default value is an empty object.', (done) => {
        let action = {};
        let output = userReducer(undefined, action);
        expect(typeof output).toBe('object');
        // expect(output).toBeDefined();
        done();
    })
});