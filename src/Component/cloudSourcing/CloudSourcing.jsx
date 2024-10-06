import { Link } from 'react-router-dom';
import './CloudSourcing.css';
import CreateDonation from './CreateDonation';

const CloudSourcing = () => {
    return (
        <div>
            <div className="donation__container">
                <div className="donation__containerleft">
                    <h1>Bringing Smiles To Millions!</h1>
                    <p>
                        Donating helps those in need, promotes compassion,
                        strengthens communities, and creates a positive impact
                        on society and lives.
                    </p>
                    <Link to="/donation/list">
                        <button>View all donation</button>
                    </Link>
                </div>
                <div>
                    <CreateDonation />
                </div>
            </div>
        </div>
    );
};
export default CloudSourcing;
