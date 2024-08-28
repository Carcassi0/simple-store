
import MainPage from "./MainPage.jsx";
import SignIn from "./RegisterPage.jsx";
import BeansPage from "./BeansPage.jsx";
import ColdBrewPage from "./ColdBrewPage.jsx";
import DripbagPage from "./DripbagPage.jsx";
import GoodsPage from "./GoodsPage.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  return(
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/register" element={<SignIn/>}/>
        <Route path="/beansstore" element={<BeansPage/>}/>
        <Route path="/coldbrewstore" element={<ColdBrewPage/>}/>
        <Route path="/dripbagstore" element={<DripbagPage/>}/>
        <Route path="/goodsstore" element={<GoodsPage/>}/>
      </Routes>
    </Router>
  );
  
}

export default App
