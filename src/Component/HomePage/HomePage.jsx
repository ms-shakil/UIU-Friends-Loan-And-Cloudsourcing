import { useNavigate } from "react-router-dom";
import "./HomePage.css";
const HomePage = () => {
  const navigate = useNavigate();
  return (
        <div>
              <div className="HomePage">
              <p>Uiu friends loan and crowd sourcing</p>  
              </div>
              

              <div className="about_cards">
              <div class="card" style={{
                backgroundImage: `url('/Img/rohinga1.webp')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
              }} >
                 <h2 class="card-heading">Donate for Rohinga</h2>
                  <p class="card-text">This is a brief description of the card content.</p>
                 <button class="card-button" onClick={() => navigate('/Donation')}>About Donate</button>
              </div>
              <div class="card"  style={{
                backgroundImage: `url('/Img/donation.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
              }}>
                 <h2 class="card-heading">Help for flood relief</h2>
                  <p class="card-text">This is a brief description of the card content.</p>
                 <button class="card-button" onClick={() => navigate('/donation/list')}> Donate</button>
              </div>
              <div class="card"  style={{
                backgroundImage: `url('/Img/loan5.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                

              }}>
                 <h2 class="card-heading">Take's loan !</h2>
                  <p class="card-text">This is a brief description of the card content.</p>
                 <button class="card-button" onClick={() => navigate('/loan')}>About Loan</button>
              </div>

              </div>



        </div>
  );
};
export default HomePage;
