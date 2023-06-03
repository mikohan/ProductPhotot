import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';
import { url } from 'utils/urls';

// =========================================================
// =========================================================

const NavbarButton: FC<any> = () => {
  return <NextLink title="Contact" href={url.contact()} className="btn btn-sm btn-primary rounded-pill" />;
};

export default NavbarButton;
