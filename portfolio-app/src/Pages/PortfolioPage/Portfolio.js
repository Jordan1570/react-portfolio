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
        description: "Press Generate Password And Answer Prompts",
        link: "https://jordan1570.github.io/random-password-generator/"
    },
    {
        picture: workdayScheduler,
        title: "Work Day Scheduler",
        description: "Plan Out Your Work Day With A Color-Coded Scheduler",
        link: "https://jordan1570.github.io/work-day-scheduler/"
    },
    {
        picture: activityPlanner,
        title: "Acitvity Planner",
        description: "Plan Your Day In The U.S.",
        link: "https://charlocc.github.io/activityplanner/"
    },
    {
        picture: readMeGenerator,
        title: "ReadMe Generator",
        description: "Save Time Writing A ReadMe",
        link: "https://www.youtube.com/watch?v=OsJl9nbYozE"
    },
    {
        picture: teamProfileGenerator,
        title: "Team Profile Generator",
        description: "Generate A Team Of Employees",
        link: "https://www.youtube.com/watch?v=rPcR5P3LCMQ"
    },
    {
        picture: noteTaker,
        title: "Note Taker",
        description: "Take Notes And Save Them",
        link: "https://fathomless-oasis-75534.herokuapp.com/"
    },
    {
        picture: ecommerceBackend,
        title: "E-Commerce Back End",
        description: "Keep track Of Store Inventory",
        link: "https://www.youtube.com/watch?v=FqV3fIiwo8M"
    },
    {
        picture: onTrack,
        title: "onTrack",
        description: "Keep Track Of A Building's Construction Process",
        link: "https://whispering-island-93535.herokuapp.com/"
    }
];

function PortfolioCard(props) {

    const { picture, title, description, link} = props.project
    return(
        <div classname="col-sm-4">
            <div className="card">
                <div style={{ display: "block" }}>
                    <h1>{title}</h1>
                    <h3>{description}</h3>
                    <a href={link}>Go To Live Demo</a>
                    
                </div>
            </div>
        </div>

    )
}

// const styles = {
//     myWork: {
//         marginTop: 55,
//         textAlign: 'center',
//     },
// };

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
