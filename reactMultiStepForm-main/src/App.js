import "./App.css";
import FormComponent from "./component/FormComponent";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import LandingPage from "./component/Steps/LandingPage";


function App() {
  // const renderContent = () => {
    
  //   if (isMobile) {
  //     return <FormComponent/>
  //   }
  //   else{
  //     return <LandingPage/>
  //   }
  // }
 return(
  // <LandingPage/>
  <FormComponent/>
 )
  
}

export default App;
