// src/Pages/DonationList.js

import React from 'react';
import Navbar from '../Component/Navbar';
import Donations from '../Component/cloudSourcing/Donations';

const DonationList = () => {
    return (
        <div>
            <Navbar />
            <Donations />
        </div>
    );
};

export default DonationList;
