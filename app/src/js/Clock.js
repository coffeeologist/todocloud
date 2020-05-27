import React, {Component} from 'react';
import '../css/Clock.css';

class Clock extends Component {
    constructor() {
        super()

        let d = new Date();
        this.state = {
            day: d.getDay(),
            month: d.getMonth(),
            date: d.getDate(),
            year: d.getFullYear(),
            time: d.toLocaleTimeString()
        };

        this.countingSecond = this.countingSecond.bind(this);
    }

    countingSecond() {
        let d = new Date();
        this.setState({
            day: d.getDay(),
            month: d.getMonth(),
            date: d.getDate(),
            year: d.getFullYear(),
            time: d.toLocaleTimeString()
        });
    }

    componentWillMount() {
        setInterval(this.countingSecond, 1000)
    }

    render() {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        return (
            <div className='clockTime' id='clock'>
                <p>
                    {days[this.state.day]}&ensp;
                    {months[this.state.month]}&nbsp;
                    {this.state.date},&nbsp;
                    {this.state.year}
                    &emsp;&mdash;&emsp;
                    {this.state.time}
                </p>
            </div>
        );
    }
}

export default Clock;