import React from "react";
import Home from "./pages/student/Home";
import { Routes, Route, useMatch } from "react-router-dom";
import CoursesList from "./pages/student/CoursesList";
import CourseDetails from "./pages/student/CourseDetails";
import MyEnrollments from "./pages/student/MyEnrollments";
import Player from "./pages/student/Player";
import Loading from "./components/students/Loading";
import Educator from "./pages/educator/Educator";
import AddCourse from "./pages/educator/AddCourse";
import Dashboard from "./pages/educator/Dashboard";
import MyCourses from "./pages/educator/MyCourses";
import StudentEnrolled from "./pages/educator/StudentEnrolled";
import Navbar from "./components/students/Navbar";
import "quill/dist/quill.snow.css";

const App = () => {
  const isEducatorRoute = useMatch("/educator/*");

  return (
    <div className="text-default min-h-screen bg-white">
      {!isEducatorRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />

        
        <Route path="/educator" element={<Educator />}>
          <Route path="/educator" element={<Dashboard />}/>
          <Route path="add-course" element={<AddCourse />}/>
          <Route path="my-course" element={<MyCourses />}/>
          <Route path="student-enrolled" element={<StudentEnrolled />}/>
          

        </Route>


      </Routes>
    </div>
  );
};

export default App;