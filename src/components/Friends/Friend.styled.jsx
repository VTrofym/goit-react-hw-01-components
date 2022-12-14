import styled from '@emotion/styled';

export const Item = styled.li`
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  background-color: beige;
  display: flex;
  align-items: center;
`;

export const Status = styled.span`
  background-color: #fff;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: inline-block;
  background-color: ${showStatus};
`;

export const Avatar = styled.img``;

export const Name = styled.p`
  margin-left: 20px;
  font-weight: 400;
  font-size: 28px;
`;

function showStatus(p) {
  return p.isOnline ? 'green' : 'red';
}
