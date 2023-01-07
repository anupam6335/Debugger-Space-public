import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./components/shared/Navigation/Navigation";
import Authenticate from "./pages/Authenticate/Authenticate";
import Activate from "./pages/Activate/Activate";
import Rooms from "./pages/Rooms/Rooms";
import { useSelector } from "react-redux";
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefresh";
import Loader from "./components/shared/Loader/Loader";
import Room from "./pages/Room/Room";
import { Toaster } from 'react-hot-toast'
function App() {
  // return < Loader message='Loading, Please wait... 😎'/>;

  const { loading } = useLoadingWithRefresh();
  return loading ? (
    <Loader message="Loading, Please wait... 😎" />
  ) : (
    <>
    <div>
        <Toaster
            position="top-center"
            toastOptions={{
                success: {
                    theme: {
                        primary: '#2C23E0',
                    },
                },
            }}    
        >
        </Toaster>
    </div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <GuestRoute path="/" exact>
            <Home />
          </GuestRoute>
          <GuestRoute path="/authenticate">
            <Authenticate />
          </GuestRoute>
          <SemiProtectedRoute path="/activate">
            <Activate />
          </SemiProtectedRoute>
          <ProtectedRoute path="/rooms">
            <Rooms />
          </ProtectedRoute>
          <ProtectedRoute path="/room/:id">
            <Room />
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </>
  );
}

const GuestRoute = ({ children, ...rest }) => {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuth ? (
          <Redirect
            to={{
              pathname: "/rooms",
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>
  );
};

const SemiProtectedRoute = ({ children, ...rest }) => {
  const { user, isAuth } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !isAuth ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : isAuth && !user.activated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/rooms",
              state: { from: location },
            }}
          />
        );
      }}
    ></Route>
  );
};

const ProtectedRoute = ({ children, ...rest }) => {
  const { user, isAuth } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !isAuth ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : isAuth && !user.activated ? (
          <Redirect
            to={{
              pathname: "/activate",
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>
  );
};

export default App;
