import "./LoanPage.css"
const LoanPage =()=>{
 
    return(
        <div>
           <div className="LoanPage">
              
           <div className="LoanNavbar">
                <div className="LoanNavbarLeft">
                    <span>____</span>
                    <span> UIU FRIENDS LOAN</span>

                </div>
                <div className="LoanNavbarRight">
                    <button>Loan History</button>
                     <button>Request for loan</button>
                     <button>Cloud Sourcing</button>
                     <button>Log Out</button>
                </div>
            </div>

            <div className="LoanPageHome">
                 <h1> You can post here to take Loan in next update !</h1>
            </div>

           </div>

        </div>
    )

}
export default LoanPage;