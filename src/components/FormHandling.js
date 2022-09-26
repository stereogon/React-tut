import { Component } from "react";
import "./formstyles.css";

class FormHandling extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            comment: "",
        };

        this.handleUsernameOnChange = this.handleUsernameOnChange.bind(this);
        this.handleCommentOnChange = this.handleCommentOnChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleUsernameOnChange(event) {
        this.setState({
            username: event.target.value,
        });
    }

    handleCommentOnChange(event) {
        this.setState({
            comment: event.target.value,
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();

        alert(`${this.state.username} says ${this.state.comment}`);
    }

    render() {
        const fontxl = {
            fontSize: "5rem",
            fontWeight: "600",
        };

        return (
            <>
                <form
                    style={fontxl}
                    className="primary"
                    onSubmit={this.handleFormSubmit}
                >
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleUsernameOnChange}
                    />

                    <label htmlFor="comment">Comment</label>
                    <textarea
                        name="comment"
                        id="mytextarea"
                        cols="30"
                        rows="10"
                        value={this.state.comment}
                        onChange={this.handleCommentOnChange}
                    ></textarea>

                    <button type="submit">Submit</button>
                </form>
            </>
        );
    }
}

export default FormHandling;
