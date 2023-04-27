import React, {useState, useEffect} from "react";
import DigitBtn from "./components/DigitBtn/DigitBtn.js";
import OperationBtn from "./components/OperationBtn/OperationBtn.js";
import "./App.css";

const App = () => {
    const [prevValue, setPrevValue] = useState("");
    const [operation, setOperation] = useState("");
    const [currentValue, setCurrentValue] = useState("");
    const [inputValue, setInputValue] = useState("0");

    useEffect(() => {
        if (currentValue === "0" && inputValue === "0") {
            setCurrentValue("");
            setInputValue("0");
        }
        if (currentValue === "." && inputValue === "0") {
            setCurrentValue(inputValue + currentValue);
            setInputValue(inputValue + currentValue);
        } else if (currentValue === "." && operation !== "") {
            setCurrentValue("");
        }
        if (currentValue.split("").filter(elem => elem === ".").length > 1) {
            setCurrentValue(currentValue.slice(0, -1));
        }
        if (currentValue !== "" || (prevValue !== "" && operation !== "") || (operation === "√" && currentValue === "")) {
            setInputValue(prevValue + operation + currentValue);
        }
    });

    const ACInput = () => {
        setPrevValue("");
        setOperation("");
        setCurrentValue("");
        setInputValue("0");
    };

    const DELInput = () => {
        if (prevValue === "" && operation === "" && currentValue.length === 1) {
            setCurrentValue("0");
        } else if (prevValue !== "" && operation !== "" && currentValue === "") {
            setCurrentValue(prevValue);
            setOperation("");
            setPrevValue("");
        } else if (prevValue === "" && operation !== "" && currentValue === "") {
            setOperation("");
            setCurrentValue("0");
        } else {
            setCurrentValue(currentValue.slice(0, -1));
        }
    };

    const mathOperation = () => {
        let resultMath = 0;

        switch (operation) {
            case "%":
                resultMath = (+prevValue / 100) * +currentValue;
                break;

            case "/":
                resultMath = +prevValue / +currentValue;
                break;

            case "*":
                resultMath = +prevValue * +currentValue;
                break;

            case "-":
                resultMath = +prevValue - +currentValue;
                break;
            case "+":
                resultMath = +prevValue + +currentValue;
                break;

            case "√":
                if (prevValue === "") {
                    resultMath = Math.sqrt(+currentValue);
                } else {
                    resultMath = +prevValue * Math.sqrt(+currentValue);
                }
                break;
            case "^":
                resultMath = (+prevValue) ** +currentValue;
                break;
            default:
                break;
        }
        setPrevValue("");
        setOperation("");
        setCurrentValue(`${resultMath}`);

        return `${resultMath}`;
    };

    const setOperationInput = ({target: {textContent: currentOperation}}) => {
        if (operation === "" && currentValue !== "" && currentOperation !== "=") {
            setPrevValue(currentValue);
            setOperation(currentOperation);
            setCurrentValue("");
        } else if (operation !== "" && currentValue === "") {
            setOperation(currentOperation);
        }

        if (currentOperation === "√" && prevValue === "") {
            setOperation("√");
            setCurrentValue("");
        }

        if (prevValue !== "" && operation !== "" && currentValue !== "" && currentOperation !== "=") {
            const resultMath = mathOperation();
            setPrevValue(resultMath);
            setOperation(currentOperation);
            setCurrentValue("");
        } else if (prevValue !== "" && operation !== "" && currentValue !== "" && currentOperation === "=") {
            mathOperation();
        } else if (prevValue !== "" && operation !== "" && currentValue === "" && currentOperation === "=") {
            setCurrentValue(prevValue);
            setPrevValue("");
            setOperation("");
        } else if (operation === "√" && currentValue !== "" && currentOperation === "=") {
            mathOperation();
        }
    };

    return (
        <div className="container">
            <div className="calculator-block">
                <div className="input-value">{inputValue}</div>
                <div className="btn-block">
                    <OperationBtn operation="AC" setFunc={() => ACInput()} />
                    <OperationBtn operation="DEL" setFunc={() => DELInput()} />
                    <OperationBtn operation="√" setFunc={event => setOperationInput(event)} />
                    <OperationBtn operation="^" setFunc={event => setOperationInput(event)} />
                    <DigitBtn currentValue={currentValue} digit="7" setFunc={setCurrentValue} />
                    <DigitBtn currentValue={currentValue} digit="8" setFunc={setCurrentValue} />
                    <DigitBtn currentValue={currentValue} digit="9" setFunc={setCurrentValue} />
                    <OperationBtn operation="/" setFunc={event => setOperationInput(event)} />
                    <DigitBtn currentValue={currentValue} digit="4" setFunc={setCurrentValue} />
                    <DigitBtn currentValue={currentValue} digit="5" setFunc={setCurrentValue} />
                    <DigitBtn currentValue={currentValue} digit="6" setFunc={setCurrentValue} />
                    <OperationBtn operation="*" setFunc={event => setOperationInput(event)} />
                    <DigitBtn currentValue={currentValue} digit="1" setFunc={setCurrentValue} />
                    <DigitBtn currentValue={currentValue} digit="2" setFunc={setCurrentValue} />
                    <DigitBtn currentValue={currentValue} digit="3" setFunc={setCurrentValue} />
                    <OperationBtn operation="-" setFunc={event => setOperationInput(event)} />
                    <DigitBtn currentValue={currentValue} digit="0" setFunc={setCurrentValue} />
                    <DigitBtn currentValue={currentValue} digit="." setFunc={setCurrentValue} />
                    <OperationBtn operation="%" setFunc={event => setOperationInput(event)} />
                    <OperationBtn operation="+" setFunc={event => setOperationInput(event)} />
                    <OperationBtn operation="=" setFunc={event => setOperationInput(event)} />
                </div>
            </div>
        </div>
    );
};

export default App;
