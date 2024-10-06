// src/Pages/DonationList.js


import React, { useEffect, useState } from 'react';
import { getToken } from '../../utils/getToken';
import './DonationForm.css';
import Modal from '../Modal';
import DonationFrom from './DonationFrom';


const Donations = () => {
    const [isDonate, setDonate] = useState(false);

    const [donations, setDonations] = useState([]);
    const [error, setError] = useState(null);

    // Fetch donations from the backend
    useEffect(() => {
        const fetchDonations = async () => {
            try {
                const response = await fetch(
                    'http://localhost:3000/donations',
                    {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${getToken()}`, // Include token if required for authentication
                        },
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    setDonations(data.donations); // Set donations state with the data from backend
                } else {
                    setError('Failed to fetch donations');
                }
            } catch (err) {
                setError('Error fetching donations');
            }
        };

        fetchDonations();
    }, []);

    return (
        <div

            // style={{
            //     backgroundImage: `url('/Img/HomePic.png')`,
            //     backgroundRepeat: 'no-repeat',
            //     backgroundSize: '100% 100%',
            // }}
          className='Donatelist'
        >
            <Modal isOpen={isDonate} closeModal={(value) => setDonate(value)}>
                    <DonationFrom/>
            </Modal>
            <h1 style={{ margin: '0px', padding: ' 25px 20px',color:"rgb(232, 76, 19)"   }}>All Donation</h1>

             
            {donations.length > 0 ? (
                <ul className="list__container">
                    {donations.map((donation) => (
                        <li
                            key={donation.donationId}
                            className="Donatecontainer"
                        >
                            <h3>Student ID: {donation.studentId}</h3>
                            <p>Purpose: {donation.purpose}</p>

                            {donation.image && (
                                <img
                                    src={`data:image/jpeg;base64,${donation.image}`}
                                    alt="Donation"
                                    style={{ maxWidth: '180px' }}
                                />
                            )}
                            <br />
                            <button onClick={() => setDonate(true)}  >Pay online</button>
                            
                        

                        </li>
                    ))}
                </ul>
            ) : (
                <p>No donations available.</p>
            )}
        </div>
    );


};

export default Donations;
