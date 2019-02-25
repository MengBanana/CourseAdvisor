import React, { Component } from 'react';
import queryString from "query-string";
import { getCommentsByQuery } from "../services/getComments";
import Like from "./like";

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

    componentDidMount() {
        const comments=getCommentsByQuery(this.state.courseId, this.state.professor);
        this.setState(
        {comments:comments}
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
      <p className="card-text">"{comment.comment}" by {comment.username}</p>
      <Like liked={comment.liked} onClick={ () => this.handleLike(comment)} />
      </div>
      </div>
      ))}
      </div>
      );
  }
}



export default Comment;