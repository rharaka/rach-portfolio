import React from 'react'
// import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

export const Menu = ({ onSelectMenu, selectedKey= '/', lang, translateLang }) => {

    const styles = {
        grid: {
            paddingLeft: 0,
            paddingRight: 0
        },
        row: {
            margin: "5%",
            width: "100%"
        },
        col: {
            textAlign: "center"
        },
        langButton: {
        //   float: lang.float,
        //   right: lang.float === 'left' ? "auto" : 0,
        //   left: lang.float === 'right' ? "auto" : 0,
          background: "none",
          border: "none",
          margin: "0 20px",
          padding: 0,
        //   position: "absolute",
          lineHeight: "40px",
          zIndex: 1030,
          color: "white",
        //   top: "17px"
        },
        menuLang: {
            float: lang.float
        },
        logoLang: {
            float: lang.float === 'left' ? "right" : "left"
        }
    };

    return (
        <>
            <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
                <Container>
                    <Nav.Link eventKey="/" className="logo" style={styles.logoLang}>
                        <img src="logo.png" alt="STRAWEB :: Web Strategy" />
                    </Nav.Link>
                    <Navbar.Toggle arias-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" style={styles.menuLang}>
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
                            <Nav.Item style={styles.col}>
                                <button 
                                    direction={lang.direction} 
                                    type="button" 
                                    onClick={translateLang} 
                                    style={styles.langButton}
                                >
                                    {lang.language}
                                </button>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
