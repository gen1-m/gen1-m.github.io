import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
// Components
import { Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import ContactForm from "./ContactForm";

const StyledSection = styled.section`
  min-height: 89vh;
  padding-top: var(--nav-height);
`;

export default function Contact() {
  return (
    <Element name={"Contact"} id="contact">
      <StyledSection className="d-flex flex-column justify-content-center">
        <Container className="d-flex">
          <Title>
            <h2>Contact Me</h2>
            <div className="underline"></div>
          </Title>
        </Container>
        <Container>
<<<<<<< Updated upstream
          <h3>The form is currently not available, so please don't submit on it :)</h3>
=======
          <br></br>
          <h5><center>The form currently not working!!!</center></h5>
          <h5><center>Please for now, contact me at my email: "genimamaj2004@gmail.com".</center></h5> 
          <br></br>
          <br></br>
>>>>>>> Stashed changes
          <ContactForm />
        </Container>
      </StyledSection>
    </Element>
  );
}
