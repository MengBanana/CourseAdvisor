import React from "react";

const Landing = () => {
  return (
    <div style={{fontFamily:"Crete Round"}}>

    <div className="jumbotron p-md-5 text-white rounded bg-warning">
    <div className="col-md px-0">
    <h1 className="display-4 font-italic">"Who" is Course Advisor?</h1>
    <p className="lead my-3">An online platform designd for Northeastern University Sillicon Valley campus students to share experience and write comments for a specific Computer Science course or professor</p>

    </div>
    </div>

<div className="container">
<div className="row m-4">
<div className="col-md-4">
<h2>Register Today!</h2>
<p> Simply register and login, then you can search for all the fake courses and comments!</p>
</div>
<div className="col-md-4">
<h2>Comments</h2>
<p> Able to view other students comments according to a course&professor, like it, and add your own comment</p>
</div>
<div className="col-md-4">
<h2>Upcoming...</h2>
<ul>
<li>Verified user icon with neu email</li>
<li>Reply to a posted comment</li>
<li>Real course and comment data</li>
</ul>
</div>
</div>
</div>
</div>

);
};

export default Landing;