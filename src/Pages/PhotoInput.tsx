import { Link } from 'react-router-dom';
import NavigationBar from "../Components/NavigationBar";
import "../Styles/inputstyle.css";

function PhotoiInput(){
    return(
        <div >
        <NavigationBar
        menuItems={[
          { name: 'Dashboard', link: '/dashboard' },
          { name: 'Chart', link: '/chart' },
          { name: 'Mypage', link: '/mypage' },
          { name: 'Moneybook', link: '/moneybook'},
        ]}
      />
        <div className="inputContainer">
         
        <Link to="/moneybook"><button className='backbtn' >&lt;</button> </Link>
        
        <div className='uploadbox'>
        <h2>영수증을 소비내역으로 입력</h2>

        <p>사진 파일을 선택하여 소비 내역에 자동으로 입력합니다.</p>
        <br />
        <button className='savebtn'>파일 선택</button>
        </div>
        <div className='sulmung'>
        <p>파일이 NeatFin 서버에서 안전하게 처리되며 파일을 저장하지 않으면 삭제됩니다. <br />
        이 서비스를 사용하면 NeatFin 사용 약관 및 개인정보 처리방침에 동의하게 됩니다.</p>
     <h4>1. 영수증을 스캔하거나 디지털 사진으로 찍어주세요. 사진은 영수증의 내용이 잘 보이게 해야 합니다.
        <br />
        2. 사진에서 텍스트를 추출하기 위해 OCR 기술을 사용합니다. 이를 통해 영수증에 있는 글자를 컴퓨터가 읽을 수 있도록 합니다.
        <br />
        3. 추출된 텍스트를 기반으로 소비내역을 생성합니다. 필요한 정보를 추출하고, 금액, 날짜, 품목 등을 정리하여 소비내역으로 구성합니다.
     </h4>
        </div>
     
      </div>
    </div>

    )
}
export default PhotoiInput;