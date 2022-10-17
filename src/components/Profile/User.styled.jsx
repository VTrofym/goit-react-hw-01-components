import styled from '@emotion/styled';

export const Profile = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  width: 100%;
  background-color: rgb(103, 241, 197);
`;

export const Description = styled.div`
  padding-top: 50px;
  padding-bottom: 10px;
  background-color: rgb(110, 211, 208);
`;

export const Avatar = styled.img`
  display: block;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin: auto;
  margin-bottom: 50px;
`;

export const Name = styled.p`
  text-align: center;
  font-weight: 800;
  font-size: 30px;
  line-height: 1.5;
`;

export const Tag = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5;
`;

export const Location = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 22px;
  line-height: 1.5;
`;

export const Stats = styled.ul`
  display: flex;
  padding: 0px;
  margin: 0;
  list-style: none;
`;

export const Block = styled.li`
  width: 1000px;
  list-style-type: none;
  border: 1px solid rgba(12, 8, 241, 0.3);
`;

export const Label = styled.span`
  margin: 0px;
  display: block;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5;
  padding-top: 20px;
`;

export const Quantity = styled.span`
  margin: 0px;
  display: block;
  text-align: center;
  font-weight: 800;
  font-size: 22px;
  line-height: 2;
  padding-bottom: 20px;
`;
