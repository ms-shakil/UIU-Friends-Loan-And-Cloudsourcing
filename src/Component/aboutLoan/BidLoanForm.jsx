import "./BidLoan.css"
const BidLoanForm =()=>{
    return(
        <div>
        <div className="BidForm">
            <div className="BidFormItems">
                 <p>Bid Loan</p>
                 <div className='inputcontainer'>
                     <label htmlFor="phone">Amount:</label>
                    <input  type="text" name="phone" id="phone" /> 
                 </div>

                 <div className='inputcontainer'>
                    <label htmlFor="amount"> Interest Rate :</label>
                     <input  type="text" name="amount" id="amount" />
                 </div>
                 <div className='inputcontainer'>
                    <label htmlFor="amount"> Loan Duration :</label>
                     <input  type="text" name="amount" id="amount" />
                 </div>
                 <button>Request for loan</button>
            </div>
        </div>
    </div>
    )
}
export default BidLoanForm;