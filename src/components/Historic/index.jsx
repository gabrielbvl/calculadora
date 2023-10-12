import { HistoricContainer } from "./styled";

const Historic = ({ history }) => {
  return (
    <HistoricContainer>
      <div>
        {history.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </HistoricContainer>
  );
};

export default Historic;
