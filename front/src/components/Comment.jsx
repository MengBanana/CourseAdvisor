import React, { Component } from 'react';
import queryString from "query-string";
import { getCommentsByQuery } from "../services/getComments";
// import { getProfessor } from "../services/getProfessors";
// import { getCourse} from "../services/getCourses";
import Like from "./like";
import Popup from "reactjs-popup";
import axios from "axios";

// list all the comments comment professor and course
class Comment extends Component {

    constructor(props) {
        super(props);
        this.handleLike = this.handleLike.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.handleOnClickAddComment = this.handleOnClickAddComment.bind(this);
        this.state =  {
            courseId:this.props.match.params.courseId,
            professor:this.props.match.params.professor,
            comments:[],
            newComment: ""
            // courseInstance: [],
            // professorInstance: []
        }
    }

    async componentDidMount() {
        const comments = await getCommentsByQuery(this.state.courseId, this.state.professor);
        //const courseInstance = await getCourse(this.state.courseId);
        //const professorInstance= await getProfessor(this.state.professor);
        this.setState (
            {comments:comments},
            //{courseInstance:courseInstance},
            //{professorInstance:professorInstance}
            )
    }

    handleLike(comment) {
        const comments = [...this.state.comments];
        const index = comments.indexOf(comment);
        comments[index] = {...comment};
        comments[index].liked = !comments[index].liked;
        this.setState(
            {comments:comments}
            );
        console.log(comment);
    }

    onChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    );
  }  

  onSubmit(e) {
    e.preventDefault();
    this.addToDB();
    //<Redirect to="/search" />;
  } 

    addToDB() {
    axios
      .post("/users/comment", {
        data: {
          username: "xz2969",
          professor: this.state.professor,
          courseId: this.state.courseId,
          courseName: this.state.courseName,
          comment: this.state.newComment
        }
      })
      .then(() => {
          this.props.history.push(`/comment/${this.state.courseId}/${this.state.professor}`);
        })
      .catch(error => {
        console.log("Comment Failed!");
      });
  }


    render() {
        console.log(this.state.courseInstance);
        console.log(this.state.professorInstance);
        console.log(this.state.comments);
        const {comments} = this.state;
        return (
            <div style={{fontFamily:"Crete Round"}}>
            <div className="jumbotron-fluid p-md-5 text-white rounded bg-warning">
            <div className="col-md px-0">
            <h1 className="display-4 font-italic">This is Course Description</h1>
            <p className="lead my-3">This is Professor Descriptionhis is Professor Descriptionhis is Professor Descriptionhis is Professor Descriptionhis is Professor Descriptionhis is Professor Descriptionhis is Professor Descriptionhis is Professor Descriptionhis is Professor Description</p>
            <span id="badge" className="badge badge-info m-2">Got {comments.length} Comments!</span>
            </div>
            </div>
            <div className="row">
            { comments.map(comment => ( 
              <div key={comment._id} className="card col-3 m-4" style={{borderRadius:"10%"}}>
              <div className="card-body">
              <h5 className="card-title" style={{fontSize: "22px"}}>{comment.courseId}:{comment.courseName}</h5>
              <h5 className="card-title" style={{fontSize: "16px"}}>{comment.professor}</h5>
              <div>
              <p className="card-text" style={{fontSize: "13px", color:"orange"}}>"{comment.comment}"</p>
              <p id="user" className="card-text float-right " style={{fontSize: "10px", color:"grey"}}>-by {comment.username}</p>
              </div>
              <Like liked={comment.liked } onClick={ () => this.handleLike(comment)} />
              </div>
              </div>
              ))}
            <div className="card col-3 m-4" style={{cursor: "pointer", borderRadius:"10%"}}>
            <div className="card-body">
            <div>
            <i className="far fa-plus-square fa-7x d-flex justify-content-center "></i>
            </div>
            </div>

            <div>
            <div className="modal fade" id="modalCommentForm" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header text-center">
            <h6 className="modal-title w-100 font-weight-bold">New Comment for {this.state.courseId}:{this.state.professor}</h6>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div className="modal-body mx-3">
            <div className="md-form mb-5">
            <i className="far fa-comments prefix grey-text"></i>
            <textarea type="textarea" id="defaultForm" name="newComment" className="form-control" value={this.state.newComment} onChange={this.onChange}/>
            </div>

            </div>
            <div className="modal-footer d-flex justify-content-center">
            <button className="btn btn-info" onClick={this.onSubmit}>Submit</button>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div className="text-center">
            <a href="" className="btn btn-info btn-rounded mb-4" data-toggle="modal" data-target="#modalCommentForm">Add Comment</a>
            </div>
            </div>
            </div>
            </div>
            );
    }
}



export default Comment;