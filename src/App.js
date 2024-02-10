
import { GoogleOAuthProvider } from "@react-oauth/google";
import Messenger from "./component/Messenger";
import AccountProvider from "./context/AccountProvider";

function App() {

  const clientId = '1019902617079-k4es2mfj7khshkhps4rtdpsgt2fmhdfh.apps.googleusercontent.com';
  return (
    
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
