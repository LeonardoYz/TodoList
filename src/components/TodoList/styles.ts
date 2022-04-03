import styled from "styled-components";

export const Container = styled.section`
  padding-top: 1.125rem;
  display: grid;
  row-gap: 2rem;

  .todo {
    &__checkbox {
      &--container {
        display: flex;
        align-items: center;
        gap: 7px;
        width: 40%;

        font-weight: 500;
        font-size: var(--big-font-size);

        &.completed {
          text-decoration: line-through;
        }
      }

      &--input {
        &:checked {
          & ~ .todo__checkmark {
            background-color: var(--blue-clr);
          }

          & ~ .todo__checkmark::after {
            opacity: 1;
            transform: rotate(45deg) scale(1);
          }
        } 
      }
    }

    &__checkmark {
      display: flex;
      justify-content: center;
      align-items: center;
      
      position: relative;
      width: 1.5rem;
      height: 1.5rem;
      background-color: var(--neutral-clr);
      border: 1px solid var(--dark-gray-clr);
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 300ms ease-out;
  
      &::after {
        content: "";
        position: absolute;
        top: 0.0625rem;
        left: 0.4375rem;

        width: 0.5rem;
        height: 1rem;
        border: solid var(--neutral-clr);
        border-width: 0px 2px 2px 0;
        opacity: 0;
        
        transform: rotate(45deg) scale(1.4);
        transition: opacity 300ms ease-out, transform 300ms ease-in-out;
      }
    }
  }
`