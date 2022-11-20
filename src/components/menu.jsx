import '../css/menu.css'
import 'antd/dist/antd.css';

import {
    HomeFilled,
    GlobalOutlined,
    HeartOutlined,
    FolderViewOutlined,
    ReconciliationOutlined,
    AppstoreAddOutlined
  } from '@ant-design/icons';
  

function Menu(){
    return (
        <>
            <div id="Menu">
            

                <p><HomeFilled style={{color: "none", fill:"red", border: 'red'}} /> Home</p>
                <p>  <GlobalOutlined/> Discover</p>
                <br/>

                
                <p><FolderViewOutlined />   Your Library</p>
                <p><HeartOutlined/> Liked Songs</p>
                <p><ReconciliationOutlined /> Recently Played</p>
                

                <p><AppstoreAddOutlined /> Create Playlist</p>
                <br/>

                <h3><FolderViewOutlined></FolderViewOutlined> My Playlists</h3>
                <p>African Heat</p>
                <p>Gidi Nights</p>
                <p>Running out of playlist na</p>
                <p>Gidi Nights</p>
                <p>African Heat</p>
                <p>Gidi Nights</p>
                <p>Running out of playlist na</p>
                <p>Gidi Nights</p>
                <p>African Heat</p>
                <p>Gidi Nights</p>
                <p>Running out of playlist na</p>
                <p>Gidi Nights</p>
            </div>
            
        </>
    )
}


export default  Menu


