import styled from 'styled-components';
import { boxShadow, flexbox } from '@styles/commonStyles';
import { font14 } from '@styles/fonts';

export const HeaderWrapper = styled.div`
  ${boxShadow};
  ${flexbox({ jc: 'between' })};
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 40px;
  width: 100%;
  height: 70px;
  z-index: 3;
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  @media ${({ theme }) => theme.device.mobile} {
    height: 44px;
    padding: 16px 10px;
  }
`;

export const HeaderRight = styled.div`
  ${flexbox({})};

  svg {
    display: none;
  }
  img {
    width: 153px;
    height: 20px;
  }

  & > *:hover {
    cursor: pointer;
  }
  @media ${({ theme }) => theme.device.mobile} {
    svg {
      display: block;
      min-width: 24px;
      min-height: 24px;
      margin-right: 16px;
    }
    img {
      width: 91.8px;
      height: 12px;
    }
  }
`;

export const HeaderMenu = styled.ul`
  ${flexbox({})};
  img {
    display: none;
  }
  @media ${({ theme }) => theme.device.mobile} {
    ${boxShadow};
    ${flexbox({ fd: 'column', jc: 'start', ai: 'start' })};
    position: absolute;
    transition: 0.45s;
    transform: translateX(-280px);
    width: 280px;
    height: 100vh;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const MenuItem = styled.li`
  ${flexbox({})};
  svg {
    fill: ${({ theme }) => theme.colors.white};
    margin-right: 8px;
  }
  ${font14(500)};

  :hover {
    cursor: pointer;
  }

  ::after {
    content: '';
    height: 16px;
    width: 1px;
    background: ${({ theme }) => theme.colors.white};
    margin: 0 32px;
  }
  :first-child {
    display: none;
  }
  :last-child {
    ${font14(400)};

    ::after {
      content: '';
      height: 0;
      width: 0;
      margin: 0;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    ${flexbox({ jc: 'start' })};
    z-index: 2;
    svg {
      fill: ${({ theme }) => theme.colors.darkGray};
      margin-right: 8px;
    }

    padding: 12px 36px;

    &:first-child {
      display: block;
      justify-content: start;
      width: 100%;
      height: 44px;
      padding: 16px 20px;
      margin-bottom: 24px;

      img {
        display: block;
        width: 91.8px;
        min-height: 12px;
      }

      border-bottom: 1px solid #e5e5e5;
    }
    &::after {
      margin: 0;
    }
    &:last-child {
      font-weight: 500;
    }
  }
`;

export const MenuWrapperMobile = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    z-index: 6;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    &.hidden {
      width: 0;
      height: 100%;
    }
    &:not(.hidden) ul {
      transform: translateX(0);
    }
  }
`;
export const Image = styled.div``;
