const sum = require('../src/sum')


it('shoud return correct sum', () => {
    const result = sum(2, 5)
    expect(result).toBe(8)
})
