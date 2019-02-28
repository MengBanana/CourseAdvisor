/* eslint react/prop-types: 0 */
import React, { Component } from "react";
// import queryString from "query-string";
import Like from "./like";
import axios from "axios";

// list all the comments comment professor and course
class Comment extends Component {

  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      courseId:this.props.match.params.courseId,
      professor:this.props.match.params.professor,
      comments:["comments"],
      newComment: "",
      professorD: "",
      courseD: "",
      courseName: "",
      pTitle: "",
    };
  }

  componentDidMount() {
    this.getPD();
    this.getCD();
    this.getComments();
  }


  getPD() { // professor description
    axios
      .get("/search/getPD", {
        params: {
          professor: this.state.professor,
        }
      })
      .then(data => {
        console.log("got professor description!");
        console.log(data);
        this.setState ({
          professorD: data.data[0].description,
          pTitle: data.data[0].title
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getCD() { // comment description
    axios
      .get("/search/getCD", {
        params: {
          courseId: this.state.courseId
        }
      })
      .then(data => {
        console.log("got course description!");
        console.log(data);
        this.setState ({
          courseD: data.data[0].description,
          courseName: data.data[0].courseName
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getComments() {
    axios
      .get("/search/getComments", {
        params: {
          professor: this.state.professor,
          courseId: this.state.courseId
        }
      })
      .then(data => {
        console.log("got comments data!");
        console.log(data);
        this.setState ({
          comments:[...data.data]
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  saveComments(){
    axios
      .post("/search/saveComments", {
        data: {
          username: "Cola",
          professor: this.state.professor,
          courseId: this.state.courseId,
          courseName: this.state.courseName,
          comment: this.state.newComment
        }
      })
      .then(res => {
        console.log("Comment sent!", res);
      })
      .catch(error => {
        console.log("saveComments Failed!", error);
      });
  }


  handleLike(comment) {
    const comments = [...this.state.comments];
    const index = comments.indexOf(comment);
    comments[index] = {...comment};
    comments[index].liked = !comments[index].liked;
    this.setState(
      {comments:comments}
    );
  }

  onChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    );
  } 

  onSubmit() {
  // e.preventDefault();
    this.saveComments();
    this.getComments();
  } 


  render() {
    const {comments} = this.state;
    let i=0;
    return (
      <div style={{fontFamily:"Crete Round"}} >
        <div className="jumbotron-fluid p-md-5 text-white rounded bg-warning" style={{opacity:"0.8"}}>
          <div className="col-12 px-0">
            <h1 className="font-italic">{this.state.courseId}:{this.state.courseName}</h1>
            <p style={{fontSize: "13px", color:"black"}}><span className="font-italic" style={{fontSize: "18px"}} >Course Description </span>: {this.state.courseD}</p>
          </div>
          <div className="col-12 px-0">
            <h3 className="font-italic">{this.state.professor}</h3>
            <h6 style={{fontSize: "13px", color:"black"}}><span className="font-italic" style={{fontSize: "18px"}}>Title</span> : {this.state.pTitle}</h6>
            <p style={{fontSize: "13px", color:"black"}}><span className="font-italic" style={{fontSize: "18px"}}>Professor Description</span> : {this.state.professorD}</p>
            <span id="badge" className="badge badge-info m-2">Got {comments.length} Comments!</span>
          </div>
        </div>
        <div className="row">
          { comments.map(comment => (
            <div key={i++} className="card col-3 m-4" style={{borderRadius:"10%"}}>
              <div className="card-body">
                <div>
                  <p className="card-text font-italic" style={{fontSize: "15px", color:"#4f2b0e"}}>&quot;{comment.comment}&quot;</p>
                  <p id="user" className="card-text row float-right " style={{fontSize: "12px", color:"#ff9e4f"}}>-by {comment.username}</p>
                </div>
                <Like liked={comment.liked } onClick={ () => this.handleLike(comment)} />
              </div>
            </div>
          ))}
          <div className="card col-3 m-4" style={{borderRadius:"10%"}}>
            <div className="card-body">
              <div>
                <i className="far fa-plus-square fa-7x d-flex justify-content-center" style={{opacity:"0.5"}}></i>
              </div>
            </div>

            <div>
              <div className="modal fade" id="modalCommentForm" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header text-center">
                      <h6 className="modal-title w-100 font-weight-bold">New Comment for &quot;{this.state.courseId} - {this.state.professor}&quot;</h6>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body mx-3">
                      <div className="md-form mb-5">
                        <i className="far fa-comments prefix grey-text"></i>
                        <textarea type="text" id="defaultForm" name="newComment" placeholder="Enter your comment" className="form-control" value={this.state.newComment} onChange={this.onChange}/>
                      </div>

                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                      <button className="btn btn-info" data-dismiss="modal" onClick={this.onSubmit}>Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-info btn-rounded mb-4" data-toggle="modal" data-target="#modalCommentForm">Add Comment</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default Comment;