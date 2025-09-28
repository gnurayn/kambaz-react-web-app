import { Routes, Route, Navigate } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import CourseNavigation from "./Navigation";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";

const AlignJustify = FaAlignJustify as React.ElementType;

export default function Courses() {
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <AlignJustify className="me-4 fs-4 mb-1" />
        Course 1234</h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
            <Route path="People" element={<h1>People</h1>} />
          </Routes>
        </div></div>

    </div>
  );
}
