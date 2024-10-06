// import { useState } from "react";
// import LoanApplication from "./Component/aboutLoan/LoanApplication"
// import LoanPage from "./Component/aboutLoan/LoanPage"
// import CloudSourcing from "./Component/cloudSourcing/CloudSourcing"
// import DonationForm from "./Component/cloudSourcing/DonationForm"
// import HomePage from "./Component/HomePage/HomePage"
// import Modal from "./Component/Modal"
// import LoginPage from "./Component/signIn/LoginPage"
// import SignUpPage from "./Component/signUp/SignUpPage"
// import Navbar from "./Component/Navbar";
// import BidLoanForm from "./Component/aboutLoan/BidLoanForm"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Loan from './Pages/Loan';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Donation from './Pages/Donation';
import PrivateRoute from './Component/PrivateRoute';
import DonationList from './Pages/DonationList';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route
                        exact
                        path="/loan"
                        element={
                            <PrivateRoute>
                                <Loan />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        exact
                        path="/donation"
                        element={
                            <PrivateRoute>
                                <Donation />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        exact
                        path="/donation/list"
                        element={
                            <PrivateRoute>
                                <DonationList />
                            </PrivateRoute>
                        }
                    />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/signup" element={<SignUp />} />
                </Routes>
            </Router>
            {/* <Navbar /> */}
            {/* <BrowserRouter>
        <Router>
          <Route  path="/" element={<Navbar />} />
          <Route  path="/about" render={() => <LoanPage />} />
          <LoginPage/>
          <SignUpPage />

          <HomePage/>
          <LoanPage />
          <CloudSourcing/>
          <DonationForm />
          <LoanApplication/>
          <BidLoanForm />
          
        </Router>
      </BrowserRouter> */}
        </div>
    );
}

export default App;
