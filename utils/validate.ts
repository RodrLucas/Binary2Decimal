export function validateData(input: number | string) {
  if (typeof input === "number" || typeof input === "string") {
    const binaryNumberStr = input.toString().split("");
    const binaryNumberArr = binaryNumberStr;

    let isValid: boolean = false;
    let acc: number[] = [];

    binaryNumberArr.map((item, index) => {
      if (item === "1") {
        isValid = true;
        let expoent = -index + (binaryNumberArr.length - 1);
        acc.push(Number(item) * 2 ** expoent);
      } else if (item === "0") {
        isValid = true;
      } else {
        isValid = false;
      }
    });
    if (!isValid)
      return console.log(
        `Número inserido ${input} é inválido, por favor insira apenas 1 e/ou 0`
      );
    console.log(`Número inserido ${input} é VÁLIDO`);

    let result = 0;
    acc.map((item) => (result += item));
    console.log(`O resultado da conversão é ${result}`);
  } else console.log("Por favor inserir uma String ou Número");
}



// Tentando usar Object Literals em vez de if else

    // function test(binaryNumberArr) {
    //   binaryNumberArr.map((item: string, index: number) => {
    //     const binary = {
    //       "1": () => {
    //         isValid = true;
    //         let expoent = -index + (binaryNumberArr.length - 1);
    //         acc.push(Number(item) * 2 ** expoent);
    //       },
    //       "0": () => {
    //         isValid = true;
    //       },
    //       default: () => {
    //         isValid = false;
    //       },
    //     };
    //     console.log(item);
    //     return console.log(binary[item] || binary.default);
    //   });
    // }
    // test(binaryNumberArr);