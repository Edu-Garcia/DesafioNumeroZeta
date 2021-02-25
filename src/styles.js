import styled from 'styled-components';

export const Box = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: Grey;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  div {
    width: 500px;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid black;
    background-color: WhiteSmoke;
    box-shadow: 2px 2px black;
  }

  a {
    text-align:center;
    width: 150px;
    margin-top: 2em;
    padding: 5px;
    border-radius:12px;
    box-shadow: 2px 2px 2px black;
    background-color: rgb(105, 105, 105);
    color: white;
    text-shadow: 2px 1px black;
    font-size: 1em;
    font-weight: bolder;
    cursor: pointer;
  }

  a:hover {
    background-color: rgba(105, 105, 105, 0.5);
    transition: .5s
  }

  input {
    padding: 8px;
    font-size: 1.03em;
    width: 200px;
    background-color: WhiteSmoke
  }

  p {
    padding: 5px 10px;
    font-weight: normal;
    text-shadow: .3px .3px black;
  }
`;