
const SignUpPage =()=>{
       return(
        <div>
            <div className="LogIn">
                 <div className="LogInLeft">
                    <p>Uiu friends loan and cloud sourcing</p>
                    <img className='Images' src="/Img/HomePic.jpg" alt="" />
                 </div>

                 <div className="LogInRight">
                     <form action="">
                        <p>Sign Up</p> 
                        <div className='input_container'>
                        <label htmlFor="id"> Id Number :</label>
                        <input id="id" name="id" type="text" className='input1' placeholder="Enter Id number" /> 
                        </div>
                        <div className='input_container'>
                        <label htmlFor="phone">Phone Number:</label>
                        <input id="phone" name="phone" type="text" className='input3' placeholder='Enter phone number' />
                        </div>
                        <div className='input_container'>
                        <label htmlFor="email">Enter Email:</label>
                        <input id="email" name="email" type="email" className='input4'  placeholder='Enter Email'/>
                        </div>
                        <div className='input_container'>
                        <label htmlFor="pass">  Password :</label>
                        <input id="pass" name="password" type="text" className='input5' placeholder="Enter password"/> 
                        </div>
                         <button className="LoginButton">Sign Up</button> <br />
                                     
                     </form>
                 </div>

           </div>
        </div>
       )
}
export default SignUpPage;