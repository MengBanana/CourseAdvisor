import React from "react";

const Landing = () => {
  const sectionStyle = {
    width: "100%",
    height: "300px"
  };
  return (
    <div style={{fontFamily:"Crete Round" , opacity:"0.8"}}>

      <div className="jumbotron p-md-5 text-white rounded bg-warning">
        <div className="col-md px-0">
          <h1 className="display-4 font-italic">&quot;Who&quot; is Course Advisor?</h1>
          <p className="lead my-3">Course Advisor is an online professor and course rating platform, designd especially for Northeastern University Sillicon Valley Campus students...</p>
        </div>
      </div>

      <div className="container" style={sectionStyle}>
        <div className="row m-4">
          <div className="col-md-4">
            <h2>Register!  <i className="fas fa-users"></i></h2>
            <p> <br/>Simply register through register<br/> button on Navbar <br/><br/>Login to browse previous <br/>student&apos;s feedback of courses and <br/>professors</p>
          </div>
          <div className="col-md-4">
            <h2>Comment  <i className="fas fa-comments"></i></h2>
            <p> <br/>Search for the course section based <br/> on course and professor filters. 
            Click <br/> on view button to browse comments <br/> of the specific section, 
            Including a description of the course and professor
            <br/><br/> & &quot;Like&quot; a student&apos;s comment and write a new comment
            </p>
          </div>
          <div className="col-md-4">
            <h2>Upcoming...  <i className="fas fa-battery-three-quarters"></i></h2>
            <p>
              <br/>
              Add Verified user fearture with a <br/> speical icon, need to be verified through @husky.neu.edu email address
              <br/><br/>
              Save the comments your have liked in database and be able to delete, edit your own comments
              <br/><br/>
              Add comment reply feature
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

