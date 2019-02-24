import React, { Component } from 'react';
import _ from "lodash";

class Pagination extends Component {

	render() {
		const {currentPage} = this.props;
		console.log(currentPage);

		const pagesCount = Math.ceil(this.props.itemsCount / this.props.pageSize);
		if (pagesCount === 1) return null;
		const pages = _.range(1, pagesCount+1);

		return (

			<nav>
			<ul className="pagination d-flex justify-content-center">
			{ pages.map(page => <li key={page} className={page === currentPage? "page-item active":"page-item"}>
				<a className="page-link" onClick={() => this.props.onPageChange(page)}>{page}</a></li> )}
			</ul>
			</nav>
			);
	}
}

export default Pagination;
