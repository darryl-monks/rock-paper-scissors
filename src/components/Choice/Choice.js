import styled from 'styled-components';
import Breakpoints from '../../assets/styles/Breakpoints';

const Button = styled.button`
  cursor: pointer;
  z-index: 1;
  width: 5rem;
  height: 5rem;
  position: absolute;
  border-radius: 100%;
  background-color: white;
  border-width: 0.5rem;
  border-style: solid;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }

  &.rock {
    border-color: var(--rock);
    right: 32px;
    bottom: 0px;
  }

  &.paper {
    border-color: var(--paper);
    top: 64px;
    right: 0px;
  }

  &.scissors {
    border-color: var(--scissors);
    left: 88px;
  }

  &.lizard {
    border-color: var(--lizard);
    left: 32px;
    bottom: 0px;
  }

  &.spock {
    border-color: var(--spock);
    top: 64px;
  }

  @media (min-width: ${Breakpoints.small}) {
    width: 6rem;
    height: 6rem;
    border-width: 0.75rem;

    &.rock {
      right: 46px;
      bottom: 0px;
    }

    &.paper {
      top: 96px;
      right: 0px;
    }

    &.scissors {
      left: 126px;
    }

    &.lizard {
      left: 46px;
      bottom: 0px;
    }

    &.spock {
      top: 96px;
    }
  }

  @media (min-width: ${Breakpoints.medium}) {
    width: 9rem;
    height: 9rem;
    border-width: 1rem;

    &.rock {
      right: 64px;
      bottom: 0px;
    }

    &.paper {
      top: 134px;
      right: 0px;
    }

    &.scissors {
      left: 184px;
    }

    &.lizard {
      left: 64px;
      bottom: 0px;
    }

    &.spock {
      top: 134px;
    }
  }
`;

const Icon = styled.img`
  max-width: 1.5rem;

  @media (min-width: ${Breakpoints.small}) {
    max-width: 2rem;
  }

  @media (min-width: ${Breakpoints.medium}) {
    max-width: 3rem;
  }
`;

function Choice(props) {
  const { id, choice, icon, onChoiceClick } = props;

  return (
    <Button className={choice.toLowerCase()} onClick={() => onChoiceClick(id)} aria-label={choice}>
      <Icon src={icon} alt={choice} />
    </Button>
  );
}

export default Choice;
