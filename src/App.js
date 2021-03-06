import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./SideBar.css";

// Pages imports
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SingUpPage";
import ClassroomsPage from "./pages/ClassroomsPage";
import TeachersPage from "./pages/TeachersPage";
import TimetablePage from "./pages/TimetablePage";
import Header from "./components/Header";
import AddClassroomPage from "./pages/AddClassroomPage";
import AddTeachersPage from "./pages/AddTeachersPage";
import AddTimeTablePage from "./pages/AddTimeTablePage";
import AddSubjectsPage from "./pages/AddSubjectsPage";
import SubjectsPage from "./pages/SubjectsPage";
import Footer from "./components/Footer";
import DrawerHome from "./components/DrawerHome";
import NoMatchPage from "./components/NoMatchPage";

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/classrooms" component={ClassroomsPage} />
          <Route exact path="/teachers" component={TeachersPage} />
          <Route exact path="/timetable" component={TimetablePage} />
          <Route exact path="/addclassroom" component={AddClassroomPage} />
          <Route exact path="/addteachers" component={AddTeachersPage} />
          <Route exact path="/addtimetable" component={AddTimeTablePage} />
          <Route exact path="/subjects" component={SubjectsPage} />
          <Route exact path="/addsubjects" component={AddSubjectsPage} />
          <Route exact path="/drawer" component={DrawerHome} />

          <Route component={NoMatchPage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
