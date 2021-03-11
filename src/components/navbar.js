import React, { useEffect, useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { MobileMenuCard } from '../styled/cards';
import { PillLinkComposer } from '../styled/link';
import { NavLinks } from '../utils/composers';
import { fluid } from '../utils/fluid';
import { getRandom } from '../utils/random';

import NavbarSvg from '../../content/assets/navbar.svg';
import CloseSvg from '../../content/assets/close.svg';

// Styled components

const NavbarContainer = styled.nav`
  width: 100%;
  height: 100px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(48px);

  @media (min-width: 768px) {
    height: ${fluid(100, 164)};
    border-bottom-left-radius: ${fluid(24, 40)};
    border-bottom-right-radius: ${fluid(24, 40)};
  }
`;

const InnerNavbarContainer = styled.div`
  width: clamp(272px, 100%, 455px);
  // Up to 768px the container sets its own margins
  margin: 0px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & svg {
    width: 48px;
  }

  @media (min-width: 768px) {
    width: 100%;
    // Margin determined by first and last elements
    margin: 0px;

    & svg {
      width: ${fluid(48, 64)};
      margin-inline-start: ${fluid(24, 132)};
    }

    & > a:last-child {
      margin-inline-end: ${fluid(24, 132)};
    }
  }
`;

const NavbarLinksContainer = styled.div`
  // In mobile navlinks are controlled inside the MobileMenuCard
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    & div {
      margin-inline-start: ${fluid(16, 32)};
      margin-inline-end: ${fluid(16, 32)};
    }
  }
`;

// Main components

const Navbar = ({ path }) => {
  // GraphQL
  const data = useStaticQuery(graphql`
    query NavQuery {
      allFeedSafareigFm {
        totalCount
      }
    }
  `);

  const [showMenu, setShowMenu] = useState(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const totalCount = data.allFeedSafareigFm?.totalCount;
  const randomEspisode = getRandom(1, totalCount);

  const toggleMobileMenu = () => setShowMenu(!showMenu);

  // Click outside the navbar element closes the menu
  const globalListener = (e) =>
    e.target.id !== 'nav-menu' && setShowMenu(!showMenu);

  useEffect(() => {
    showMenu
      ? window.addEventListener('click', globalListener)
      : window.removeEventListener('click', globalListener);
    return () => {
      window.removeEventListener('click', globalListener);
    };
  }, [showMenu]);

  return (
    <NavbarContainer>
      <InnerNavbarContainer>
        <Link to="/">
          <NavbarSvg />
        </Link>
        <NavbarLinksContainer>
          <NavLinks />
        </NavbarLinksContainer>
        {isDesktop ? (
          <Link to={`/${randomEspisode}`}>
            <PillLinkComposer text="Escolta'ns" />
          </Link>
        ) : (
          <div role="button" tabIndex="0" onClick={() => toggleMobileMenu()}>
            <PillLinkComposer text={!showMenu ? 'Menú' : <CloseSvg />} />
          </div>
        )}
      </InnerNavbarContainer>
      <MobileMenuCard id="nav-menu" show={showMenu}>
        <NavLinks />
        <Link to={`/${randomEspisode}`}>
          <PillLinkComposer text="Escolta'ns" />
        </Link>
      </MobileMenuCard>
    </NavbarContainer>
  );
};

export default Navbar;
