import "./LoanApplication.css";
const LoanApplication = () => {
  return (
    <div>
      <div className="ApplactionForm">
        <div className="ApplactionFormItems">
          <p>Loan Applaction</p>
          <div className="inputcontainer">
            <label htmlFor="phone">Loan purpose:</label>
            <input type="text" name="phone" id="phone" />
          </div>

          <div className="inputcontainer">
            <label htmlFor="amount"> Loan Amount :</label>
            <input type="text" name="amount" id="amount" />
          </div>
          <button>Request for loan</button>
        </div>
      </div>
    </div>
  );
};

export default LoanApplication;
