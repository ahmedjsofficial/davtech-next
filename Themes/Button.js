import styled from "styled-components";

export default function Button({ buttonText, buttonHandler }) {
  return (
    <>
      <ButtonTheme type="button" role={"button"} onClick={buttonHandler}>
        <span>{buttonText}</span>
      </ButtonTheme>
    </>
  );
}

const ButtonTheme = styled.button`
  color: var(--color-white);
  padding: 0.8rem 3.5rem;
  border-radius: 7px;
  background-color: #0070f3;
  box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);

  span {
    font-size: 1rem;
    font-weight: 500;
    font-style: normal;
  }
`;
