import { NextPage } from 'next';
import { Fragment } from 'react';
import Head from 'next/head';
// -------- custom component -------- //
import { NavbarPhoto } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import { Pricing2 } from 'components/blocks/pricing';
import { CTA3 } from 'components/blocks/call-to-action';
import Accordion from 'components/reuseable/accordion';
import PageProgress from 'components/common/PageProgress';
import Button from 'components/elements/NavbarButton';
import { Portfolio1 } from 'components/blocks/portfolio';
// -------- data -------- //
import { accordionList } from 'data/herro';
import { company } from 'data/company-info';

// -------- carousel breakpoint obj -------- //
import carouselBreakpoints from 'utils/carouselBreakpoints';

const Pricing: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>{`Product Photography Prices - ${company.companyName}`}</title>
        <meta
          name="description"
          content="Product Photography prices by Professional Photo Studio. Send your message and get the best price in US."
        />
      </Head>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <NavbarPhoto language button={<Button />} />
      </header>

      <main className="content-wrapper">
        {/* ========== title section ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-20 pt-md-14 pb-md-22 text-center">
            <div className="row">
              <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <h1 className="display-1 mb-3">Our Sample Pricing</h1>
                <p className="lead mb-0 px-xl-10 px-xxl-13">
                  On this page are shown only sample prices. To discuss your project contact us - and we always will
                  give you great discount.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper">
          <div className="container pb-14 pb-md-16">
            {/* ========== our pricing section ========== */}
            <Pricing2 className="mt-n18 mt-md-n21 mb-12 mb-md-15" />

            {/* ========== our services section ========== */}
            {/* <div className="row gx-lg-8 gx-xl-12 gy-6 mb-14 mb-md-19">
              {data.serviceList.map(({ id, icon, title, description, linkUrl }) => (
                <div className="col-lg-4" key={id}>
                  <div className="d-flex flex-row">
                    <div>
                      <IconBox icon={icon} className="icon btn btn-circle disabled btn-primary me-4" />
                    </div>

                    <div>
                      <h4>{title}</h4>
                      <p className="mb-2">{description}</p>
                      <NextLink title="Learn More" href={linkUrl} className="more hover" />
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
            <Portfolio1 />

            {/* ========== faq section ========== */}
            <div className="row">
              <h2 className="display-4 mb-3 text-center">Pricing FAQ</h2>
              <p className="lead text-center mb-10 px-md-16 px-lg-0">
                If you don&apos;t see an answer to your question, you can send us an email from our contact form.
              </p>

              <div className="row mb-14 mb-md-18">
                {accordionList.map((items, i) => (
                  <div className="col-lg-6 mb-0" key={i}>
                    <div className="accordion-wrapper" id="accordion">
                      {items.map((item) => (
                        <Accordion key={item.no} {...item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ========== happy customers section ========== */}
            {/* <h2 className="display-4 mb-3 text-center">Happy Customers</h2>
            <p className="lead text-center mb-6 px-md-16 px-lg-0">
              Customer satisfaction is our major goal. See what our customers are saying about us.
            </p>

            <div className="position-relative">
              <div
                className="shape rounded-circle bg-soft-yellow rellax w-16 h-16"
                style={{ bottom: '0.5rem', right: '-1.7rem', transform: 'translate(0px, 2px, 0px)' }}
              />

              <div
                className="shape bg-dot primary rellax w-16 h-16"
                style={{ top: '-1rem', left: '-1.7rem', transform: 'translate(0px, -31px, 0px)' }}
              />

              <div className="swiper-container dots-closer mb-6">
                <Carousel grabCursor spaceBetween={0} navigation={false} breakpoints={carouselBreakpoints}>
                  {data.testimonialList.map((item, i) => (
                    <div className="item-inner" key={i}>
                      <TestimonialCard3 hideRating {...item} />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>*/}
          </div>
        </section>

        {/* ========== our community section ========== */}
        <CTA3 />
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default Pricing;
