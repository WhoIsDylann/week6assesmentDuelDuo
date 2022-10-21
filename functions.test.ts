const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    
    test('returns an array', () => {
        expect(shuffleArray).toContain
    })

    test('returns length correctly', () => {
        expect(shuffleArray([1,2,3])).toHaveLength(3)
    })
})