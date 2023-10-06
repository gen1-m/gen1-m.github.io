import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { HiStatusOnline } from "react-icons/hi";
import GH from "../images/GH.svg";
import { Card } from "react-bootstrap";

const StyledCardComponent = styled.div`
  .card-title {
    color: ${({ theme }) => theme.color};
  }
  .card-text {
    color: ${({ theme }) => theme.color};
  }
  
  .card-footer {
    border-top: var(--border);

    .card-link {
      text-decoration: none;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.color};

      &:hover {
        color: var(--primary);
      }
    }

    .divider {
      border-left: 1px solid;
      margin: 0 30px;
      display: inline-block;
    }
  }
`;

export default function StyledCard({ theme, image, name, description, url, homepage }) {
  return (
    <StyledCardComponent>
      <Card bg={theme === "light" ? "white" : "dark"}>
        <Card.Img
          variant="top"
          src={image ? image : GH}
          alt={name}
          className="mx-auto"
        />
        <Card.Body className="overflow-auto text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          {homepage ? (
            <div>
              <Card.Link href={url}>
                {"Repo "}
                <FaGithub />
              </Card.Link>
              <div className="divider"></div>
              <Card.Link href={homepage}>
                {" Live "}
                <HiStatusOnline />
              </Card.Link>
            </div>
          ) : (
            <Card.Link href={url}>
              {"Repo "}
              <FaGithub />
            </Card.Link>
          )}
        </Card.Footer>
      </Card>
    </StyledCardComponent>
  );
}