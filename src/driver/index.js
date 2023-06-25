import { Routes, Route } from "react-router";
import ProfileScreen from "../users/profile";
import ExploreScreen from "./explore-screen";
import HomeScreen from "./home-screen";
import NavigationSidebar from "./navigation-sidebar";
import ProtectedRoute from "../users/protected-route";
import Login from "../users/login"
import Register from "../users/register"
import NextRace from "./home-screen/next-race"
// import { Provider } from "react-redux";
// import { store } from "./store";

function Driver() {
  return (
    // <Provider store={store}>
    <div className="row">
      <div className="col-2">
        <NavigationSidebar />
      </div>

      <div className="col-7">
        <Routes>
          <Route path="home" element={<HomeScreen />} />
          <Route path="explore" element={<ExploreScreen />} />      
          <Route path="messages" element={<ProtectedRoute><h1>Messages</h1> </ProtectedRoute>} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="profile" element={<ProfileScreen />} />
        </Routes>
      </div>

      <div className="col-3">
        <NextRace />
      </div>
    </div>
    // </Provider>
  );
}

export default Driver;
