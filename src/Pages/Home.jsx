import { useState } from 'react';
import Navbar from '../Component/Navbar';
import HomePage from '../Component/HomePage/HomePage';
import BidLoanForm from '../Component/loan/BidLoanForm';
import DonationFrom from '../Component/cloudSourcing/DonationFrom';

const Home = () => {
    const [data, setData] = useState(null);
    const handleClick = async () => {
        fetch('http://localhost:3000/loan')
            .then((response) => response.json())
            .then((data) => setData(data?.message));
    };
    const createLoan = async () => {
        try {
            const response = await fetch('http://localhost:3000/loan', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: '456', name: 'Mr. x' }),
            });

            if (!response.ok) {
                throw new Error('Failed to create loan');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error creating loan:', error);
            throw error;
        }
    };

    const signUpUser = async () => {
        try {
            const response = await fetch('http://localhost:3000/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Specify that we're sending JSON data
                },
                body: JSON.stringify({
                    username: 'Shakil',
                    email: 'shakil@gmail.com',
                    password: '123456',
                }), // Convert the data to JSON format
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            console.log('User signed up successfully:', data);
        } catch (error) {
            console.error('Failed to sign up user:', error);
        }
    };

    const loginUser = async (emailOrUsername, password) => {
        try {
            const response = await fetch('http://localhost:3000/users/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Specify that we're sending JSON data
                },
                body: JSON.stringify({
                    email: 'shakil@gmail.com',
                    password: '123456',
                }), // Convert the data to JSON format
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            // Assuming the response contains a JWT token and user details
            const { token, user } = data;

            // Store the token and user details as needed
            localStorage.setItem('authToken', token); // Save the JWT token to localStorage
            console.log('User logged in successfully:', user);
            return { token, user };
        } catch (error) {
            console.error('Failed to log in user:', error);
        }
    };

    return (
        <div>
            <Navbar />

            <HomePage />
            
            
        </div>
    );
};
export default Home;
