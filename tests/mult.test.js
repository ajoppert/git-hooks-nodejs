const mult = require('../src/mult')

it('shoud return correct mult', () => {
    const result = mult(2, 5)
    expect(result).toBe(11)
})
