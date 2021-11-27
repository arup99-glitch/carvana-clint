import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoggIn from "./components/LoggIn/LoggIn";
import Footer from "./components/footer/Footer";
import AuthProvider from "./utilities/context/AuthProvider";
import PrivateRouter from "./components/PrivateRouter/PrivateRouter";
import OPlased from "./components/OPlaced/OPlased";
import BookForm from "./components/BookForm/BookForm"
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Dashboard from "./components/Dashboard/Dashboard";
import MyOrders from "./components/MyOrders/MyOrders";
import Explore from "./components/Explore/Explore";

function App() {
  return (
    
      <div className="container-fluid overflow-hidden edit">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <PrivateRouter path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRouter>
            <PrivateRouter path="/book/:id">
              <BookForm></BookForm>
            </PrivateRouter>
            <PrivateRouter path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRouter>
            <Route exact path="/">
              {" "}
              <Home></Home>
            </Route>
            <Route path="/explore">
              {" "}
              <Explore></Explore>
            </Route>
            <Route path="/home">
              {" "}
              <Home></Home>
            </Route>
            <Route path="/booked">
              <OPlased></OPlased>
            </Route>
            <Route path="/login">
              <LoggIn></LoggIn>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
