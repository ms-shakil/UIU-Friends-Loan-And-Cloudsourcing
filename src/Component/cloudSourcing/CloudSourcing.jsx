import { useState } from "react";
import Modal from "../Modal";
import "./CloudSourcing.css"
import DonationForm from "./DonationForm";
import LoanApplication from "../aboutLoan/LoanApplication";

const CloudSourcing =()=>{
   const [isOpenDonation, setIsOpenDonation] = useState(false)
   const [isOpenLoan, setIsOpenLoan] = useState(false)

       return(
        <div>
           <div className="CloudSourcingHome">

                     <button onClick={() => setIsOpenLoan(true)}>GET LOAN</button>
                     <button onClick={() => setIsOpenDonation(true)}>DONATION</button>

                     <Modal 
                        isOpen={isOpenDonation}
                        closeModal={(value) => setIsOpenDonation(value)}
                     >
                        <DonationForm />
                     </Modal>

                     <Modal 
                        isOpen={isOpenLoan}
                        closeModal={(value) => setIsOpenLoan(value)}
                     >
                        <LoanApplication />
                     </Modal>

                  
                  <div>This is Donation Home page !</div>
           </div>
        </div>
       )

}
export default CloudSourcing ;