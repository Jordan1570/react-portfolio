import React from 'react'
import passwordGenerator from '../../../../assets'

const styles = {
    myWork: {
      marginTop: 55,
      textAlign: 'center',
    },
  };
  
// need help with images
export default function project() {
    return (
        <div>
            <div className="row col-sm-12">
                <div style={styles.myWork}>
                    <div className="card" style="width: 18rem;">
                        <a href="https://jordan1570.github.io/random-password-generator/" className="card-link">
                            <img src="random-password-generator.png" className="card-img-top" alt="work day scheduler image with color coded times">
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Password Generator</h5>
                            <p className="card-text projectP">Press generate password and answer prompts</p>
                            <a href="https://jordan1570.github.io/random-password-generator/" className="card-link">Go To Password Generator</a>
                        </div>
                    </div>
                </div>

                <div style={styles.myWork}>
                    <div className="card" style="width: 18rem;">
                        <a href="https://jordan1570.github.io/work-day-scheduler/" className="card-link">
                            <img src="work-day-scheduler.png" className="card-img-top" alt="work day scheduler image with color coded times">
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Work Day Scheduler</h5>
                            <p className="card-text projectP">Plan out your work day with a color-coded Scheduler</p>
                            <a href="https://jordan1570.github.io/work-day-scheduler/">Go To Work Day Scheduler</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row col-sm-12">
                <div style={styles.myWork}>
                    <div className="card" style="width: 18rem;">
                        <a href="https://charlocc.github.io/activityplanner/" className="card-link">
                            <img src="activity-planner.png" className="card-img-top" alt="image of santa monica pier">
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Activity Planner</h5>
                            <p className="card-text projectP">Plan your day in the U.S.</p>
                            <a href="https://charlocc.github.io/activityplanner/">Go To Activity Planner</a>
                        </div>
                    </div>
                </div>

                <div style={styles.myWork}>
                    <div className="card" style="width: 18rem;">
                        <a href="https://www.youtube.com/watch?v=OsJl9nbYozE" className="card-link">
                            <img src="read-me-generator.png" className="card-img-top" alt="image of readMe console app generating data">
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">ReadMe Generator</h5>
                            <p className="card-text projectP">Save Time Writing a ReadMe</p>
                            <a href="https://www.youtube.com/watch?v=OsJl9nbYozE" className="card-link">Demonstration</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row col-sm-12">
                <div style={styles.myWork}>
                    <div className="card" style="width: 18rem;">
                        <a href="https://www.youtube.com/watch?v=rPcR5P3LCMQ" className="card-link">
                            <img src="team-profile-generator.png" className="card-img-top" alt="screenshot of a generated team">
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Team Profile Generator</h5>
                            <p className="card-text projectP">Generate a team of employees</p>
                            <a href="https://www.youtube.com/watch?v=rPcR5P3LCMQ" className="card-link">Demonstration</a>
                        </div>
                    </div>
                </div>

                <div style={styles.myWork}>
                    <div className="card" style="width: 18rem;">
                        <a href="https://fathomless-oasis-75534.herokuapp.com/" class="card-link">
                            <img src="note-taker.png" class="card-img-top" alt="screenshot of notetaker homepage">
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Note Taker</h5>
                            <p className="card-text projectP">Take notes and save them</p>
                            <a href="https://fathomless-oasis-75534.herokuapp.com/" className="card-link">Go To Note Taker</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row col-sm-12">
                <div style={styles.myWork}>
                    <div className="card" style="width: 18rem;">
                        <a href="https://www.youtube.com/watch?v=FqV3fIiwo8M" className="card-link">
                            <img src="e-commerce-backend.png" className="card-img-top" alt="screenshot of tested routes in insomnia">
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">E-Commerce Back End</h5>
                            <p className="card-text projectP">Keep track of a building's construction process</p>
                            <a href="https://www.youtube.com/watch?v=FqV3fIiwo8M" className="card-link">Demonstration</a>
                        </div>
                    </div>
                </div>

                <div style={styles.myWork}>
                    <div className="card" style="width: 18rem;">
                        <a href="https://whispering-island-93535.herokuapp.com/" className="card-link">
                            <img src="on-track.png" class="card-img-top" alt="screenshot of tested routes in insomnia">
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">onTrack</h5>
                            <p className="card-text projectP">Keep track of a building's construction process</p>
                            <a href="https://whispering-island-93535.herokuapp.com/" className="card-link">Go To onTrack</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
