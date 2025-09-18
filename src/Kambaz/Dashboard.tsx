import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div className="wd-dashboard-course">
      <img src="/images/reactjs.jpg" width={200} />
      <div>
      <Link to="/Kambaz/Courses/1234/Home">
      <h5>CS1234 React JS</h5>
      </Link>

      <p className="wd-dashboard-course-title">
      Full Stack software developer
      </p>

      <Link to="/Kambaz/Courses/1234/Home">
      <button>Go</button>
      </Link> 
      </div>
      </div>&nbsp;

      <div className="wd-dashboard-course">
      <img src="/images/nodejs.jpg" width={200} />
      <div>
      <Link to="/Kambaz/Courses/2345/Home">
      <h5>CS2345 Node.js</h5>
      </Link>

      <p className="wd-dashboard-course-title">
      Backend Development
      </p>

      <Link to="/Kambaz/Courses/2345/Home">
      <button>Go</button>
      </Link>
      </div>
      </div>&nbsp;

      <div className="wd-dashboard-course">
      <img src="/images/python.jpg" width={200} />
      <div>
      <Link to="/Kambaz/Courses/3456/Home">
      <h5>CS3456 Python</h5>
      </Link>

      <p className="wd-dashboard-course-title">
      Foundations of Data Science 
      </p>

      <Link to="/Kambaz/Courses/3456/Home">
      <button>Go</button>
      </Link>
      </div>
      </div>&nbsp;

      <div className="wd-dashboard-course">
      <img src="/images/r.jpg" width={200} />
      <div>
      <Link to="/Kambaz/Courses/4567/Home">
      <h5>CS4567 R</h5>
      </Link>

      <p className="wd-dashboard-course-title">
      Database Design 
      </p>

      <Link to="/Kambaz/Courses/4567/Home">
      <button>Go</button>
      </Link>
      </div>
      </div>&nbsp;

      <div className="wd-dashboard-course">
      <img src="/images/java.jpg" width={200} />
      <div>
      <Link to="/Kambaz/Courses/5678/Home">
      <h5>CS5678 Java</h5>
      </Link>

      <p className="wd-dashboard-course-title">
      Object Oriented Design 
      </p>

      <Link to="/Kambaz/Courses/5678/Home">
      <button>Go</button>
      </Link>
      </div>
      </div>&nbsp;

      <div className="wd-dashboard-course">
      <img src="/images/c++.jpg" width={200} />
      <div>
      <Link to="/Kambaz/Courses/6789/Home">
      <h5>CS6789 C++</h5>
      </Link>

      <p className="wd-dashboard-course-title">
      Systems 
      </p>

      <Link to="/Kambaz/Courses/6789/Home">
      <button>Go</button>
      </Link>
      </div>
      </div>&nbsp;

      <div className="wd-dashboard-course">
      <img src="/images/drracket.jpg" width={200} />
      <div>
      <Link to="/Kambaz/Courses/2800/Home">
      <h5>CS2800 Dr. Racket</h5>
      </Link>

      <p className="wd-dashboard-course-title">
      Logic and Computation 
      </p>

      <Link to="/Kambaz/Courses/2800/Home">
      <button>Go</button>
      </Link>
      </div>
      </div>&nbsp;

      <div className="wd-dashboard-course">
      <img src="/images/html.jpg" width={200} />
      <div>
      <Link to="/Kambaz/Courses/4550/Home">
      <h5>CS4550 HTML</h5>
      </Link>

      <p className="wd-dashboard-course-title">
      Web Development 
      </p>

      <Link to="/Kambaz/Courses/4550/Home">
      <button>Go</button>
      </Link>
      </div>
      </div>&nbsp;

    </div>
);}
