import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/header';
import NavBar from '../components/navBar';
import rwLogo from '../../assets/images/rw-logo.png';
import flasks from '../../assets/images/flasks.png';
import coding from '../../assets/images/coding (1).png';
import writer from '../../assets/images/writer.png';
import headshot from '../../assets/images/boo-headshot.png';
import backgroundImg from '../../assets/images/background-image.jpg';

const IndexPage = () => (
  <div className="homepage">
    <NavBar />
    <img id="home-background-img" src={backgroundImg} />
    <header id="home-header">
      <img src={rwLogo}/>
      <Header className="homepage-title" siteTitle="Rebecca Weir" />
      <p>Software Developer / Author / Biochemist</p>
    </header>
    <section id="renaissance">
      <h2>The renaissance isn't dead.</h2>
      <p>
        Let's be honest, I have more than one passion. I aspire to be a modern renaissance woman.
        Software developer by day, author by night, biochemist by trade.
      </p>
    </section>
    <section id="areas">
      <div id="area-icons">
        <img src={coding} />
        <img src={writer} />
        <img src={flasks} />
      </div>
      <div id="area-descriptions">
        <p>
          As a software developer, I yearn to optimize the code that provides users
          with an enjoyable web experience.
        </p>
        <p>
          As a writer developer, I hope to provide insight on life through short stories
          and novels.
        </p>
        <p>
          As a biochemist developer, I have studied the molecular biophysics of proteins
          from a pharmaceutical/neutraceutical viewpoint.
        </p>
      </div>
    </section>
    <p id="email">
      If you're interested in working with me, then shoot me an&nbsp;
      <a href="mailto:rebeccaweir12@gmail.com?">email.</a>
    </p>
    <section id="insta">
      <h2>Check me out on Instagram</h2>
      <img src={headshot} />
      <a href="https://www.instagram.com/riza_hawkeyed/">riza_hawkeyed</a>
    </section>
  </div>

)

export default IndexPage
