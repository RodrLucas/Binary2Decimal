import {Binary} from '../utils/convert'

describe('Create a method that can convert an binary number to decimal number', () => {
    it('Should recieve an binary number and convert to decimal number', () => {
        expect(Binary.convertToDecimal('1111')).toEqual(15)
    })
    it('Should recieve a number and NOT return 3', () => {
        expect(Binary.convertToDecimal('1111')).not.toBe(0)
    })
})