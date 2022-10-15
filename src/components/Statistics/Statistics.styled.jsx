import styled from '@emotion/styled';

export const Section = styled.section`
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
  max-width: 450px;
  background-color: rgb(216, 232, 227);
`;

export const Title = styled.h2`
  margin: 0px 0px 50px 0px;
  text-align: center;
  font-weight: 400;
  font-size: 35px;
  line-height: 1;
`;

export const StatList = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
`;

export const Item = styled.li`
  width: 450px;
  height: 100px;
  padding-top: 15px;
  border: 1px solid rgba(9, 5, 237, 0.861);
  background-color: ${props => getRandomHexColor()};
`;
export const Label = styled.span`
  padding: 0;
  margin-bottom: 20px;
  letter-spacing: normal;
  color: aliceblue;
  display: block;
  text-align: center;
`;

export const Percentage = styled.span`
  display: block;
  text-align: center;
  font-weight: 400;
  font-size: 28px;
  color: aliceblue;
`;

function getRandomHexColor() {
  return `#${Math.round(Math.random() * 10000)}`;
}
