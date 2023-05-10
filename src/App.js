import "./App.css";
import React from "react";
// import { Checkbox } from '';
import Login from "./components/login/Login";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignUp from "./components/signUp/SignUp";
import Tasks from "./components/Tasks";
import Projects from "./components/Projects";
import Main from "./components/Main";
import MyHome from "./components/MyHome";
import Goals from "./components/Goals";
import About from "./components/About";
import Help from "./components/Help";
import Profile from "./components/profile/Profile";
import Home from "./components/Home";
import { PublicProjects } from "./components/landingPage/publicProjects/PublicProjects";
import NewProject from "./components/newProject/NewProject";
import { UserContextProvider } from "./context/User.context";
import AllTasks from "./components/AllTasks/AllTasks";
import AddProjectMember from "./components/newProject/addProjectMember/AddProjectMember";
import "@fontsource/heebo";
import Message from "./components/messages/Message";
import LandingPage from "./components/landingPage/LandingPage";
import HamburgerMenu from "./components/header/menu/hamburgerMenu/HamburgerMenu";
import ProjectMember from "./components/projectMember/ProjectMember";
import ProjectManaged from "./components/projectManaged/ProjectManaged";
import ProjectInvited from "./components/projectInvited/ProjectInvited";
function App() {
  return (
    <Router>
      <UserContextProvider>
        <div id="App">
          <Routes>
            {/* <Route path="/" element={<LandingPage />}></Route> */}
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/HamburgerMenu" element={<HamburgerMenu />}></Route>
            {/* <Route path=":param" element={<Home />}></Route> */}

            <Route path="login" element={<Login />}></Route>
            <Route path="signUp" element={<SignUp />}></Route>
            <Route path="/main/home" element={<MyHome />} />
            <Route path="main" element={<Main />}>
              <Route path="/main/projects" element={<Projects />} />
              <Route path="/main/goals" element={<Goals />} />
              <Route path="/main/about" element={<About />} />
              <Route path="/main/help" element={<Help />} />
              <Route path="/main/profile" element={<Profile />} />
            </Route>
            {/* <Route path="/projects/:projectId" element={<AllTasks />}></Route> */}
            {/* <Route path="/projects/newProject" element={
              <KategoriesContextProvider>
              <NewProject />
              </KategoriesContextProvider>}>
            </Route> */}
            <Route path="/projects/newProject" element={<NewProject />} />
            <Route
              path="/projects/addNewMessage/:projectId"
              element={<Message />}
            ></Route>
            <Route
              path="/projects/publicProjects"
              element={<PublicProjects />}
            ></Route>
            <Route path="/tasks" element={<Tasks />}></Route>
            <Route path="/Tasks/:projectId" element={<AllTasks />}></Route>
            <Route
              path="/addProjectMember/:projectId"
              element={<AddProjectMember />}
            ></Route>
            <Route path="/projects/:projectId" element={<AllTasks />}></Route>

            {/* <Route path="" element={<ProjectMember />}></Route>
            <Route path="" element={<ProjectManaged />}></Route>
            <Route path="" element={<ProjectInvited />}></Route>
            <Route path="" element={<About />}></Route>
            <Route path="" element={<PublicProjects />}></Route> */}
         
          </Routes>
        </div>
      </UserContextProvider>
    </Router>
  );
}

export default App;
