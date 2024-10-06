import { useState } from 'react';
import './Loan.css';
import { getToken } from '../../utils/getToken';
import { getUser } from '../../utils/getUser';
const BidLoanForm = (props) => {
    const { loanId } = props;
    const [bidPrice, setBidPrice] = useState({
        bidAmount: 0,
    });

    const handleChange = (event) => {
        const { name, value } = event?.target;
        setBidPrice({ ...bidPrice, [name]: value });
    };

    const handleCreateBid = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/loans/bid', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                    'Content-Type': 'application/json', // Specify that we're sending JSON data
                },
                body: JSON.stringify({
                    loanId: loanId,
                    isAccepted: false,
                    bidAmount: bidPrice?.bidAmount.toString(),
                    biderId: getUser()?.studentId,
                }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            window.location.reload();
            console.log('created loan request successfully : ', data);
        } catch (error) {
            console.error('Failed to create loan request : ', error);
        }
    };

    return (
        <div>
            <div className="BidForm">
                <div className="BidFormItems">
                    <p>Bid Loan</p>
                    <form onChange={handleChange} onSubmit={handleCreateBid}>
                        <div className="inputcontainer">
                            <label htmlFor="bidAmount"> Interest  : </label>
                            <input
                                type="text"
                                name="bidAmount"
                                id="bidAmount"
                                value={bidPrice?.bidAmount}
                            />
                        </div>
                        <button type="submit">Bid For Loan</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default BidLoanForm;
