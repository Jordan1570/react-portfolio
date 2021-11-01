import React from 'react'

import { Row, Col, Container } from 'react-bootstrap'

import activityPlanner from '../../images/activity-planner.png';
import ecommerceBackend from '../../images/e-commerce-backend.png';
import noteTaker from '../../images/note-taker.png';
import onTrack from '../../images/on-track.png';
import randomPasswordGenerator from '../../images/random-password-generator.png';
import readMeGenerator from '../../images/read-me-generator.png';
import teamProfileGenerator from '../../images/team-profile-generator.png';
import workdayScheduler from '../../images/work-day-scheduler.png';
import fitnessTracker from '../../images/fitness-tracker.png';

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
        title: "Activity Planner",
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
    },
    {
        picture: fitnessTracker,
        title: "fitnessTracker",
        description: "Keep Track Of All Of Your Workouts",
        link: "https://secure-river-34566.herokuapp.com/?id=6168a876954aee45c42bca06"
    }
];

function PortfolioCard(props) {

    const { picture, title, description, link } = props.project
    return (
        <Col>
            <div className="card" style={{ width: "20rem", marginBottom: "15px", textAlign: "center", height: "21rem" }}>
                <div>
                    <h5>{title}</h5>
                    <img src={picture} className="card-img-top" alt="work day scheduler image with color coded times" />
                    <p>{description}</p>
                    <a href={link}>Go To Live Demo</a>
                </div>
            </div>
        </Col>
    )
}


export default function Portfolio() {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Portfolio</h1>
            <Container className="project-container">
                <Row>
                    {projects.map(project => <PortfolioCard project={project} />)}
                </Row>
            </Container>
        </div>
    )
}
