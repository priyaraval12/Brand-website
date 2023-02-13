import {Routes,Route,useNavigationType,useLocation,} from "react-router-dom";
import Home  from "./Pages/Home";
import Signup  from "./Pages/Signup";
import Login  from "./Pages/Login";
import Loadmore  from "./Pages/Loadmore";
import CreateNFT  from "../src/Components/CreateNFT";
// import Profile from "./Pages/Profile";
import { useEffect } from "react";
import Item from "./Components/Item";
import CreateItem from "./Components/CreateItem";
import Item2 from "./Components/Item2";
import WalletButton from "./Components/WalletButton";



function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
   
 
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Loadmore" element={<Loadmore />} />
      <Route path="/CreateNFT" element={<CreateNFT />} />
      <Route path="CreateItem" element={<CreateItem/>}/>
      <Route path="/Item" element={<Item />} />
      <Route path="/Item2" element={<Item2 />} />
      <Route path="WalletButton" Component={<WalletButton/>}/>
     </Routes>
  );
}
export default App;
