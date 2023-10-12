import React, { useEffect, useRef } from "react";
import { HistoricContainer, HistoricContent, PrincipalDiv } from "./styled";
import { TbArrowBigRightFilled } from "react-icons/tb";

const Historic = ({ history }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [history]);

  return (
    <HistoricContainer>
      <PrincipalDiv ref={containerRef}>
        {history.map((item, index) => (
          <HistoricContent key={index}>
            <p id="numberOfOperation">
              {index + 1}
              <TbArrowBigRightFilled />
            </p>
            <p id="resultOfOperation">{item}</p>
          </HistoricContent>
        ))}
      </PrincipalDiv>
    </HistoricContainer>
  );
};

export default Historic;
