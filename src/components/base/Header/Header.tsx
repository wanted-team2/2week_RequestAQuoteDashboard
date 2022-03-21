import React from 'react';
import * as S from './Style';

import useHeaderSlide from './useHeaderSlide';
import useHeaderResize from './useHeaderResize';

import logo from '@assets/logo.png';
import colorLogo from '@assets/colorLogo.png';

import { ReactComponent as CompanySvg } from '@assets/company.svg';
import { ReactComponent as HamburgerMobile } from '@assets/hamburger.svg';

interface HeaderProps {
  companyName?: string;
}

const Header = ({ companyName = 'A 가공 업체' }: HeaderProps) => {
  const { slideToggle, handleToggleMenu, setSlideToggle } = useHeaderSlide();
  const headerRef = useHeaderResize(setSlideToggle);

  return (
    <S.HeaderWrapper>
      <S.HeaderInner>
        <S.HeaderRight>
          <S.HamburgerContainer className={'toggle-button'}>
            <HamburgerMobile onClick={handleToggleMenu} />
          </S.HamburgerContainer>
          <S.Image>
            <img src={logo} alt="로고" />
          </S.Image>
        </S.HeaderRight>
        <S.MenuWrapperMobile
          className={`menu-wrapper toggle-button ${
            slideToggle ? 'show' : 'hidden'
          }`}
          onClick={handleToggleMenu}>
          <S.HeaderMenu className={'menu-list'} ref={headerRef}>
            <S.MenuItem>
              <S.Image>
                <img src={colorLogo} alt="로고" />
              </S.Image>
            </S.MenuItem>
            <S.MenuItem>
              <CompanySvg />
              {companyName}
            </S.MenuItem>
            <S.MenuItem>로그아웃</S.MenuItem>
          </S.HeaderMenu>
        </S.MenuWrapperMobile>
      </S.HeaderInner>
    </S.HeaderWrapper>
  );
};

export default Header;
