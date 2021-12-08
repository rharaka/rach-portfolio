// import logo from './logo.svg'
// import './App.css'

import React, {useState} from 'react'

import fr from './src/fr.json'
import ar from './src/ar.json'

import { Menu } from './components/Menu'
import { Home } from './components/Home'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Gallery } from './components/Gallery'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Switch } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

function App() {

  const [lang, setLang] = useState(fr)
  const [selectedKey, setSelectMenu] = useState('/')

  const onSelectMenu = (selectedKey) => setSelectMenu(selectedKey)

  const translateLang = () => {
    lang === ar ? setLang(fr) : setLang(ar)
  }

  const styles = {
    grid: {
        paddingLeft: 0,
        paddingRight: 0
    },
    row: {
        margin: "40px",
        width: "90%"
    },
    col: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap"
    },
    langStyles: {
      textAlign: lang.textalign,
      direction: lang.direction
    }
  };

  return (
    <div direction={lang.direction} className="container mx-auto" style={styles.langStyles}>
      <BrowserRouter direction={lang.direction} style={styles.langStyles}>
        <header direction={lang.direction} style={styles.langStyles}>
          <Container className="mx-auto" direction={lang.direction} style={styles.langStyles}>
            <Row direction={lang.direction} style={styles.row}>
              <Col direction={lang.direction} style={styles.col}>
                <Menu lang={lang} selectedKey={selectedKey} onSelectMenu={onSelectMenu} translateLang={() => translateLang()} style={styles.langStyles} />
              </Col>
            </Row>
          </Container>
        </header>
        <main direction={lang.direction} style={styles.langStyles}>
          <Switch>
            { selectedKey==='/' && <Home lang={lang} /> }
            { selectedKey==='/about' && <About lang={lang} /> }
            { selectedKey==='/projects' && <Projects lang={lang} /> }
            { selectedKey==='/gallery' && <Gallery lang={lang} /> }
            { selectedKey==='/contact' && <Contact lang={lang} /> }
          </Switch>
        </main>
        <Footer lang={lang} selectedKey={selectedKey} onSelectMenu={onSelectMenu} style={styles.langStyles} />
      </BrowserRouter>
    </div>
  );
  
}

export default App;
