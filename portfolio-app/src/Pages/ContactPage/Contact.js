import React from 'react';
import { Button } from 'react-bootstrap';

export default function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <form>
                <label>
                    Name:
                    <textarea></textarea>
                </label>
                <label>
                    Email:
                    <textarea></textarea>
                </label>
                <label>
                    Message:
                    <textarea></textarea>
                </label>
                <Button variant="dark">Submit</Button>
            </form>
        </div>
    )
}
