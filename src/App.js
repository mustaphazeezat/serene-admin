import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import SignUP from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import ForgotPassword from "./pages/auth/ForgotPassword";
import PrivateRoute from "./routes/PrivateRoute";
import AuthRoute from "./routes/AuthRoute";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<PrivateRoute/>}>
            <Route path='/' element={<Dashboard/>}/>
          </Route>
          <Route path='/sign-up' element={<AuthRoute />}>
            <Route path="/sign-up" element={<SignUP />} />
          </Route>
          <Route path='/log-in' element={<AuthRoute />}>
            <Route path="/log-in" element={<SignIn />} />
          </Route>
          <Route path='/forgot-password' element={<AuthRoute />}>
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>

        </Routes>
    </Router>
  );
}

export default App;
