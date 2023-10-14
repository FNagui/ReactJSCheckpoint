import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';

export default function App() {
  return (
    <React.Fragment>
        <div className='App'>
            <Navbar expand="lg" className="Navbar">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>
            </Navbar>
            <Card style={{ width: '18rem' }}>
            <Card.Header>Card Header 1</Card.Header>
            <Card.Img width={'100px'} variant="top" src="./cat.png"/>
            <Card.Body>
                <Card.Title>Fady's Card</Card.Title>
                <Card.Text>
                    Creating a card using Bootstrap
                </Card.Text>
                <Button variant="primary">Don't Push</Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Header>Card Header 2</Card.Header>
            <Card.Img width={'100px'} variant="top" src="./cat.png"/>
            <Card.Body>
                <Card.Title>Fady's Card</Card.Title>
                <Card.Text>
                    Creating a card using Bootstrap
                </Card.Text>
                <Button variant="primary">Don't Push</Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Header>Card Header 3</Card.Header>
            <Card.Img width={'100px'} variant="top" src="./cat.png"/>
            <Card.Body>
                <Card.Title>Fady's Card</Card.Title>
                <Card.Text>
                    Creating a card using Bootstrap
                </Card.Text>
                <Button variant="primary">Don't Push</Button>
            </Card.Body>
            </Card>
        </div>
    </React.Fragment>
  )
}
