import { darken } from "polished";
import styled from "styled-components";

interface ContainerProps {
  isCompleted: boolean;
}

export const Container = styled.section<ContainerProps>`
  padding-top: 1.125rem;
  display: grid;
  row-gap: ${props => !props.isCompleted ? "2rem" : "0"};

  .tasks {
    ul {
      display: grid;
      gap: 1.6875rem;
    }
  }
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.3125rem;

  .delete-button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.1875rem;

    font-weight: 600;
    font-size: var(--small-font-size);
    background-color: var(--red-clr);
    color: var(--neutral-clr);
    border: none;
    border-radius: 4px;
    height: 2.5rem;
    width: 7.75rem;
    transition: background-color 280ms ease-in-out;

    &:hover {
      background-color: ${darken(0.05, "hsl(0, 79%, 63%)")};
    }
  }
`