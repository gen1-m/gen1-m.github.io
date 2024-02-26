import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
// Data
import { 
  LinkedIn
} from "../data";
// Icons
import { FaGithub } from "react-icons/fa";

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {
  const { html_url } = useSelector(selectData);
  const linkedinUrl = "https://www.linkedin.com/in/eugen-mamaj/";

  return (
    <StyledSocialLinks>
      <a
        href={html_url}
        aria-label="Check out my GitHub profile."
        className="link-icons"
      >
        <FaGithub />
      </a>
      {linkedinUrl && (
        <a href={linkedinUrl} aria-label="External link" className="link-icons">
          {LinkedIn}
        </a>
      )}
    </StyledSocialLinks>
  );
}
