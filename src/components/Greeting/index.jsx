import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import '../../styles.css';

const Greeting = ({name}) => {

    return (
        <Container>
                <div>
                    <h1>
                        Hello {name}, This is my lab-01 !!!
                    </h1>
                </div>
        </Container>
    );
};

export default Greeting;