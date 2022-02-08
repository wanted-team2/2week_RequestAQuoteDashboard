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
    if (target.classList.contains('toggle-button')) {
      setSlideToggle(!slideToggle);
      return;
    }
  };

  return (
    <S.HeaderWrapper>
      <S.HeaderRight>
        <HamburgerMobile
          className={'toggle-button'}
          onClick={handleToggleMenu}
        />
        <S.Image>
          <img src={logo} alt="로고" />
        </S.Image>
      </S.HeaderRight>
      <S.MenuWrapperMobile
        className={`menu-wrapper toggle-button ${
          slideToggle ? 'show' : 'hidden'
        }`}
        onClick={handleToggleMenu}>
        <S.HeaderMenu>
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
    </S.HeaderWrapper>
  );
};

export default Header;
