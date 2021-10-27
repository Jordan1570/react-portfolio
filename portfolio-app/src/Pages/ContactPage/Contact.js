import React from 'react';
import { Button } from 'react-bootstrap';



export default function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="text" name="name" />
                </label>
                <label>
                    Message:
                    <input type="text" name="name" />
                </label>
                <Button variant="dark">Submit</Button>
            </form>
        </div>
    )
}
