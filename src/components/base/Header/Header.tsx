import React, { useState } from 'react';
import * as S from './Style';

import logo from '@assets/logo.png';
import colorLogo from '@assets/colorLogo.png';

import { ReactComponent as CompanySvg } from '@assets/company.svg';
import { ReactComponent as HamburgerMobile } from '@assets/hamburger.svg';

interface HeaderProps {
  companyName?: string;
}

const Header = ({ companyName = 'A 가공 업체' }: HeaderProps) => {
  const [slideToggle, setSlideToggle] = useState(false);

  const handleToggleMenu = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    const target = e.target as HTMLElement;
    const targetElem =
      target.closest('.menu-list') || target.closest('.toggle-button');
    if (!targetElem) {
      return;
    }
    if (targetElem.classList.contains('menu-list')) {
      return;
    }
    if (targetElem) {
      setSlideToggle(!slideToggle);
    }
  };

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
          <S.HeaderMenu className={'menu-list'}>
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
