import './App.css';
import React from 'react';
// import { Checkbox } from '';
import Login from './components/login/Login'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Tasks from './components/Tasks';
import Projects from './components/Projects';
import Main from './components/Main';
import MyHome from './components/MyHome';
import Goals from './components/Goals';
import About from './components/About';
import Help from './components/Help';
import Profile from './components/Profile';
import Home from './components/Home';
import { PublicProjects } from './components/PublicProjects'
import NewProject from './components/newProject/NewProject';
import { UserContextProvider } from './context/User.context';
import AllTasks from './components/AllTasks/AllTasks';


function App() {
  return (
    <Router>
      <UserContextProvider>
        <div className="App">
          <Routes>  
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="login" element={<Login />}></Route>
            <Route path="signUp" element={<SignUp />}></Route>
            <Route path="main" element={<Main />}>
              <Route path="/main/home" element={<MyHome />} />
              <Route path="/main/projects" element={<Projects />} />
              <Route path="/main/goals" element={<Goals />} />
              <Route path="/main/about" element={<About />} />
              <Route path="/main/help" element={<Help />} />
              <Route path="/main/profile" element={<Profile />} />
            </Route>
            {/* <Route path="/projects/newProject" element={
              <KategoriesContextProvider>
                <NewProject />
              </KategoriesContextProvider>}>
            </Route> */}
            <Route path="/projects/newProject" element={<NewProject />} />
            <Route path="/Tasks/:projectId" element={<AllTasks />}></Route>
            <Route path="/projects/publicProjects" element={<PublicProjects />}></Route>
            <Route path="/tasks" element={<Tasks />}></Route>
          </Routes>
        </div>
      </UserContextProvider>
    </Router>
  );
}

export default App;
