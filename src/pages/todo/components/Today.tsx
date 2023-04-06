import styled from "styled-components";
import useSetTime from "../../../hooks/useSetTime";

function Today() {
  const [year, month, day, week] = useSetTime();

  return (
    <>
      <TodayWrapper>
        <Day>{day}</Day>
        <MonthYear>
          <div>{month}</div>
          <div>{year}</div>
        </MonthYear>
      </TodayWrapper>
      <Week>{week}</Week>
    </>
  );
}

export default Today;

const TodayWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Day = styled.div`
  font-size: 50px;
  font-weight: 700;
`;

const MonthYear = styled.div`
  margin-left: 5px;
  font-size: 16px;
  font-weight: 700;
`;

const Week = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
