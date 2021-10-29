import React from 'react'

export default function Resume() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Resume</h1>
            <a href="/resources/Resume.pdf" download>Click To Download Resume</a>
            <h3>Front End Proficiencies</h3>
            <ul style={{ listStyle: "none" }}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3>Back End Proficiencies</h3>
            <ul style={{ listStyle: "none" }}>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>

        </div>
    )
}
