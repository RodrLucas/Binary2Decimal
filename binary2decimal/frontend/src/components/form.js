import { useState } from "react";
import { api } from "../services/api";
import { Button } from "./Button";
import { Title } from "./Title";
import { Label } from "./Label";
import { ErrorText } from "./ErrorText";
import { Result } from "./Result";
import { Input } from './Input'
import "../styles/main.css";

export function Form() {
  const [binaryNumber, setBinaryNumber] = useState();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault()
    if(inputValue === "") return setError("Por favor, insira um número binário")
    const { data } = await api
      .post("/", { binaryNumber: inputValue })
      .catch(() => {
        setError("Por favor, insira um binário válido");
      })
      .then(setError(""));
      setBinaryNumber(data.binary);
  };

  return (
    <div className="container">
      <Title title="Conversor Binário para Decimal" />

      <form noValidate onSubmit={onSubmit}>
        <div className="container-inputs">
          <Label text="Insira o Binário" />
          <Input
            type="text"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <ErrorText error={error} />

          <Label text="Resultado da conversão" />
          <Result result={binaryNumber} />

          <Button type="submit" onClick={onSubmit} text="Converter" />
        </div>
      </form>
    </div>
  );
}
