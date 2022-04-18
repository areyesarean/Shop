import styled from 'styled-components';
interface Props {
  colorBorder: string;
}

export const Container = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 200px;
`;

export const ButtonSend = styled.button`
  padding: 10px 15px;
  margin: 0px;
  width: 100%;
  background-color: #02b875;
  border: 1px solid #02b875;
  font-family: 'Dank Mono';
  border-radius: 5px;
  box-shadow: 1px 2px 3px gray;
  color: white;
  font-size: 15px;
  cursor: pointer;
`;

export const Input = styled.input<Props>`
  box-shadow: 1px 2px 3px gray;
  margin: 0px;
  border-radius: 5px;
  border: 0.1px solid white;
  outline: 1px solid ${(props) => props.colorBorder};
  font-size: 16px;
  padding: 10px;
  width: 278px;
`;

export const Error = styled.p`
  text-align: center;
  color: #ff5252;
  font-family: 'Dank Mono';
  font-size: 15px;
`;

export const AppName = styled.h1`
  text-align: center;
  margin: 0px 0px 10px 0px;
  color: white;
`;
