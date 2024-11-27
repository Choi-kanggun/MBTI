import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Test from "../pages/Test";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import Navigation from "../components/common/Navigation";
import Profile from "../pages/Profile";
import TestResult from "../pages/TestResult";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navigation />}>
          <Route element={<PrivateRoute />}>
            <Route path="/test" element={<Test />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/test" element={<Test />} />
            <Route path="/results" element={<TestResult />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
