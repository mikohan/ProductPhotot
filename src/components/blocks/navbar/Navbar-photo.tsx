import Link from 'next/link';
import LinkType from 'types/link';
import Image from 'next/image';
import { FC, Fragment, ReactElement, useRef } from 'react';
// -------- custom hook -------- //
import useSticky from 'hooks/useSticky';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
import ListItemLink from 'components/reuseable/links/ListItemLink';
import DropdownToggleLink from 'components/reuseable/links/DropdownToggleLink';
// -------- partial header component -------- //
import Info from './partials/Info';
import Search from './partials/Search';
import Social from './partials/Social';
import Signin from './partials/Signin';
import Signup from './partials/Signup';
import Language from './partials/Language';
import MiniCart from './partials/MiniCart';
// -------- data -------- //
import { company } from 'data/company-info';

import { url, projectsNavigation } from 'utils/urls';

// ===================================================================
type NavbarProps = {
  info?: boolean;
  cart?: boolean;
  fancy?: boolean;
  logoAlt?: string;
  search?: boolean;
  social?: boolean;
  language?: boolean;
  stickyBox?: boolean;
  navClassName?: string;
  button?: ReactElement;
  navOtherClass?: string;
};
// ===================================================================

const NavbarPhoto: FC<NavbarProps> = (props) => {
  const { navClassName, info, search, social, language, button, cart, fancy, navOtherClass, stickyBox, logoAlt } =
    props;

  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically render the logo
  const logo = sticky ? 'logo-dark' : logoAlt ?? 'logo-dark';
  // dynamically added navbar classname
  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  // render inner nav item links
  const renderLinks = (links: LinkType[]) => {
    return links.map((item) => {
      if (item.show) {
        return <ListItemLink href={item.url} title={item.title} linkClassName="dropdown-item" key={item.id} />;
      } else return null;
    });
  };

  // all main header contents
  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-100">
        <NextLink href={url.home()} title={<Image width={134} height={26} alt="logo" src={`/img/${logo}.png`} />} />
      </div>

      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
        <div className="offcanvas-header d-lg-none">
          <h3 className="text-white fs-30 mb-0">Angara Lab</h3>
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close btn-close-white" />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav">
            {/* =============================== My Home item ================== */}
            <ListItemLink href={url.home()} title="Home" />
            {/* =============================== My Home item ================== */}
            <ListItemLink href={url.prices()} title="Pricing" />

            {/* ===================== Services  ===================== */}
            <li className="nav-item dropdown">
              <DropdownToggleLink title="Services" className="nav-link dropdown-toggle" />
              <div className="dropdown-menu dropdown-lg">
                <div className="dropdown-lg-content">
                  {projectsNavigation.map(({ title, children }, i) => (
                    <div key={title + i}>
                      <h6 className="dropdown-header">{title}</h6>
                      <ul className="list-unstyled">{renderLinks(children)}</ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>

            {/* =============================== About item ================== */}
            {/* <ListItemLink href={url.portfolio()} title="Portfolio" /> */}

            {/* =============================== About item ================== */}
            <ListItemLink href={url.about()} title="About" />

            {/* =============================== Contacts item ================== */}
            {/* <ListItemLink href={url.blog()} title="Blog" /> */}

            {/* =============================== Contacts item ================== */}
            <ListItemLink href={url.contact()} title="Contact us" />

            {/*  ===================== pages nav item  ===================== */}
          </ul>

          {/* ============= show contact info in the small device sidebar ============= */}
          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink title={company.companyEmail} className="link-inverse" href={`mailto:${company.companyEmail}`} />
              <br />
              <NextLink href={`tel:${company.companyPhone}`} title={company.companyPhone} />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* ============= right side header content ============= */}
      <div className={navOtherClass}>
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {/* ============= language dropdwown ============= */}
          {/* {language && <Language />} */}

          {/* ============= info button ============= */}
          {info && (
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-info">
                <i className="uil uil-info-circle" />
              </a>
            </li>
          )}

          {/* ============= search icon button ============= */}
          {search && (
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-search">
                <i className="uil uil-search" />
              </a>
            </li>
          )}

          {/* ============= contact button ============= */}
          {button && <li className="nav-item d-none d-md-block">{button}</li>}

          {/* ============= shopping cart button ============= */}
          {cart && (
            <li className="nav-item">
              <a
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas-cart"
                className="nav-link position-relative d-flex flex-row align-items-center"
              >
                <i className="uil uil-shopping-cart" />
                <span className="badge badge-cart bg-primary">3</span>
              </a>
            </li>
          )}

          {/* ============= social icons link ============= */}
          {social && <Social />}

          {/* ============= humburger button for small device ============= */}
          <li className="nav-item d-lg-none">
            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas-nav" className="hamburger offcanvas-nav-btn">
              <span />
            </button>
          </li>
        </ul>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {stickyBox && <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />}

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
        )}
      </nav>

      {/* ============= signin modal ============= */}
      <Signin />

      {/* ============= signup modal ============= */}
      <Signup />

      {/* ============= info sidebar ============= */}
      {info && <Info />}

      {/* ============= show search box ============= */}
      {search && <Search />}

      {/* ============= cart sidebar ============= */}
      {cart && <MiniCart />}
    </Fragment>
  );
};

// set deafult Props
NavbarPhoto.defaultProps = {
  cart: false,
  info: false,
  social: false,
  search: false,
  language: false,
  stickyBox: true,
  navOtherClass: 'navbar-other w-100 d-flex ms-auto',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};

export default NavbarPhoto;
