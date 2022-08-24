import { useState } from "react";
import { api } from "../services/api";
import { useForm } from "react-hook-form";
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
      <h1>Conversor Binário para Decimal</h1>

      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="container-inputs">
          <label>Insira o Binário</label>
          <input
            type="text"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <p id="error">{error}</p>

          <label>Resultado da conversão</label>
          <p className="result">{binaryNumber}</p>

          <button onClick={onSubmit} text="Converter">
            Converter
          </button>
        </div>
      </form>
    </div>
  );
}