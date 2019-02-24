import React, { Component } from 'react';
import { getComments } from "../services/getComments";
import { getProfessors } from "../services/getProfessors";
import { getCourses} from "../services/getCourses";
import Like from "./like";
import ListGroup from "./ListGroup";
import Pagination from "./Pagination";
import {paginate} from "../utils/paginate";
import { Scrollbars } from 'react-custom-scrollbars';
import "./style.css";


class Search extends Component {

		constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleLike = this.handleLike.bind(this);
		this.handleProfessorSelect = this.handleProfessorSelect.bind(this);
		this.handlePageChange = this.handlePageChange.bind(this);
		this.handleCourseSelect = this.handleCourseSelect.bind(this);
		this.state = {
		comments: [],
		pageSize: 6,
		professors: [],
		courses: [],
		selectedprofessor: null,
		currentPage: 1
		};
	}


	componentDidMount() {
		const professors = [{name: 'All Professors'},...getProfessors()];
		const courses = [{name: 'All Courses'}, ...getCourses()];
		this.setState(
		{
			comments:getComments(),
			professors:professors,
			courses:courses

		}

		)
	}


	handleDelete(comment) {
		const comments = this.state.comments.filter(m => m._id !== comment._id);
		this.setState(
			{comments:comments}
			);
	};


	handleLike(comment) {
		const comments = [...this.state.comments];
		const index = comments.indexOf(comment);
		comments[index] = {...comment};
		comments[index].liked = !comments[index].liked;
		this.setState(
			{comments:comments}
			)
		console.log(comment);
	}

	handleProfessorSelect(professor) {
		this.setState(
			{selectedProfessor:professor,
				currentPage:1
			}
			)
	}

	handleCourseSelect(course) {
		this.setState(
			{selectedCourse:course,
				currentPage:1
			}
			)
	}

	handlePageChange(page) {
		this.setState(
			{currentPage:page}
			)
	}

	render() {
		const {
			selectedProfessor,
			selectedCourse,
			comments: allComments,
			currentPage,
			pageSize
		} = this.state;
		const professorFiltered = selectedProfessor && selectedProfessor.description ? allComments.filter(m => m.professor === selectedProfessor.name) : allComments;
		const filtered = selectedCourse && selectedCourse.description ? professorFiltered.filter(m => m.courseId === selectedCourse.name) : professorFiltered;
		const paginatedComments = paginate(filtered, currentPage, pageSize);
		return (
			<div className="container">
			<div className="row">
			<span id="badge" className="badge badge-warning m-2">Got {filtered.length} Results!</span>
			</div>
			<div className="row">
			<Scrollbars style={{ height: 500 }} className="col-1">
			<ListGroup 
			items={this.state.courses} onItemSelect={this.handleCourseSelect}
			selectedItem={this.state.selectedCourse}
			valueProperty="name"
			/>
			</Scrollbars>
			<Scrollbars style={{ height: 500 }} className="col-1">
			<ListGroup 
			items={this.state.professors} onItemSelect={this.handleProfessorSelect}
			selectedItem={this.state.selectedProfessor}
			valueProperty="name"
			/>
			</Scrollbars>
			<div className="col-10">
			<table className="table table-striped">
			<thead className="table-info">
			<tr>
			<th></th>
			<th className="w-20" scope="col">CouseId</th>
			<th className="w-40" scope="col">CourseName</th>
			<th className="w-25" scope="col">Professor</th>
			<th className="w-10" scope="col"></th>
			<th className="w-10" scope="col"></th>
			</tr>
			</thead>
			<tbody>
			{ paginatedComments.map( comment => (
				<tr key={comment._id}>
				<th scope="row"></th>
				<td >{comment.courseId}</td>
				<td >{comment.courseName}</td>
				<td >{comment.professor}</td>
				<td > <Like liked={comment.liked} onClick={ () => this.handleLike(comment)} /> </td>
				<td><button onClick={() => this.handleDelete(comment)} className="btn btn-danger btn-sm">View</button></td>
				</tr>
				))}
			</tbody>
			</table>
			<Pagination itemsCount={filtered.length} pageSize={this.state.pageSize} 
			onPageChange={this.handlePageChange} currentPage={this.state.currentPage}/>
			</div>
			</div>
			</div>
			);

	}


}

export default Search;
