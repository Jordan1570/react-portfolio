import React from 'react';
import { Button } from 'react-bootstrap';

export default function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <form>
                <label style={{ display: "block" }}>
                    Name:
                    <textarea style={{ display: "block" }}></textarea>
                </label>
                <label style={{ display: "block" }}>
                    Email:
                    <textarea style={{ display: "block" }}></textarea>
                </label>
                <label style={{ display: "block" }}>
                    Message:
                    <textarea style={{ display: "block" }}></textarea>
                </label>
                <Button variant="dark" style={{ display: "block", textAlign: "center" }}>Submit</Button>
            </form>
        </div>
    )
}
