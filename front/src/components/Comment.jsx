import React, { Component } from 'react';
import queryString from "query-string";
import Like from "./like";

import axios from "axios";

// list all the comments comment professor and course
class Comment extends Component {

  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
    this.state =  {
        courseId:this.props.match.params.courseId,
        professor:this.props.match.params.professor,
        comments:[]
    }
  }
  getComments(){
	  axios
			.get("/search/getComments", {
				params: {
					professor: this.selectedprofessor,
					course: this.selectedCourse
				}
			})
			.then(list => {
				console.log("got COMMENTS data!");
				this.setState({
					matches: list.comment.toString()
				});
			})
			.catch(error => {
				console.log("Got COMMENTS Failed!", error);
			});
	}

	saveComments(){
		axios
			.post("/search/saveComments", {
				data: {
					professor: this.selectedprofessor,
					course: this.selectedCourse,
					comments: this.comments,
					username: this.username
				}
			})
			.then(res => {
				console.log(res);
			})
			.catch(error => {
				console.log("saveComments Failed!", error);
			});
	}

    componentDidMount() {
        this.getComments();
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

  render() {
    console.log(this.props);
    const {comments} = this.state;
    return (
      <div className="container">
      { comments.map(comment => ( 
      <div key={comment._id} className="card col-3">
      <div className="card-body">
      <h5 className="card-title">{comment.courseId}:{comment.courseName}</h5>
      <h5 className="card-title">{comment.professor}</h5>
      <p className="card-text">{comment.comment} by {comment.username}</p>
      <Like liked={comment.liked} onClick={ () => this.handleLike(comment)} />
      </div>
      </div>
      ))}
      </div>
      );
  }
}



export default Comment;