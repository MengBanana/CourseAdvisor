/*import React, { Component } from 'react';
import queryString from "query-string";

// list all the comments match professor and course
class Comment extends Component {

	constructor(props) {
		super(props);
		const course = match.params.course;
		const professor = match.params.professor;
		this.state = {
			comments:[],
			course:course,
			professor:professor
		}
	}

	componentDidMount() {
		this.setState(
		{
			comments:getComments(this.state.course, this.state.professor)
		}

		)
	}

	render() {

		return (
			{ this.state.comments.map(comment => <div>Format Comment Here</div>) }
		);
	}
}


export default Comment;*/