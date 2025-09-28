import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Full Stack Software Developer</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/2345/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/nodejs.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2345 Node.js</Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Backend Development</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/3456/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/python.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3456 Python</Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Foundations of Data Science</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/4567/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/r.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS4567 R</Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Database Design</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/5678/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/java.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5678 Java</Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Object Oriented Design</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/6789/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/c++.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS6789 C++</Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Systems</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/2800/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/drracket.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2800 Dr. Racket</Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Logic and Computation</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/2800/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/html.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS4550 HTML</Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Web Development</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/4450/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/css.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS4450 CSS</Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Web Design</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/3500/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/csharp.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3500 C#</Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Game Development</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/3175/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/swift.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3175 Swift</Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Mobile App Development</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/2375/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/sql.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2375 SQL</Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Relational Databases</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

        </Row>
      </div></div>

  );
}
