import { useState } from "react"
import Modal from "../Modal"
import LoanCreateForm from "./LoanCreateForm"

const LoanContainer = () => {
   const [isOpenLoan, setIsOpenLoan] = useState(false)

    return (
        <div className="loan_root">
           <div className="loan_info">
                <h1>uiu friends loan and cloud sourcing</h1>
                <img src="Img/HomePic.jpg" alt="" width={300} height={300} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora enim sint sunt
                   ipsum ratione minus accusamus, esse, iste qui excepturi porro, necessitatibus non
                    aliquid vel aut quidem tempore nobis iure et eveniet facilis culpa maiores quae! Corporis
                     obcaecati, iste totam nihil debitis dolores minima accusamus quis laboriosam ipsa saepe
                      officiis deleniti quos sapiente soluta sint aperiam distinctio eos, iusto quae.</p>
                <button onClick={() => setIsOpenLoan(true)}>Get Loan</button>
           </div>

           <div className="loan_list">
                <h1>Loan list</h1>
           </div>

           <Modal
            isOpen={isOpenLoan}
            closeModal={(value) => setIsOpenLoan(value)}
            >
              <LoanCreateForm />
            </Modal>
        </div>
    )
}
export default LoanContainer