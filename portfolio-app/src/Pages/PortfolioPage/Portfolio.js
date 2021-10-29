import React from 'react'

import activityPlanner from '../../images/activity-planner.png';
import ecommerceBackend from '../../images/e-commerce-backend.png';
import noteTaker from '../../images/note-taker.png';
import onTrack from '../../images/on-track.png';
import randomPasswordGenerator from '../../images/random-password-generator.png';
import readMeGenerator from '../../images/read-me-generator.png';
import teamProfileGenerator from '../../images/team-profile-generator.png';
import workdayScheduler from '../../images/work-day-scheduler.png';

const projects = [
    {
        picture: randomPasswordGenerator,
        title: "Password Generator",
        description: "Press generate password and answer prompts",
        link: "https://jordan1570.github.io/random-password-generator/"
    },
    {
        picture: workdayScheduler,
        title: "Work Day Scheduler",
        description: "Plan out your work day with a color-coded Scheduler",
        link: "https://jordan1570.github.io/work-day-scheduler/"
    },
    {
        picture: activityPlanner,
        title: "Acitvity Planner",
        description: "Plan your day in the U.S.",
        link: "https://charlocc.github.io/activityplanner/"
    },
    {
        picture: readMeGenerator,
        title: "ReadMe Generator",
        description: "Save Time Writing a ReadMe",
        link: "https://www.youtube.com/watch?v=OsJl9nbYozE"
    },
    {
        picture: teamProfileGenerator,
        title: "Team Profile Generator",
        description: "Generate a team of employees",
        link: "https://www.youtube.com/watch?v=rPcR5P3LCMQ"
    },
    {
        picture: noteTaker,
        title: "Note Taker",
        description: "Take notes and save them",
        link: "https://fathomless-oasis-75534.herokuapp.com/"
    },
    {
        picture: ecommerceBackend,
        title: "E-Commerce Back End",
        description: "Keep track of store inventory",
        link: "https://www.youtube.com/watch?v=FqV3fIiwo8M"
    },
    {
        picture: onTrack,
        title: "onTrack",
        description: "Keep track of a building's construction process",
        link: "https://whispering-island-93535.herokuapp.com/"
    }
];

function PortfolioCard(props) {

    const { picture, title, description, link} = props.project
    return(
        <div classname="col-sm-4">
            <div className="card">
                <div style={{display: "block"}}>
                    <h1>{title}</h1>
                    
                </div>
            </div>
        </div>

    )
}

const styles = {
    myWork: {
        marginTop: 55,
        textAlign: 'center',
    },
};

// need help with images
export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <div className="project-container">
                <div className="row">
                    {projects.map(project => <PortfolioCard project={project} />)}
                </div>
            </div>
        </div>
    )
}
