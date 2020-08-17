import styled from "styled-components";

const Styles = styled.div`
  
    div {
      background-color: #23272a;
      text-align: center;
      color: #76E4F7;
      padding: 5%;
      font-family: Montserrat;
    } 
    h1 {
      text-align: center;
      font-size: 2.5em;
      font-family: Montserrat;
    }

    form {
      display: flex;
      flex-direction: column;
      width: 75%;
      margin: 10%;
      .helper {
        font-size: 2em;
        text-align: center;
        font-weight: bold;
        text-align: left;
        margin-top: 3%;
      }
      .helper-check {
        font-size: 2em;
        text-align: center;
        font-weight: bold;
        margin-top: 2%;
      }

      input,
      select {
        color: #76E4F7;
        font-size: 1.2em;
      }

      .error {
        color: red;
      }
      .error-div {
        background-color: #FED7D7;
        color: black;

      }

      

      }
    
  }
`;

export default Styles;
