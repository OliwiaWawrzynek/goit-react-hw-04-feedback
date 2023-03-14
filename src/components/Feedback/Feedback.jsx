export const Feedback = () => {
    return (
        <div className="container" >
            <h1>Please leave feedback</h1>
            <div className="feedbackContainer">
            <button type="button" onClick={event => console.log(event)}>Good</button>
            <button type="button" onClick={event => console.log(event)}>Neutral</button>
            <button type="button" onClick={event => console.log(event)}>Bad</button>
        </div>
        <div>
            <h1>Statistics</h1>
            <p className="isHidden">No feedback given</p>
                <div className="isHidden">
                    <p>Good: <span>0</span></p>
                    <p>Neutral: <span>0</span></p>
                    <p>Bad: <span>0</span></p>
                    <p>Positive feedback: <span>0%</span></p>
                </div>
            </div>
        </div>
    )

}