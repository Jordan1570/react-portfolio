import React from 'react'

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <div>
            <footer style={{ textAlign: "center", marginBottom: "15" }}>
                <a href="https://github.com/Jordan1570"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/jordan-scott-109107218/"><FaLinkedinIn /></a>
            </footer>
        </div>
    )
}
