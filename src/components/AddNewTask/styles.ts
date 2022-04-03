import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5625rem;

  .add {
    &__input {
      outline: none;
      padding: 1.25rem 0.75rem 1.1875rem;
      width: 100%;
      border: 1px solid var(--light-gray-clr);
      border-radius: 12px;
      transition: border-color 280ms ease-in-out;

      &:focus {
        border-color: var(--blue-clr);
      }
    }

    &__button {
      font-weight: 600;
      background-color: var(--blue-clr);
      padding: 1.25rem 2.5rem;
      color: var(--neutral-clr);
      border: none;
      border-radius: 12px;
      box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
      transition: background-color 280ms ease-in-out, box-shadow 280ms ease-in;

      &:hover {
        background-color: ${darken(0.08, "hsl(214, 84%, 56%)")};
        box-shadow: 0px 2px 6px transparent;
      }
    }
  }
`