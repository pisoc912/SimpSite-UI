import React, { useState, useEffect } from 'react';



function About() {
    const [message, setMessage] = useState('');
    const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;

    useEffect(() => {
        fetch(`${API_BASE_URL}/hello`)
            .then(response => response.text())
            .then(data => {
                setMessage(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [API_BASE_URL]);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default About;
