import React, { Component } from 'react';
import queryString from "query-string";
import { getCommentsByQuery } from "../services/getComments";
import Like from "./like";
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
            comments:["comments"],
            newComment: "",
            professorD: "",
            courseD: "",
            courseName: "",
            pTitle: ""
        }
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
          username: "xz2969",
          professor: this.state.professor,
          courseId: this.state.courseId,
          courseName: this.state.courseName,
          comment: this.state.newComment
				}
			})
			.then(res => {
				console.log("Comment sent!");
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

  onSubmit(e) {
    // e.preventDefault();
    this.saveComments();
    //<Redirect to="/search" />;
  } 


    render() {
/*        const style ={
          position: "fixed",
          left: "10px",
          bottom: "10px"
        }*/
        const {comments} = this.state;
        let i=0;
        return (
            <div style={{fontFamily:"Crete Round"}}>
            <div className="jumbotron-fluid p-md-5 text-white rounded bg-warning" style={{opacity:"0.8"}}>
            <div className="col-12 px-0">
            <h1 className="font-italic">{this.state.courseId}:{this.state.courseName}</h1>
            <p style={{fontSize: "13px"}}>{this.state.courseD}</p>
            </div>
            <div className="col-12 px-0">
            <h3 className="font-italic">{this.state.professor}</h3>
            <h6 style={{fontSize: "13px"}}>{this.state.pTitle}</h6>
            <p style={{fontSize: "13px"}}>{this.state.professorD}</p>
            <span id="badge" className="badge badge-info m-2">Got {comments.length} Comments!</span>
            </div>
            </div>
            <div className="row">
            { comments.map(comment => ( 
              <div key={i++} className="card col-3 m-4" style={{borderRadius:"10%"}}>
              <div className="card-body">
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
            <i className="far fa-plus-square fa-7x d-flex justify-content-center" style={{opacity:"0.5"}}></i>
            </div>
            </div>

            <div>
            <div className="modal fade" id="modalCommentForm" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header text-center">
            <h6 className="modal-title w-100 font-weight-bold">New Comment for "{this.state.courseId} - {this.state.professor}"}</h6>
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