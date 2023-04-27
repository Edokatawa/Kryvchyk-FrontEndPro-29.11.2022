const OperationBtn = ({operation, setFunc}) => {
    return (
        <button type="button" onClick={setFunc}>
            {operation}
        </button>
    );
};

export default OperationBtn;
