import styled from 'styled-components';

export const LoadingBackground = styled.div`
  &:before {
    content: '';
    background: #1e1e1ecc;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

export const LoadingSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px;
  background: #fefefe;
  border-radius: 6px;
  z-index: 2;
`;

export const LoadingTitle = styled.p`
  text-align: center;
  color: #727272;
  width: 200px;
  font-size: 16px;
  margin-bottom: 10px;
`;
