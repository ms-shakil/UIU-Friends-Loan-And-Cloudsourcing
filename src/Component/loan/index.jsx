import { useEffect, useState } from "react";
import Modal from "../Modal";
import BidLoanForm from "./BidLoanForm";
import LoanCreateForm from "./LoanCreateForm";
import "./Loan.css"
import { getToken } from "../../utils/getToken";
import { getUser } from "../../utils/getUser";

const LoanContainer = () => {
  const [isOpenLoan, setIsOpenLoan] = useState(false);
  const [isBidloan, setBidloan] = useState(false)
  const [loans, setLoans] = useState([])
  const [loanId, setLoanId] = useState("")

  const [isOpenLoanDetails, setIsOpenLoanDetails] = useState(false)
  const [targetLoan, setTargetLoan] = useState({})

  const handleAcceptBid = async (biderId) => {
    
    try {
      const response = await fetch("http://localhost:3000/loans/bid/accept", {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${getToken()}`,
          "Content-Type": "application/json", // Specify that we're sending JSON data
        },
        body: JSON.stringify({
          biderId: biderId,
          loanId: targetLoan?.loanId
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("bid accepted successfully : ", data);
    } catch (error) {
      console.error("Failed to accept bid request : ", error);
    }
  }


  const getLoans = async () => {
  
    try {
      const response = await fetch("http://localhost:3000/loans", {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${getToken()}`, // Add token to Authorization header
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch loans', error);
    }
  };
  
  useEffect(() => {
    const getData = async() => {
      const loansData = await getLoans();
      setLoans(loansData?.loans)
    }
    getData()
  }, []);

  return (
    <div className="loan_root">
      <div className="loan_info">
        <h1>UIU FRIENDS LOAN</h1>
        <img src="Img/loan3.jpg" alt="" width={350} height={250} />
        <p>
        In university, financial challenges are common, and a loan system among friends
         offers great support. Lending to each other builds trust and strengthens friendships.
          Unlike traditional loans, borrowing from friends usually comes without interest and 
          offers flexible repayment terms, reducing stress. It creates a sense of security,
           knowing you can rely on your friends during tough times.  friends helping each other financially promotes a strong community
             and helps everyone navigate university life more smoothly and stress-free.
        </p>
        <button onClick={() => setIsOpenLoan(true)}>Request for Loan</button>
      </div>

      <div className="loan_list">
        <h1>Loan list</h1>
        <ul className="loan__list--container">
          {
            loans?.map((loan) => (
            <li key={loan?._id} className="loand__list--item">
              <div className="loan-list-content">
                <p><span>Request Studend ID: </span>{loan?.studentId}</p>
                <p><span>Purpose: </span> {loan?.purpose}</p>
                <p><span>Amount:</span> {loan?.amount}</p>
              </div>
              <div className="loan__list--button--container">
               {loan?.studentId !== getUser()?.studentId && !loan?.isAccepted && 
               <button
               onClick={async() => {
                 setLoanId(loan?.loanId)
                 setBidloan(true)
                }}
                >
                  Bid For Loan
                </button>}
                <button onClick={() => {
                  setIsOpenLoanDetails(true)
                  setTargetLoan(loan)
                }}>Loan Details</button>
              </div>
            </li>
            ))
          }
        </ul>
      </div>

      <Modal title="Create Loan" isOpen={isOpenLoan} closeModal={(value) => setIsOpenLoan(value)}>
        <LoanCreateForm />
      </Modal>

      <Modal title="Bid For Loan" isOpen={isBidloan} closeModal={(value)=>setBidloan(value)}>
        <BidLoanForm loanId={loanId} />
      </Modal>

      <Modal title="Loan Details" isOpen={isOpenLoanDetails} closeModal={(value)=>setIsOpenLoanDetails(value)}>
        <div className="BidContainer">
           <div className="LoanStatus">
              <div>
                <p className="loan__id"><span>ID: </span>{targetLoan?.loanId}</p>
                <p className="loan__amount">{targetLoan?.amount}</p>
              </div>

              <div className="loand__purpose">
                <h2>Loan Purpose</h2>
                <p>{targetLoan?.purpose}</p>
              </div>

            </div>

           {targetLoan?.isAccepted ? 
           <div>
            <h1>Loan accepted, now its time to pay back!</h1>
           </div>
           
           : <div className="BiderDiv">
              {
                targetLoan?.offered?.map(bid => (
                    <div className="BiderStatus">
                      <p><span>Bider Id:</span> {bid?.biderId}</p>
                      <p><span>Expected Interest: </span> {bid?.bidAmount}%</p>
                      <p><span>Bider Email: </span> {bid?.bider?.email}</p>
                      <p><span>Bider Name: </span> {bid?.bider?.userName}</p>
                      <p><span>Bider Phone: </span> {bid?.bider?.phone}</p>

                      {getUser()?.studentId !== bid?.biderId && <button onClick={() => handleAcceptBid(bid?.biderId)}>Accept</button>}
                    </div>
                ))
              }
            </div>}
        </div>
      </Modal>
    </div>
  );
};
export default LoanContainer;
