const DigitBtn = ({currentValue, digit, setFunc}) => {
    return (
        <button type="button" onClick={() => setFunc(currentValue + digit)}>
            {digit}
        </button>
    );
};

export default DigitBtn;
