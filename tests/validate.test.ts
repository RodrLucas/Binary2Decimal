import {Binary} from '../utils/convert'

describe('Create a method that can convert an binary number to decimal number', () => {
    it('Should recieve an binary number and convert to decimal number', () => {
        expect(Binary.convertToDecimal('1111')).toEqual(15)
    })
    // it('Should reciece a number or string and return number', () => {
    //     expect(Binary.convertToDecimal('1111')).
    // })
})