import '../css/phonemenu.css'
import 'antd/dist/antd.css';
import { 
    HomeFilled,
    GlobalOutlined,
    FolderViewOutlined,
    GoldenFilled
 } from '@ant-design/icons';


function PhoneMenu (){

    return(
        <div id="Phonemenu" >        
            <HomeFilled/>
            <GoldenFilled/>
            <GlobalOutlined/>
            <FolderViewOutlined/>
        
        </div>
    )
}

export default PhoneMenu;