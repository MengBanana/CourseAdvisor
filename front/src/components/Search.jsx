import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ReactDOM from "react-dom";
import Like from "./like";
import ListGroup from "./ListGroup";
import Pagination from "./Pagination";
import { paginate } from "../utils/paginate";
import { Scrollbars } from "react-custom-scrollbars";
import "./style.css";
import axios from "axios";

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
			pageSize: 6,
			professors: this.getProfessorList(),
			courses: this.getCourseList(),
			selectedProfessor: null,
			selectedCourse: null,
			currentPage: 1,
			professorFiltered: null,
			filtered : null,
			paginatedmatches: paginate(this.state.filtered, this.state.currentPage, this.state.pageSize)
		};
	}

	componentDidMount() {
		const pList = ["All Professors", ...this.getProfessorList()];
		const cList = ["All Courses", ...this.getCourseList()];
		this.setState({
			professors:pList,
			courses: cList,
			matches: this.getMatches()
		});
	}

	getProfessorList() {
		axios
			.get("/search/getAllProfessors", {})
            .then(data => {
              this.setState({
              	professors: data
              })
            })
            .catch(err => {
            console.log(err);
            });
	    }

		getCourseList(){
			axios
			.get("/search/getAllCourses",{
			})
			.then(data => {
				console.log("got C data!");
				this.setState ({
					courses: data
				})
			})
			.catch(error => {
				console.log("Got Clist Failed!", error);
			});
		}

	 getMatches(){
	  axios
			.get("/search/getMatches", {
				params: {
					professor: this.selectedprofessor,
					course: this.selectedCourse
				}
			})
			.then(list => {
				console.log("got CP data!");
				//const cList = list.data.map
				this.setState({
					matches: list
				});
	            //return cList;
			})
			.catch(error => {
				console.log("Got CP Failed!", error);
			});
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
		matches[index] = { ...match };
		matches[index].liked = !matches[index].liked;
		this.setState({ matches: matches });
		console.log(match);
	}

	handleProfessorSelect(professor) {
		this.setState({ 
			selectedProfessor: professor, 
			currentPage: 1, 
	})
	}

	handleCourseSelect(course) {
		this.setState({ 
			selectedCourse: course, 
			currentPage: 1 ,
		})
	}


	handlePageChange(page) {
		this.setState({ currentPage: page });
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<span id="badge" className="badge badge-warning m-2">
						{this.filtered.length}
					</span>
				</div>
				<div className="row">
					<Scrollbars style={{ height: 500 }} className="col-1">
						<ListGroup
							items={this.state.courses}
							onItemSelect={this.handleCourseSelect}
							selectedItem={this.state.selectedCourse}
							valueProperty="courseId"
						/>
					</Scrollbars>
					<Scrollbars style={{ height: 500 }} className="col-1">
						<ListGroup
							items={this.state.professors}
							onItemSelect={this.handleProfessorSelect}
							selectedItem={this.state.selectedProfessor}
							valueProperty="professor"
						/>
					</Scrollbars>
					<div className="col-10">
						<table className="table table-striped">
							<thead className="table-info">
								<tr>
									<th />
									<th className="w-20" scope="col">
										CouseId
									</th>
									<th className="w-40" scope="col">
										CourseName
									</th>
									<th className="w-25" scope="col">
										Professor
									</th>
									<th className="w-10" scope="col" />
									<th className="w-10" scope="col" />
								</tr>
							</thead>
							<tbody>
								{this.state.paginatedmatches.map(match => (
									<tr key={match._id}>
										<th scope="row" />
										<td>{match.courseId}</td>
										<td>{match.courseName}</td>
										<td>{match.professor}</td>
										<td>
											{" "}
											<Like
												liked={match.liked}
												onClick={() =>
													this.handleLike(match)
												}
											/>{" "}
										</td>
										<td>
											<button
												onClick={() =>
													this.handleView(
														match.courseId,
														match.professor
													)
												}
												className="btn btn-danger btn-sm"
											>
												View
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<Pagination
							itemsCount={this.state.filtered.length}
							pageSize={this.state.pageSize}
							onPageChange={this.handlePageChange}
							currentPage={this.state.currentPage}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Search;
