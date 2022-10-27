import React from 'react'
import LinkButton from './components/LinkButton'
import TextBanner from './components/TextBanner'
import Contact from './components/Contact'
import ProfilePic from './components/ProfilePic'
import Footer from './components/Footer'
import picture from './profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCode, faDesktop, faShoppingCart, faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  return (
    <div style={{ "textAlign": "center" }}>
      <ProfilePic
        name="Wadzanayi Kuweta"
        picture={picture}
        alt="Headshot of Wadzanayi Kuweta"
      />
      <TextBanner
        title="Aspiring Full Stack MERN Developer"
      />
      <Contact />
      <div style={{ "marginBottom": "50px"}}>
        <LinkButton
          title=""
          name="@Zuri"
          logo={<FontAwesomeIcon size="2x" icon={faSpaceShuttle}  />}
          link="https://training.zuri.team/"
        />
        <LinkButton
          name="Design and Coding Books"
          logo={<FontAwesomeIcon size="2x" icon={faBook} />}
          link="http://books.zuri.team"
        />
        <LinkButton
          name="Books sold by Wadzanayi"
          logo={<FontAwesomeIcon size="2x" icon={faShoppingCart} />}
          link="https://books.zuri.team/"
        />
        <LinkButton
          title="Fully vetted Coders available"
          logo={<FontAwesomeIcon size="2x" icon={faCode} />}
          link="https://background.zuri.team/"
        />
        <LinkButton
          title="Free Book Designs"
          logo={<FontAwesomeIcon size="1x" icon={faDesktop} />}
          link="https://books.zuri.team/design-rules"
        />
      </div>
      <Footer
        text="Wadzanayi Kuweta 2022 | All Rights Reserved."
        text2="Page was built by me for Zuri using React.JS"
      />
    </div>
  );
}

export default App;
