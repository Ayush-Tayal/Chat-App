import "./App.css";
import Home from "./Components/Home/Home";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Signup from "./Components/SignUp/Signup";
import Signin from "./Components/SignIn/Signin";
import Four0Four from "./Components/Four0Four/Four0Four";
import Navbar from "./Components/Navbar/Navbar";
import Chat from "./Components/Chat/Chat";

function App() {
  let userEmail = localStorage.getItem("userInfo");

  function PrivateRoute({ Component, path }) {
    userEmail = localStorage.getItem("userInfo");
    return (
      <Route
        path={path}
        render={(props) =>
          userEmail ? <Component {...props} /> : <Redirect to="/signin" />
        }
      />
    );
  }

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <PrivateRoute path="/chat" Component={Chat} />
          <Route component={Four0Four} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
