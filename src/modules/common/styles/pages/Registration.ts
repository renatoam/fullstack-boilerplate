import styled from 'styled-components';

export const Form = styled.form`
  flex: 1 0 100%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  max-width: 300px;
  padding: 30px;
  border-radius: 5px;
  border: 1px solid #16324f69;
  background-color: #fff;

  h1,
  input,
  select {
    margin: 15px auto;
    flex: 1 0 100%;
  }

  select {
    opacity: 0.8;
    height: 30px;
    background-color: #16324f;
    color: #fff;
    padding: 5px 15px;
  }

  input,
  select {
    border: none;
    outline: none;
  }

  input {
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(22, 50, 79, 0.41);
  }

  input:focus {
    border-bottom: 1px solid rgb(22, 50, 79);
  }

  .submit {
    cursor: pointer;
    outline: none;
    flex: 0 0 170px;
    margin: 15px auto;
    background-color: #16324f;
    color: #fff;
    border: none;
    height: 30px;
    border-radius: 5px;
    font-size: 15px;
  }

  .error {
    width: 100%;
    text-align: left;
    font-size: 12px;
    color: #db222a;
  }
`
