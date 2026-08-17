import "../css/style.css";

function Dashboard() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Tech Mentor</h2>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">Mentors</a>
          <a href="#">Profile</a>
        </div>
      </nav>

      {/* Dashboard */}
      <div className="dashboard">
        <h1>Welcome to Tech Mentor 👋</h1>
        <p>Learn coding and technology step by step.</p>

        <h2>My Courses</h2>

        <div className="courses">

          <div className="course-card">
            <h3>Python</h3>
            <p>Learn Python from beginner to advanced.</p>
            <button>Continue Learning</button>
          </div>

          <div className="course-card">
            <h3>HTML & CSS</h3>
            <p>Learn how to build beautiful websites.</p>
            <button>Continue Learning</button>
          </div>

          <div className="course-card">
            <h3>JavaScript</h3>
            <p>Learn JavaScript and make websites interactive.</p>
            <button>Continue Learning</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;