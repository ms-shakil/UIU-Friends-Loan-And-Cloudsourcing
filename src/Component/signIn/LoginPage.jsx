import { Link } from 'react-router-dom';
import './LogInPage.css';

const LoginPage =()=>{
 
    return(
        <div>
           <div className="LogIn">
                 <div className="LogInLeft">
                    <p>uiu friends loan and cloud sourcing</p>
                    <img className='Images' src="/Img/HomePic.jpg" alt="" />
                 </div>

                 <div className="LogInRight">
                    <form action="">
                        <p>log in</p> 
                        <div className='input_container'>
                            <label htmlFor="1">Student ID :</label>
                            <input id="1" name="id" type="text" className='input1' placeholder="Enter Id number" />
                        </div>
                        <div className='input_container'>
                            <label htmlFor="2">Password :</label>
                            <input id="2" name="password" type="password" className='input2' placeholder="Enter password"/> <br />
                        </div>
                        <button className="LoginButton">Log In</button>
                        <div className='external_info'>
                            <Link to="/signup"><a>Create New Account </a></Link> <span>|</span> <a href='#'>forget password ? </a>
                        </div>
                    </form>
                 </div>

           </div>
        </div>
    )
 
}
export default LoginPage;