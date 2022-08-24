import { useState } from "react";
import { api } from "../services/api";
import { useForm } from "react-hook-form";
import { Button } from "./Button";
import {Title} from './Title'
import { Label } from "./Label";
import { ErrorText } from "./ErrorText";
import { Result } from "./Result";
import "../styles/main.css";

export function Form() {
  const [binaryNumber, setBinaryNuber] = useState();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    const { data } = await api
      .post("/", { binaryNumber: inputValue })
      .catch(() => {
        setError("Por favor, insira um binário válido");
      })
      .then(setError(""));
    setBinaryNuber(data.binary);
  };

  return (
    <div className="container">
      <Title title="Conversor Binário para Decimal" />

      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="container-inputs">
          <Label text="Insira o Binário"/>
          <input
            type="text"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <ErrorText error={error}/>

          <Label text="Resultado da conversão"/>
          <Result result={binaryNumber} />

          <Button type="submit" onClick={onSubmit} text="Converter" />
        </div>
      </form>
    </div>
  );
}
