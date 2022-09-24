import { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    increment_count() {
        // this.setState(
        //     {
        //         count: this.state.count + 1,
        //     },
        //     () => {
        //         console.log(this.state.count);
        //     }
        // );

        this.setState(
            (prevState, props) => ({
                count: prevState.count + 1 + props.value,
            }),
            () => {
                console.log(this.state.count);
            }
        );

        // console.log(this.state.count);
        // this will run before the increment is done
    } // setState is a asynchronous function

    increment_one() {
        this.setState({
            count: this.state.count + 1,
        });
    }

    increment_two() {
        this.setState({
            count: this.state.count + 2,
        });
    }

    increment_demo() {
        this.increment_one();
        this.increment_two();

        // only the second increment would happen always
        // because react would merge the two setState functions
        // and will only run the last one
    }

    increment_five() {
        this.increment_count();
        this.increment_count();
        this.increment_count();
        this.increment_count();
        this.increment_count();

        // if we use something like this 5 setState callbacks are registered at the same time
        // react merges these setstate functions for optimization and efficiency
        // that is why cannot do something like this because at the end only the final setstate would run
    }

    render() {
        return (
            <>
                <h1>Counter Component</h1>
                <h1>Count - {this.state.count}</h1>
                <button onClick={() => this.increment_count()}>
                    Increment
                </button>
            </>
        );
    }
}

export default Counter;
