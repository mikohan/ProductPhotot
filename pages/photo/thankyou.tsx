import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { NavbarPhoto } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';
import { url } from 'utils/urls';
import Button from 'components/elements/NavbarButton';

const NotFound: NextPage = () => {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <NavbarPhoto language button={<Button />} />
      </header>

      <main className="content-wrapper">
        <section className="wrapper bg-light">
          <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
            <div className="row">
              <div className="col-lg-9 col-xl-8 mx-auto">
                <FigureImage width={800} height={531} src="/img/illustrations/i17.png" className="mb-10" />
              </div>

              <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
                <h1 className="mb-3">Your request has been sent!</h1>
                <p className="lead mb-7 px-md-12 px-lg-5 px-xl-7">
                  We will contact you as soon as possible to discuss the project details.
                </p>
                <NextLink title="Go to Homepage" href={url.home()} className="btn btn-primary rounded-pill" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default NotFound;
