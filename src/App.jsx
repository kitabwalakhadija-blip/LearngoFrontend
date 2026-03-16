import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./assets/css-files/navbar.css";
import "./assets/css-files/footer.css";
import "./assets/css-files/Projectimage.css";
import "./assets/css-files/Contactus.css";
import "./assets/css-files/about.css";
import "./assets/css-files/explore-courses.css";
import "./assets/css-files/enquiries.css";
import "./assets/css-files/placments.css";
import "./assets/css-files/allcourses.css";
import MyHeader from "./components/myHeader";
import Navbar from "./components/Navbar";
import Counter from "./components/use-state/Counter";
import Greet from "./components/use-state/Greet";
import Togg from "./components/use-state/Togg";
import ArrUpdate from "./components/use-state/ArrUpdate";
import ToDoList from "./components/use-state/ToDoList";
import DataFetch from "./components/use-effect/DataFetch";
import AdminPanel from "./components/AdminPanel";
import FacultyPanel from "./components/FacultyPanel";
//import Sidebar from './components/Sidebar';
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";

import About from "./Pages/About";
import Home from "./Pages/Home";
import Courses from"./Pages/Courses";
import NotFound from "./Pages/NotFound";
import ViewStud from "./Pages/ViewStud";
import StudentDetail from "./Pages/StudentDetail";
import Enquire from "./Pages/Enquire";
import Placement from "./Pages/Placement";
import CourseBsc1 from "./Pages/CourseBsc1";
import CourseBsc2 from "./Pages/CourseBsc2";
import CourseBsc3 from "./Pages/CourseBsc3";
import CourseBsc4 from "./Pages/CourseBsc4";
import CourseBsc5 from "./Pages/CourseBsc5";
import CourseBsc6 from "./Pages/CourseBsc6";
import CourseBa from "./Pages/CourseBa";
import CourseBa2 from "./Pages/CourseBa2";
import CourseBArch from "./Pages/CourseBArch";
import CourseBca from "./Pages/CourseBca";
import CourseBba from "./Pages/CourseBba";
import CourseBms from "./Pages/CourseBms";
import CourseBtech from "./Pages/CourseBtech";
import CourseBPhar from "./Pages/CourseBPhar";
import CourseBcom from "./Pages/CourseBcom";
import CourseBvoc from "./Pages/CourseBvoc";
import CourseMsc from "./Pages/CourseMsc";
import CourseMsc2 from "./Pages/CourseMsc2";
import CourseMa from "./Pages/CourseMa";
import CourseMba from "./Pages/CourseMba";
import CourseMcom from "./Pages/CourseMcom";
import CourseMca from "./Pages/CourseMca";
import CourseMTech from "./Pages/CourseMTech";
import CourseME from "./Pages/CourseME";
import CourseMArt from "./Pages/CourseMArt";
import CourseMllm from "./Pages/CourseMllm";
import CourseMbe from "./Pages/CourseMbe";
import CourseMds from "./Pages/CourseMds";
import CourseMdes from "./Pages/CourseMdes";
import CourseMftech from "./Pages/CourseMftech";
import CourseMed from "./Pages/CourseMed";
import Task from "./components/use-effect/Task";
import User from "./Pages/User";
import UserForm from "./Pages/UserForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/viewstud/:id" element={<ViewStud />} />
        <Route path="/studentdetail" element={<StudentDetail />} />
        <Route path="/enquire" element={<Enquire />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/coursebsc1" element={<CourseBsc1 />} />
        <Route path="/coursebsc2" element={<CourseBsc2 />} />
        <Route path="/coursebsc3" element={<CourseBsc3 />} />
        <Route path="/coursebsc4" element={<CourseBsc4 />} />
        <Route path="/coursebsc5" element={<CourseBsc5 />} />
        <Route path="/coursebsc6" element={<CourseBsc6 />} />
        <Route path="/courseba" element={<CourseBa />} />
        <Route path="/courseba2" element={<CourseBa2 />} />
        <Route path="/courseBPhar" element={<CourseBPhar />} />
        <Route path="/coursebca" element={<CourseBca />} />
        <Route path="/coursebms" element={<CourseBms />} />
        <Route path="/coursebba" element={<CourseBba />} />
        <Route path="/coursebarch" element={<CourseBArch />} />
        <Route path="/coursebcom" element={<CourseBcom />} />
        <Route path="/coursebvoc" element={<CourseBvoc />} />
        <Route path="/coursebtech" element={<CourseBtech />} />
        <Route path="/coursemsc" element={<CourseMsc />} />
        <Route path="/coursemsc2" element={<CourseMsc2 />} />
        <Route path="/coursema" element={<CourseMa />} />
        <Route path="/coursemba" element={<CourseMba />} />
        <Route path="/coursemcom" element={<CourseMcom />} />
        <Route path="/coursemca" element={<CourseMca />} />
        <Route path="/coursetech" element={<CourseMTech />} />
        <Route path="/courseme" element={<CourseME />} />
        <Route path="/coursemart" element={<CourseMArt />} />
        <Route path="/coursemllm" element={<CourseMllm />} />
        <Route path="/coursembe" element={<CourseMbe />} />
        <Route path="/coursemds" element={<CourseMds />} />
        <Route path="/coursemdes" element={<CourseMdes />} />
        <Route path="/coursemftech" element={<CourseMftech />} />
        <Route path="/coursemed" element={<CourseMed />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/facultypanel" element={<FacultyPanel />} />
        <Route path="/task" element={<Task />} />
        <Route path="/userform" element={<UserForm />} />
        <Route path="/user" element={<User />} />
      </Routes>

      {/* <MyHeader></MyHeader>
           <Counter></Counter>
           <Greet></Greet>
           <Togg></Togg>
         <ArrUpdate></ArrUpdate>
           <ToDoList></ToDoList>
        <DataFetch></DataFetch>  */}

      <Navbar></Navbar>

      <Footer></Footer>
    </>
  );
}

export default App;
