import styled from '@emotion/styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Section = styled.section`
  width: 380px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  background-color: ${props => `${props.theme.colors.bgColor}`};
  border-radius: 20px;
  padding-top: 10px;
`;

export const Title = styled.h2`
  text-align: center;
  line-height: 20px;
  margin: 0;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  margin-top: 40px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 5px;
  width: 65px;
  height: 60px;
  border-radius: 5px;
  background-color: ${props => `${getRandomHexColor(props)}`};
`;

export const Label = styled.span`
  color: ${props => `${props.theme.colors.primaryColor}`};
`;

export const Percentage = styled.span`
  color: ${props => `${props.theme.colors.primaryColor}`};
  font-weight: bold;
`;