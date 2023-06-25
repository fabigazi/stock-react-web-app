import { Routes, Route } from "react-router";
import ProfileScreen from "../users/profile";
import ExploreScreen from "./explore-screen";
import HomeScreen from "./home-screen";
import NavigationSidebar from "./navigation-sidebar";
import ProtectedRoute from "../users/protected-route";
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
          <Route path="notifications" element={<ProtectedRoute><h1>Notifications</h1></ProtectedRoute>} />
          
          <Route path="messages" element={<ProtectedRoute><h1>Messages</h1> </ProtectedRoute>} />
          
          <Route path="bookmarks" element={<h1>Bookmarks</h1>} />
          <Route path="profile" element={<ProfileScreen />} />
        </Routes>
      </div>

      <div className="col-3">
      </div>
    </div>
    // </Provider>
  );
}

export default Driver;
