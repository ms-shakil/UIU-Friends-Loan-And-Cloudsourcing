import { useState } from 'react';
import './Loan.css';
import { getUser } from '../../utils/getUser';

const LoanCreateForm = () => {
    const [loanData, setLoanData] = useState({
        purpose: '',
        amount: '',
    });

    const handleChange = (event) => {
        const { name, value } = event?.target;
        setLoanData({ ...loanData, [name]: value });
    };

    const handleLoanRequest = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/loans/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...loanData,
                    loanId: `${getUser()?.studentId}${getUser()?.userName} ${Math.random()}`,
                    studentId: getUser()?.studentId,
                    isAccepted: false,
                    duration: 4,
                    offered: [],
                }),
            });

            if (!response.ok) {
                // Parse the error response from the backend
                const errorData = await response.json();
                throw new Error(
                    errorData.error ||
                        response.statusText ||
                        'Failed to create loan request.'
                );
            }

            const data = await response.json();
            window.location.reload(); // Reload the page on success
            console.log('Created loan request successfully: ', data);
        } catch (error) {
            // Display the error message (from the backend or a fallback message)
            console.error('Failed to create loan request: ', error.message);
            alert(error.message); // Optionally display the error message to the user
        }
    };

    return (
        <div>
            <div className="ApplactionForm">
                <div className="ApplactionFormItems">
                    <p>Loan Applaction</p>

                    <form onChange={handleChange} onSubmit={handleLoanRequest}>
                        <div className="inputcontainer">
                            <label htmlFor="purpose">Loan purpose:</label>
                            <input type="text" name="purpose" id="purpose" />
                        </div>

                        <div className="inputcontainer">
                            <label htmlFor="amount"> Loan Amount :</label>
                            <input type="text" name="amount" id="amount" />
                        </div>

                        <button type="submit">Request for loan</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default LoanCreateForm;
