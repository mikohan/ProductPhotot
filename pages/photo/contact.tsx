import { NextPage } from 'next';
import { Fragment } from 'react';
import Head from 'next/head';
// -------- custom component -------- //
import { NavbarPhoto } from 'components/blocks/navbar';
import { Tiles3 } from 'components/elements/tiles';
import { Footer8 } from 'components/blocks/footer';
import Breadcrumb from 'components/reuseable/Breadcrumb';
import PageProgress from 'components/common/PageProgress';
import ContactForm from 'components/common/ContactForm';
import Button from 'components/elements/NavbarButton';
import { company } from 'data/company-info';
import { url } from 'utils/urls';

// -------- data -------- //
const breadcrumb = [
  { id: 1, title: 'Home', url: url.home() },
  { id: 2, title: 'Contact', url: '#' }
];

const ContactTwo: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>{`Product Photo Shoot Studio in Los Angeles ${company.companyName} | Contacts`}</title>
        <meta
          name="description"
          content="Need quality product photoshoot? Contact us and get your perfect product's images!"
        />
      </Head>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <NavbarPhoto language button={<Button />} />
      </header>

      <main className="content-wrapper">
        {/* ========== page title section ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
            <div className="row">
              <div className="col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-5 mx-auto">
                <h1 className="display-1 mb-3">Get in Touch</h1>
                <Breadcrumb data={breadcrumb} />
              </div>
            </div>
          </div>
        </section>

        <div className="wrapper bg-light angled upper-end">
          <div className="container py-14 py-md-16">
            {/* ========== contact info section ========== */}
            <div className="row gy-10 gx-lg-8 gx-xl-12 mb-16 align-items-center">
              <div className="col-lg-7 position-relative">
                <div className="shape bg-dot primary rellax w-18 h-18" style={{ top: 0, left: '-1.4rem', zIndex: 0 }} />

                <Tiles3 />
              </div>

              <div className="col-lg-5">
                <h2 className="display-4 mb-8">Convinced yet? Let's make something great together.</h2>
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-6 mt-n1">
                      <i className="uil uil-location-pin-alt" />
                    </div>
                  </div>

                  <div>
                    <h5 className="mb-1">Address</h5>
                    <address>
                      {company.companyAddress}, <br className="d-none d-md-block" />
                      Los Angeles, CA, USA
                    </address>
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-6 mt-n1">
                      <i className="uil uil-phone-volume" />
                    </div>
                  </div>

                  <div>
                    <h5 className="mb-1">Phone</h5>
                    <p>{company.companyPhone}</p>
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-6 mt-n1">
                      <i className="uil uil-envelope" />
                    </div>
                  </div>

                  <div>
                    <h5 className="mb-1">E-mail</h5>
                    <p className="mb-0">
                      <a href="mailto:sandbox@email.com" className="link-body">
                        {company.companyEmail}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== contact form section ========== */}
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <h2 className="display-4 mb-3 text-center">Drop Us a Line</h2>
                <p className="lead text-center mb-10">
                  Reach out to us from our contact form and we will get back to you shortly.
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default ContactTwo;
