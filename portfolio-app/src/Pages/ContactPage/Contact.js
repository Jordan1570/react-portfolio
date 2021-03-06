import React from 'react';
import { Button } from 'react-bootstrap';

export default function Contact() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Contact</h1>
            <form action="mailto:jscott0751@gmail.com?body=Body" method="GET" encType="text/plain" style={{ textAlign: "center" }}>
                <label style={{ display: "block" }}>
                    Name:
                    <textarea name="name" style={{ display: "block" }}></textarea>
                </label>
                <label style={{ display: "block" }}>
                    Email:
                    <textarea style={{ display: "block" }}></textarea>
                    {/* need mailto */}
                </label>
                <label style={{ display: "block" }}>
                    Message:
                    <textarea name="Body" style={{ display: "block" }}></textarea>
                </label>
                <input type="submit" name="submit"/>
                <Button variant="dark" style={{ display: "block", textAlign: "center" }}>Submit</Button>
            </form>
        </div>
    )
}
