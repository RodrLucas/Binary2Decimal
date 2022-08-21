import {validateData} from './validate'

type BinaryProps = number | string;

export class Binary {
  static convertToDecimal(input: BinaryProps) {
    validateData(input)
  }
}
