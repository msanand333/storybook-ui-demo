import React from 'react';
import './progress-bar.css';

const ProgressBarView = (props) => {

    let { done: progressValue } = props;
    // console.log(progressValue)
    return (
        <div className="progress-bar-container">
            <span className="progress-percentage">
                {`${progressValue}%`}
            </span>
            <ul className="progress-meter">
                <li style={{ width: `${progressValue}%` }} className="progress">

                </li>
            </ul>
        </div>
    )
}

export default ProgressBarView;