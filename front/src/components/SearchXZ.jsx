import React, { Component } from "react";
import { Redirect} from "react-router-dom";
import { getMatches } from "../services/getMatches";
import { getProfessors } from "../services/getProfessors";
import { getCourses} from "../services/getCourses";
import Like from "./like";
import ListGroup from "./ListGroup";
import Pagination from "./Pagination";
import {paginate} from "../utils/paginate";
import { Scrollbars } from "react-custom-scrollbars";


class Search extends Component {

		constructor(props) {
		super(props);
		// this.handleDelete = this.handleDelete.bind(this);
		this.handleLike = this.handleLike.bind(this);
		this.handleProfessorSelect = this.handleProfessorSelect.bind(this);
		this.handlePageChange = this.handlePageChange.bind(this);
		this.handleCourseSelect = this.handleCourseSelect.bind(this);
		this.handleView = this.handleView.bind(this);
		this.state = {
		matches: [],
		pageSize: 7,
		professors: [],
		courses: [],
		selectedProfessor: null,
		selectedCourse: null,
		currentPage: 1
		};
	}


	componentDidMount() {
		const professors = [{professor: "All Professors"},...getProfessors()];
		const courses = [{courseId: "All Courses"}, ...getCourses()];
		this.setState(
		{
			matches:getMatches(),
			professors:professors,
			courses:courses

		}

		)
	}


/*	handleDelete(match) {
		const matches = this.state.matches.filter(m => m._id !== match._id);
		this.setState(
			{matches:matches}
			);
	};*/

	handleView(courseId, professor) {
		console.log(courseId, professor);
		this.props.history.push(`/comment/${courseId}/${professor}`);
	}


	handleLike(match) {
		const matches = [...this.state.matches];
		const index = matches.indexOf(match);
		matches[index] = {...match};
		matches[index].liked = !matches[index].liked;
		this.setState(
			{matches:matches}
			)
		console.log(match);
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
			matches: allmatches,
			currentPage,
			pageSize
		} = this.state;
		const professorFiltered = selectedProfessor && selectedProfessor.description ? allmatches.filter(m => m.professor === selectedProfessor.professor) : allmatches;
		const filtered = selectedCourse && selectedCourse.description ? professorFiltered.filter(m => m.courseId === selectedCourse.courseId) : professorFiltered;
		const paginatedmatches = paginate(filtered, currentPage, pageSize);
		return (
			<div className="container" style={{fontFamily:"Crete Round"}}>
			<div className="row">
			<span id="badge" className="badge badge-warning m-2">Got {filtered.length} Results!</span>
			</div>
			<div className="row">
			<Scrollbars style={{ height: 500}} className="col-1">
			<ListGroup 
			items={this.state.courses} onItemSelect={this.handleCourseSelect}
			selectedItem={this.state.selectedCourse}
			valueProperty="courseId"
			/>
			</Scrollbars>
			<Scrollbars style={{ height: 500 }} className="col-1">
			<ListGroup 
			items={this.state.professors} onItemSelect={this.handleProfessorSelect}
			selectedItem={this.state.selectedProfessor}
			valueProperty="professor"
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
			{ paginatedmatches.map( match => (
				<tr key={match._id}>
				<th scope="row"></th>
				<td >{match.courseId}</td>
				<td >{match.courseName}</td>
				<td >{match.professor}</td>
				<td > <Like liked={match.liked} onClick={ () => this.handleLike(match)} /> </td>
				<td><button onClick={() => this.handleView(match.courseId, match.professor)} className="btn btn-danger btn-sm">View</button></td>
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
