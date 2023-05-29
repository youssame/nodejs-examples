const add = (a: number, b: number) => a + b;
const getUser = () => {
    setTimeout(() => {}, 1000);
    return {
        id: "1234",
        name: "Youssef"
    }
};
const getFailedUser = () => {
    setTimeout(() => {}, 1000);
    throw 'User Not Found'
};

describe('Test users', () => {
    test('test add function', () => {
        const res = add(1, 2);
        expect(res).toEqual(3);
    });
})