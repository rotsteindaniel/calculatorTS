"use client";

import { useState } from "react";
import Button from "./components/Button";
import styles from "./page.module.css";

export default function Home() {
  const [value, setValue] = useState<number | string>();

  const [num, setNum] = useState(0);
  const [storedNum, setStoredNum] = useState(0);
  const [operator, setOperator] = useState("");

  const handleButtonClick = (buttonValue: number | string) => {
    console.log(buttonValue);
  };

  const inputNum = (buttonValue: number) => {
    console.log(buttonValue);
  };

  return (
    <main className={styles.main}>
      <div className={styles.input}>
        <h1>789456</h1>
      </div>
      <div className={styles.input}>
        <h1>{value}</h1>
      </div>
      <div className={styles.div}>
        <Button value={7} onClick={inputNum} />
        <Button value={8} onClick={inputNum} />
        <Button value={9} onClick={inputNum} />
        <Button value={"C"} color="orange" onClick={handleButtonClick} />
      </div>
      <div className={styles.div}>
        <Button value={4} onClick={inputNum} />
        <Button value={5} onClick={inputNum} />
        <Button value={6} onClick={inputNum} />
        <Button value={"+"} color="orange" onClick={handleButtonClick} />
      </div>
      <div className={styles.div}>
        <Button value={1} onClick={inputNum} />
        <Button value={2} onClick={inputNum} />
        <Button value={3} onClick={inputNum} />
        <Button value={"-"} color="orange" onClick={handleButtonClick} />
      </div>
      <div className={styles.div}>
        <Button value={"+/-"} color="orange" onClick={handleButtonClick} />
        <Button value={0} onClick={inputNum} />
        <Button value={"."} color="orange" onClick={handleButtonClick} />
        <Button value={"x"} color="orange" onClick={handleButtonClick} />
      </div>
      <div className={styles.div}>
        <Button value={"%"} color="orange" onClick={handleButtonClick} />
        <Button value={"/"} color="orange" onClick={handleButtonClick} />
        <Button value={"="} color="orange" onClick={handleButtonClick} />
        <Button value={"<="} color="orange" onClick={handleButtonClick} />
      </div>
    </main>
  );
}
