import React from 'react'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <div>
            <footer style={{ textAlign: "center" }}>
                <a href="https://github.com/Jordan1570"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/jordan-scott-109107218/"><FaLinkedin /></a>
            </footer>
        </div>
    )
}
