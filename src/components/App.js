import React, { Component } from 'react';
import Modal from './Modal';

class App extends Component {
	state = { show: false };

	showModal = () => {
		this.setState({ show: true });
	};

	hideModal = () => {
		this.setState({ show: false });
	};
	render() {
		return (
			<main>
				<div className="box" />
				<Modal show={this.state.show} handleClose={this.hideModal}>
					<h1>Modal</h1>
					<p>This is the modal showing here</p>
				</Modal>

				<div className="container">
					<div className="btn open" onClick={this.showModal}>
						Open
					</div>
					<h1>Title</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
						nulla delectus autem commodi debitis in molestias cumque quod alias
						quaerat.
					</p>
				</div>
			</main>
		);
	}
}

export default App;
