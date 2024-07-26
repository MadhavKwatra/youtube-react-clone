import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Subscriptions from "./pages/Subscriptions";
import Library from "./pages/Library";
import Account from "./pages/Account";
import MainNavigation from "./components/Header/MainNavigation";
import SideNavigation from "./components/SideNavigation/SideNavigation";
import { useState } from "react";
import BottomNavigation from "./components/BottomNavigation/BottomNavigation";

function App() {
  const [isSideNavExtended, setIsSideNavExtended] = useState(true);

  const extendSideNavHandler = () => {
    setIsSideNavExtended((prevState) => !prevState);
  };

  return (
    <div>
      <MainNavigation onClickSideNavBtn={extendSideNavHandler} />
      <SideNavigation isExtended={isSideNavExtended} />
      <BottomNavigation />
      <main
        id="main"
        style={{
          marginLeft: isSideNavExtended ? "200px" : "70px",
          // marginLeft:isMobile?'0':
        }}
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/feed/explore" element={<Explore />}></Route>
          <Route path="/feed/subscriptions" element={<Subscriptions />}></Route>
          <Route path="/feed/library" element={<Library />}></Route>
          <Route path="/shorts/:shortId"></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/results?search_query="></Route>
          <Route path="/playlist?list="></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
