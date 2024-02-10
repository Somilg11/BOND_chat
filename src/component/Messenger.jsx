import { useContext } from "react";

import {AppBar, Toolbar, styled, Box} from '@mui/material/';
import { AccountContext } from "../context/AccountProvider";
import LoginDialog from "./account/LoginDialog";
import ChatDialog from './chat/ChatDialog';

const Component = styled(Box)`
    height: 100vh;
    background-color: #DCDCDC;          //background color
`

const Header = styled(AppBar)`
    height: 125px;
    background-color: #00A884;      //header color
`
const LoginHeader = styled(AppBar)`
    height: 220px;
    background-color: #212121;      //header color
`


const Messenger = () => {
    const { account } = useContext(AccountContext);
    return (
        <Component>
            {
            account ?  
            
                <>
                 <Header>
                    
                        <Toolbar>

                        </Toolbar>
                    </Header>
                    <ChatDialog />
               
                </>
                :
                <>
                <LoginHeader>
                    <Toolbar>

                    </Toolbar>
                </LoginHeader>
                <LoginDialog/>
                </>
            }
        </Component>
        
    )
}

export default Messenger;