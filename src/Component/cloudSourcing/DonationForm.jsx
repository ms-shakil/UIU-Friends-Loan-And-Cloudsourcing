import './CloudSourcing.css';
const DonationForm =()=>{

    return(
        <div>
            <div className="DonationForm">
                <div className="DonatironFormItems">
                     <p>Donation</p>
                     <div className='identity'> <span >I dont want to share my identity .</span> </div>
                     <div className='inputcontainer'>
                     <label htmlFor="amount"> Donate Amount :</label>
                     <input  type="text" id="amount" name="amount" /> 
                     </div>
                     <div className='pymentText'>Select payment methods:</div>       
                     <div className="ImageDiv">
                     <img  src="Img/bk.png" alt="" width={30} height={30} title="Comming soon..." />
                     <img  src="Img/nogod.webp" alt="" width={30} height={30} title="Comming soon..." />
                     <img  src="Img/dbbl.png" alt="" width={30} height={30} title="Comming soon..." />
                     <img  src="Img/visa.png" alt="" width={30} height={30} title="Comming soon..." />
                     </div>
                     
                     <button>Donate</button>



                </div>

            </div>
        </div>
    )
}
export default DonationForm;