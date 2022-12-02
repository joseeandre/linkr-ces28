import styled from "styled-components";

const Container = styled.div`
  background-color: #91a997;
  height: 100vh;
  color: white;
  display: flex;
  flex-flow: wrap column;
  .logo {
    display: flex;
    flex-direction: column;
    padding-left: 10vh;
    padding-top: 28vh;
    width: 60%;
    height: 100vh;
  }
  h1 {
    color: #57705c;
    font-family: "Caveat", cursive;
    font-weight: 600;
    font-size: 120px;
    line-height: 140px;
  }
  h2 {
    font-family: "Kulim Park", sans-serif;
    font-size: 30px;
    letter-spacing: 3px;
    line-height: 40px;
    width: 500px;
    word-break: break-word;
  }
  form {
    display: flex;
    flex-flow: wrap column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 40%;
    background-color: #57705c;
  }
  input {
    width: 80%;
    height: 50px;
    margin-bottom: 15px;
    border-radius: 6px;
    font-family: "Kulim Park", sans-serif;
    color: #9f9f9f;
    padding-left: 17px;
    font-size: 18px;
    border: none;
    :hover {
      background-color: #eff4f0;
      transition-duration: 0.5s;
    }
    :focus {
      background-color: #eff4f0;
    }
  }
  button {
    width: 80%;
    height: 50px;
    background-color: #91a997;
    border: none;
    border-radius: 6px;
    margin-top: 10px;
    color: white;
    font-family: "Kulim Park", sans-serif;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 3px;
    :hover {
      background-color: white;
      color: #57705c;
      transition-duration: 1s;
    }
  }
  h3 {
    font-family: "Lato", sans-serif;
    color: white;
    margin-top: 40px;
    letter-spacing: 3px;
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    flex-flow: wrap row;
    .logo {
      height: 180px;
      width: 100vw;
      padding: 0px;
      justify-content: center;
      align-items: center;
    }
    h1 {
      font-size: 60px;
    }
    h2 {
      font-size: 20px;
      width: 237px;
    }
    form {
      width: 100%;
      justify-content: flex-start;
      padding-top: 50px;
    }
  }
`;

export default Container;
