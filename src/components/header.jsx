import 'antd/dist/antd.css';
import {     
    LeftOutlined,
    RightOutlined,
    SearchOutlined

 } from "@ant-design/icons"
 import { Space } from 'antd';

 import '../css/header.css'
import Headerpix from './images/headerpix.jpeg'

function Header () {
    return(
        <div id='headr'>
                
        <div className='headrCirpic'>
        <p><img src={Headerpix} alt='headerpix' /> Hey! Akeem</p>
        </div>
        <Space>
        <LeftOutlined />
        <RightOutlined />
        <SearchOutlined />
        </Space>
        </div>
    )
}

export default Header;