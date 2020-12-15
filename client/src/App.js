import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./styles/index.css";

// importing components for auth
import Login from "./components/Login";
import Logout from "./components/Logout";

// importing navbar component
import Nav from "./components/Nav";

// importing Home page
import Home from "./components/Home";

// importing the calendar component
// import MyCalendar from "./components/Calendar";

// importing the forms of what we're tracking
import EventForm from "./components/EventForm";
import ChoreForm from "./components/ChoreForm";
import BillForm from "./components/BillForm";
import GroceryForm from "./components/GroceryForm";

// importing page to display if a bad route is used
import NoMatch from "./pages/NoMatch";

// importing component for footer
import Footer from "./components/Footer";

function App() {
  // setting up the state of the user
  // const [user, setUser] = useState();
  // after you complete the api call to get the googleID
  // setUser

  // the next 14ish lines are current attempts at incorporating
  // scrolling functionality
  const [currentPage, setCurrentPage] = useState();
  const featureRef = useRef(null);
  const teamRef = useRef(null);

  // this will fire anytime the currentPage changes
  // only fires the first time the page loads
  useEffect(() => {
    if (currentPage === "features" && featureRef.current) {
      featureRef.current.scrollIntoView();
    } else if (currentPage === "team" && teamRef.current) {
      teamRef.current.scrollIntoView();
    }
  }, [currentPage]);

  return (
    <Router>
      <Nav setCurrentPage={setCurrentPage} />

      <div>
        <p>TESTING</p>
        {currentPage}
      </div>
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/" component={BillForm} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/bills" component={BillForm} />
          <Route path="/chores" component={ChoreForm} />
          <Route path="/events" component={EventForm} />
          <Route path="/groceries" component={GroceryForm} />

          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
