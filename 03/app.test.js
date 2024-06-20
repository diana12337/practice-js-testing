import randomNumber from './app';

test('check if the result is 1', () => {


    expect(randomNumber(1, 1)).toBe(1)



})

test('check if arguments are type of number', () => {


    expect(() => randomNumber("S", 1)).toThrow('Value is not a number')
})