import React from "react"

import Layout, { Wrapper } from "../components/layout"
import SEO from "../components/seo"
import MulberryLogo from "../images/mulberry-logo.svg"
import VerrdiLogo from "../images/verrdi-logo.svg"
import F1Logo from "../images/f1-logo.svg"
import FCCLogo from "../images/fcc-logo.svg"
import Footer from "../components/footer"
import {
  faGithub,
  faFreeCodeCamp,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons"
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons"
import * as WorkStyle from "../components/styled-components/workStyles"

const WorkPage = () => (
  <Layout>
    <SEO title="Work" />

    <Wrapper>
      <WorkStyle.BrowseText>
        Browse a selection of projects I<span className="orange">'</span>ve
        completed<span className="orange">.</span>
      </WorkStyle.BrowseText>
      <WorkStyle.WorkContainer>
        <WorkStyle.LogoContainer background="#000928" square>
          <MulberryLogo className="logo-in-square" />
        </WorkStyle.LogoContainer>

        <WorkStyle.Description padding="0 0 0 40px">
          <WorkStyle.ProjectName>
            Mulberry Fitted Kitchens
          </WorkStyle.ProjectName>
          <p>
            A brochure website for Mulberry Fitted Kitchens, the main goals when
            designing this site was for the visitor to get a quick understanding
            of how Mulberry works and to provide plenty of examples of their
            work and the good things customers have said about them.
          </p>
          <p>
            I wanted to make sure the owners at Mulberry could keep their
            website up to date by being able to add new projects, testimonials
            and news without having to seek the help of a developer, so I
            integrated a CMS into the site.
          </p>
          <WorkStyle.Technology>Built with</WorkStyle.Technology>
          <p>HTML, CSS, JavaScript, React, Gatsby, GraphQL</p>
          <WorkStyle.ButtonContainer>
            <WorkStyle.Button
              href="https://www.mulberrykitchens.co.uk/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <WorkStyle.ButtonIcon icon={faGlobeEurope} size="1x" />
              Website
            </WorkStyle.Button>
            <WorkStyle.Button
              href="https://github.com/danbarber88/mulberry"
              rel="noopener noreferrer"
              target="_blank"
            >
              <WorkStyle.ButtonIcon icon={faGithub} size="1x" />
              GitHub
            </WorkStyle.Button>
          </WorkStyle.ButtonContainer>
        </WorkStyle.Description>
      </WorkStyle.WorkContainer>
      <WorkStyle.WorkContainer>
        <WorkStyle.Description padding="0 40px 0 0">
          <WorkStyle.ProjectName>F1 Calendar</WorkStyle.ProjectName>
          <p>
            A small site I made to practise what I’d just learned about GraphQL.
            It provides the user with upcoming dates and times of races I
            localise to their time zone. When a race has finished, it’s updated
            with the result as soon as it’s available.
          </p>
          <p>
            I wrote the back-end to cache the data in a mongo database to ensure
            that I wouldn’t have to make multiple requests to the API. The
            front-end converts race times from a json file using Moment.js and
            uses Apollo/GraphQL to query the back-end for the results.
          </p>
          <WorkStyle.Technology>Built with</WorkStyle.Technology>
          <p>
            HTML, CSS, JavaScript, React, Apollo, GraphQL, Node.js, Express.js,
            mongodb, Moment.js
          </p>
          <WorkStyle.ButtonContainer>
            <WorkStyle.Button
              href="https://fathomless-ocean-33259.herokuapp.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <WorkStyle.ButtonIcon icon={faGlobeEurope} size="1x" />
              Website
            </WorkStyle.Button>
            <WorkStyle.Button
              href="https://github.com/danbarber88/f1-calendar-client"
              rel="noopener noreferrer"
              target="_blank"
            >
              <WorkStyle.ButtonIcon icon={faGithub} size="1x" />
              GitHub
            </WorkStyle.Button>
          </WorkStyle.ButtonContainer>
        </WorkStyle.Description>
        <WorkStyle.LogoContainer background="#15151E">
          <F1Logo />
        </WorkStyle.LogoContainer>
      </WorkStyle.WorkContainer>
      <WorkStyle.WorkContainer>
        <WorkStyle.Description padding="0 40px 0 0">
          <WorkStyle.ProjectName>
            Verrdi TSS
          </WorkStyle.ProjectName>
          <p>
            I was tasked with creating a website for Verrdi TSS, they offer CPC
            courses to HGV drivers and wanted a central location for prospective
            clients to be able to get a good overview of the company and browse available courses.
          </p>
          <p>
            The main requests from Verrdi was that it would be possible to see the courses they
            are currently offering and that a customer could sign up. Verrdi used Ticket Tailor
            for the creation of their courses and I was able to query their API and list the courses on the website.
          </p>
          <WorkStyle.Technology>Built with</WorkStyle.Technology>
          <p>HTML, CSS, JavaScript, React, Gatsby, GraphQL</p>
          <WorkStyle.ButtonContainer>
            <WorkStyle.Button
                href="https://www.verrdi.co.uk/"
                rel="noopener noreferrer"
                target="_blank"
            >
              <WorkStyle.ButtonIcon icon={faGlobeEurope} size="1x" />
              Website
            </WorkStyle.Button>
            <WorkStyle.Button
                href="https://github.com/danbarber88/verrdi"
                rel="noopener noreferrer"
                target="_blank"
            >
              <WorkStyle.ButtonIcon icon={faGithub} size="1x" />
              GitHub
            </WorkStyle.Button>
          </WorkStyle.ButtonContainer>
        </WorkStyle.Description>

        <WorkStyle.LogoContainer background="#014124" square>
          <VerrdiLogo className="logo-in-square" />
        </WorkStyle.LogoContainer>
      </WorkStyle.WorkContainer>
      <WorkStyle.WorkContainer>
        <WorkStyle.LogoContainer background="#006400" square>
          <FCCLogo className="logo-in-square" />
        </WorkStyle.LogoContainer>
        <WorkStyle.Description padding="0 0 0 40px">
          <WorkStyle.ProjectName>Free Code Camp</WorkStyle.ProjectName>
          <p>
            I completed the Free Code Camp front end development curriculum in
            2017, just before they switched to their new curriculum. I am
            exceptionally thankful that resources like this exist, my journey
            has been made a lot smoother because of resources like Free Code
            Camp.
          </p>
          <p>
            Free Code Camp had me complete several projects to earn their
            certificate. You can see the finished projects on my Codepen account
            linked below.
          </p>
          <p>
            <a
              href="https://www.freecodecamp.org/certification/danbarber/legacy-front-end"
              rel="noopener noreferrer"
              target="_blank"
            >
              My Front End Certificate
            </a>
          </p>

          <WorkStyle.Technology>Built with</WorkStyle.Technology>
          <p>HTML, CSS, JavaScript, jQuery and many different API's</p>
          <WorkStyle.ButtonContainer>
            <WorkStyle.Button
              href="https://codepen.io/danbarber88/pens/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <WorkStyle.ButtonIcon icon={faCodepen} size="1x" />
              CodePen
            </WorkStyle.Button>
            <WorkStyle.Button
              href="https://www.freecodecamp.org/danbarber"
              rel="noopener noreferrer"
              target="_blank"
            >
              <WorkStyle.ButtonIcon icon={faFreeCodeCamp} size="1x" />
              FCC
            </WorkStyle.Button>
          </WorkStyle.ButtonContainer>
        </WorkStyle.Description>
      </WorkStyle.WorkContainer>
      <Footer />
    </Wrapper>
  </Layout>
)

export default WorkPage
