import React, { useState } from 'react';
import './DonationForm.css';
import { getUser } from '../../utils/getUser';
import { getToken } from '../../utils/getToken';
import { useNavigate } from 'react-router-dom';

const CreateDonation = () => {
    // State to store the form data
    const [donationPurpose, setDonationPurpose] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    // Handle form submission
    const handleDonationSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        const user = getUser();
        const donationId = user?.userName + user?.studentId + Math.random();

        // Create a FormData object to handle file upload
        const formData = new FormData();
        formData.append('donationId', donationId); // Add donationId to form data
        formData.append('studentId', user?.studentId); // Add studentId to form data
        formData.append('purpose', donationPurpose); // Add purpose to form data
        if (imageFile) {
            formData.append('image', imageFile); // Add the image file to form data
        }

        try {
            const response = await fetch(
                'http://localhost:3000/donations/create',
                {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${getToken()}`, // Include token if required for authentication
                    },
                    body: formData, // Send FormData object
                }
            );

            if (response.ok) {
                navigate('/donation/list');
                setIsLoading(false);
                console.log('Donation created successfully');
            } else {
                setIsLoading(false);
                console.error('Failed to create donation');
            }
        } catch (error) {
            setIsLoading(false);
            console.error('Error:', error);
        }
    };

    // Handle image file change and set image file state
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file); // Save the image file to state
            setImagePreview(URL.createObjectURL(file)); // Create an image preview URL
        }
    };

    return (
        <div>
            <div className="create-donation-form">
                <form onSubmit={handleDonationSubmit}>
                    <h3>Create new doantion</h3>
                    <div className="inputcontainers">
                        <label htmlFor="purpose">Donation Purpose:</label>
                        <input
                            className="input_text"
                            type="text"
                            name="purpose"
                            id="purpose"
                            placeholder=""
                            value={donationPurpose}
                            onChange={(e) => setDonationPurpose(e.target.value)} // Save purpose to state
                        />
                    </div>

                    <div className="inputcontainers">
                        <label htmlFor="image">Images:</label>
                        <input
                            className="input_image"
                            type="file"
                            id="image"
                            onChange={handleImageChange} // Handle file upload
                        />
                    </div>

                    {imagePreview && (
                        <div>
                            <img
                                src={imagePreview}
                                alt="Preview"
                                style={{ maxWidth: '200px', marginTop: '10px' }}
                            />
                        </div>
                    )}

                    <button type="submit" className="donate_btn">
                        Submit {isLoading && 'Loading...'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateDonation;
