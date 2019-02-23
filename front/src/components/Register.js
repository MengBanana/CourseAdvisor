import React, { Component } from "react";
//import { register } from "./userFunctions";
import axios from "axios";

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: "",
			last_name: "",
			username: "",
			password: "",
			email: "",
			bio: "",
			image: "",
			validInput:null,
			errors: {}
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		}, () => {
			if (this.state.username != undefined && this.state.username != null && this.state.password != undefined && this.state.password != null) {
				this.setState ({validInput : true, });
			} else {
				this.setState({
					validInput:false,
				});
			}
		});
	}

	onSubmit(e) {
		e.preventDefault();
		if (this.state.validInput) {
			this.addToDB();
		}
	}

	addToDB() {
		axios.post("/register", {
			data: {
				username: this.state.username,
				password: this.state.password,
				firstname: this.state.firstname,
				lastname: this.state.lastname,
				email: this.state.email,
				bio:this.state.bio
			}
		}).then(()=> {
      console.log( "Registered!");
      });
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6 mt-5 mx-auto">
						<form noValidate onSubmit={this.onSubmit}>
							<h1 className="h3 mb-3 font-weight-normal">
								Register
							</h1>
							<div className="form-group">
								<label htmlFor="username">Username</label>
								<input
									type="text"
									className="form-control"
									name="username"
									placeholder="enter username"
									value={this.state.username}
									onChange={this.onChange}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="password">Password</label>
								<input
									type="password"
									className="form-control"
									name="password"
									placeholder="enter password"
									value={this.state.password}
									onChange={this.onChange}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="first_name">First name</label>
								<input
									type="text"
									className="form-control"
									name="first_name"
									placeholder="enter your first name"
									value={this.state.first_name}
									onChange={this.onChange}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="last_name">Last Name</label>
								<input
									type="text"
									className="form-control"
									name="last_name"
									placeholder="enter your last name"
									value={this.state.last_name}
									onChange={this.onChange}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="email">E-mail</label>
								<input
									type="email"
									className="form-control"
									name="email"
									placeholder="enter your E-mail"
									value={this.state.email}
									onChange={this.onChange}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="bio">Bio</label>
								<input
									type="text"
									className="form-control"
									name="bio"
									placeholder="enter your bio"
									value={this.state.bio}
									onChange={this.onChange}
								/>
							</div>

							<button
								type="submit"
								className="btn btn-lg btn-info btn-block"
							>
								Register
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Register;