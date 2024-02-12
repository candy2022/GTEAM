import { Link } from 'react-router-dom';
import NavigationBar from "../Components/NavigationBar";
import "../Styles/inputstyle.css";

function PhotoiInput(){
    return(
        <div >
        <NavigationBar
        menuItems={[
          { name: 'Home', link: '/dashboard' },
          { name: 'Community', link: '/board' },
          { name: 'Moneybook', link: '/moneybook'},
          { name: 'Mypage', link: '/mypage' },
        ]}
      />
        <div className="inputContainer">
         
        <Link to="/moneybook"><button className='backbtn' >&lt;</button> </Link>
        
        <div className='uploadbox'>
        <h2>Enter receipt as consumption history</h2>

        <p>Select a photo file and AI will automatically enter it into your consumption history.</p>
        <br />
        <button className='savebtn'>file upload</button>
        </div>
        <div className='sulmung'>
        <p>Your files are secure on NeatFin servers and will be deleted if you do not save them. <br />
        By using this service, you agree to NeatFin's Terms of Use and Privacy Policy.</p>
        <h4>1. Please scan or take a digital photo of your receipt. The photo must clearly show the contents of the receipt.
        <br />
        2. Uses OCR technology to extract text from photos. This allows the computer to read the text on the receipt.
        <br />
        3. Create consumption details based on the extracted text. Extract the necessary information and organize the amount, date, item, etc. into consumption details.
     </h4>
        </div>
     
      </div>
    </div>

    )
}
export default PhotoiInput;