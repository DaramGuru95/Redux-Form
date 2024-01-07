import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [reset, setRest] = useState("");
  return (
    <>
      <div
        style={{ display: "flex", gap: 3, flexDirection: "column", margin: 8 }}
      >
        <h1>Form</h1>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              let data = e.target.value;
              setAmount(data);
            }}
          />
          <button
            onClick={() => {
              dispatch({ type: "deposit", payload: amount });
              setAmount("");
            }}
          >
            Deposit
          </button>
          <button
            onClick={() => {
              dispatch({ type: "withdraw", payload: amount });
              setAmount("");
            }}
          >
            Withdraw
          </button>
        </div>

        <div style={{ display: "flex", gap: "0.5rem" }}>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              let data = e.target.value;
              setName(data);
            }}
          />
          <button
            onClick={() => {
              dispatch({ type: "updateName", payload: name });
              setName("");
            }}
          >
            Update Name
          </button>
        </div>

        <div style={{ display: "flex", gap: "0.5rem" }}>
          <input
            type="text"
            value={number}
            onChange={(e) => {
              let data = e.target.value;
              setNumber(data);
            }}
          />
          <button
            onClick={() => {
              dispatch({ type: "mobile", payload: number });
              setNumber("");
            }}
          >
            Update No
          </button>
        </div>

        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            onClick={() => {
              dispatch({ type: "reset", payload: reset });
              setRest("");
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
