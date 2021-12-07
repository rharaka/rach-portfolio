import React from 'react'
// import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

export const Footer = ({ onSelectMenu, selectedKey= '/', lang }) => {

    const styles = {
        grid: {
            paddingLeft: 0,
            paddingRight: 0
        },
        row: {
            margin: "0"
        },
        col: {
            textAlign: "center"
        },
        langCopy: {
          float: lang.float
        }
    };

    return (
        <footer direction={lang.direction} className={lang.direction}>
            <Nav direction={lang.direction}  
                variant="pills" 
                activeKey = {selectedKey}
                onSelect = {(selectedKey) => onSelectMenu(selectedKey)}
            >
                <Nav.Item style={styles.col}>
                    <Nav.Link eventKey="/">{lang.homepage}</Nav.Link>
                </Nav.Item>
                <Nav.Item style={styles.col}>
                    <Nav.Link eventKey="/about">{lang.aboutpage}</Nav.Link>
                </Nav.Item>
                <Nav.Item style={styles.col}>
                    <Nav.Link eventKey="/projects">{lang.projects}</Nav.Link>
                </Nav.Item>
                <Nav.Item style={styles.col}>
                    <Nav.Link eventKey="/gallery">{lang.gallery}</Nav.Link>
                </Nav.Item>
                <Nav.Item style={styles.col}>
                    <Nav.Link eventKey="/contact">{lang.contact}</Nav.Link>
                </Nav.Item>
            </Nav>
            <p direction={lang.direction}  style={styles.langCopy}>{lang.copyrights}</p>
            {/* <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                </Container>
            </Navbar> */}
        </footer>
        // <Container bg="dark" variant="dark">
        //     <Nav className="me-auto">
        //         <NavLink to="/" exact>Home</NavLink>
        //         <NavLink to="/contact">Contact</NavLink>
        //         <NavLink to="/aboutt">About</NavLink>
        //     </Nav>
        // </Container>
    )
}
