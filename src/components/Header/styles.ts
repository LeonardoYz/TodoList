import styled from "styled-components";

export const Content = styled.header`
  padding: 2rem 0 1.125rem;
  border-bottom: 1px solid var(--light-gray-clr);

  .header {
    &__navigation {
      display: grid;
      row-gap: 3.625rem;
    }

    &__logo {
      text-align: center;
      margin-right: 4.25rem;

      a { 
        font: 700 2.25rem 'Raleway', sans-serif;
        letter-spacing: -0.045em;
        color: var(--dark-clr);

        transition: color 280ms ease-in-out;

        &:hover {
          color: var(--blue-clr);
        }
      }
    }

    &__task-filter {
      display: flex;
      justify-content: space-between;
      padding: 0 4.25rem;
    }
  }
`

export const Button = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  font-weight: 600;
  color: var(--dark-clr);

  transition: color 280ms ease-in;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -1.125rem;
    height: 0.25rem;
    width: 5.5625rem;
    background-color: var(--blue-clr);
    border-radius: 4px 4px 0px 0px;
    opacity: 0;
    transition: opacity 280ms ease-out;
  }

  &.active {
    color: var(--blue-clr);

    &::after {
      opacity: 1;
    }
  }
`