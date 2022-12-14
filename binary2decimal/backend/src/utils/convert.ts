type BinaryProps = number | string;

class Binary {
  static convertToDecimal(input: BinaryProps) {
    let result = 0;
    let acc: number[] = []

    const arrInput = input.toString().split('')

    arrInput.forEach((value, index) => {
      //includes (value) / arrInput.some()
      if(value !== "1" && value !== "0") throw new Error
      const expoent = -index + (arrInput.length - 1);
      return acc.push(Number(value) * 2 ** expoent);
    })

    acc.forEach((item) => (result += item));
    return result
  }
}
export { Binary };

// if (typeof input === "number" || typeof input === "string") {
//   const convertedInputToArr = input.toString().split("");
//   let isValid: boolean = false;
//   let acc: number[] = [];

//   convertedInputToArr.forEach((item, index) => {
//     if (item === "1") {
//       isValid = true;
//       let expoent = -index + (convertedInputToArr.length - 1);
//       return acc.push(Number(item) * 2 ** expoent);
//     } else if (item === "0") {
//       isValid = true;
//     } else {
//       isValid = false;
//     }
//   });

//   if (!isValid) throw new Error("Allowed only 1 | 0");
//   console.log(`${input} is VALID`);

//   acc.map((item) => (result += item));
//   console.log(`The result is ${result}`);
//   return result;
// } else throw new Error("Please, allowed only strings or numbers");