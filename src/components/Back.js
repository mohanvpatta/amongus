import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledBack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 80px 0;

  .back {
    display: flex;
    flex-direction: row;

    padding: 4px 10px 5px 10px;

    color: rgba(255, 255, 255, 0.7);
    background-color: rgba(255, 255, 255, 0.06);
  }
`;

const Back = ({ text, path }) => {
  return (
    <StyledBack>
      <Link to={path}>
        <div className="back">
          <div className="arrow"></div>
          <div className="text">{text}</div>
        </div>
      </Link>
    </StyledBack>
  );
};

export default Back;