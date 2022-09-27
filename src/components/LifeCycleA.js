import { Component } from "react";
import LifeCycleB from "./LifeCycleB";
import styles from "./lifecyclea.module.css";

class LifeCycleA extends Component {
    constructor() {
        super();

        this.state = {
            name: "Chandan",
        };

        console.log("LifeCycleA constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA getDerivedStateFromProps");

        return null;
    }

    shouldComponentUpdate() {
        console.log("LifeCycleA shouldComponentUpdate");

        return true;
    }

    componentDidMount() {
        console.log("LifeCycleA ComponentDidMount");
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycleA getSnapshotBeforeUpdate");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("LifeCycleA componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("LifeCycleA componentWillUnmount");
    }

    render() {
        console.log("LifeCycleA render");
        return (
            <>
                <p className={styles.fontstyle}>Chandan Gupta</p>
                <LifeCycleB />
            </>
        );
    }
}

export default LifeCycleA;
