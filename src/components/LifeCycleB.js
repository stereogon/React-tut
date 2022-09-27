import { Component } from "react";
import styles from "./lifecycleb.module.css";

class LifeCycleB extends Component {
    constructor() {
        super();

        this.state = {
            about: "",
        };
    }

    componentDidMount() {
        console.log("LifeCycleB componentDidMount");
    }

    render() {
        return (
            <>
                <p>Hi! i am a Software Engineer and a Music Producer.🧋</p>
                <a
                    className={styles.btn}
                    href="http://www.leetcode.com/stereogon"
                >
                    Connect
                </a>
            </>
        );
    }
}

export default LifeCycleB;
