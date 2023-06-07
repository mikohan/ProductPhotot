import { NextPage } from 'next';
import { Fragment } from 'react';
import Head from 'next/head';
// -------- custom component -------- //
import { Team8 } from 'components/blocks/team';
import { NavbarPhoto } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import { Process8 } from 'components/blocks/process';
import Carousel from 'components/reuseable/Carousel';
import { TestimonialCard2 } from 'components/reuseable/testimonial-cards';
// -------- icons component -------- //
import Target from 'icons/lineal/Target';
import BarChart from 'icons/lineal/BarChart';
import Megaphone from 'icons/lineal/Megaphone';
import SettingsThree from 'icons/lineal/SettingsThree';
import Button from 'components/elements/NavbarButton';
import { company } from 'data/company-info';

// -------- data -------- //
import { testimonialList2 } from 'data/herro';
const serviceList2 = [
  {
    id: 1,
    title: 'Marketing',
    Icon: <Megaphone />,
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
  },
  {
    id: 2,
    title: 'Strategy',
    Icon: <Target className="icon-svg-md text-green mb-3" />,
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
  },
  {
    id: 3,
    title: 'Development',
    Icon: <SettingsThree />,
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
  },
  {
    id: 4,
    Icon: <BarChart />,
    title: 'Data Analysis',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
  }
];

const AboutTwo: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>{`Photo Studio ${company.companyName} | About`}</title>
        <meta
          name="description"
          content="Need quality product photography? Send us your product and get back good looking photographs for your ecommerce!"
        />
      </Head>
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <NavbarPhoto language button={<Button />} />
      </header>

      <main className="content-wrapper">
        {/* ========== page title section ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-14 pt-md-10 pb-md-14 text-center">
            <div className="row">
              <div className="col-xl-5 mx-auto mb-6">
                <h1 className="display-1 mb-3">About Us</h1>
                <p className="lead mb-0">We are the company that turning ideas into beautiful thins.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-gray">
          <div className="container py-14 py-md-16">
            {/* ========== how it work section ========== */}
            <Process8 />
          </div>
        </section>

        {/* ========== team section ========== */}
        <Team8 />

        <section className="wrapper bg-gray">
          <div className="container py-14 py-md-16">
            {/* ========== testimonial section ========== */}
            <div className="row gx-lg-8 gx-xl-12 gy-6 mb-15 align-items-center">
              <div className="col-lg-7 order-lg-2">
                <figure>
                  <img
                    alt=""
                    className="w-auto"
                    src="/img/illustrations/i4.png"
                    srcSet="/img/illustrations/i4@2x.png 2x"
                  />
                </figure>
              </div>

              <div className="col-lg-5 mt-lg-12">
                <div className="swiper-container dots-closer mb-6">
                  <Carousel grabCursor slidesPerView={1} navigation={false}>
                    {testimonialList2.map((item, i) => (
                      <TestimonialCard2 key={i} {...item} />
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>

            {/* ========== clients section ========== */}

            <div className="px-lg-5">{/* <Clients1 /> */}</div>
          </div>
        </section>

        {/* ========== contact section ========== */}
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-7">
                <figure>
                  <img
                    alt=""
                    className="w-auto"
                    src="/img/illustrations/i5.png"
                    srcSet="/img/illustrations/i5@2x.png 2x"
                  />
                </figure>
              </div>

              <div className="col-lg-5">
                <h3 className="display-4 mb-7">Got any questions? Don't hesitate to get in touch.</h3>
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-4 mt-n1">
                      <i className="uil uil-location-pin-alt" />
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-1">Address</h5>
                    <address>{company.companyAddress}</address>
                  </div>
                </div>
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-4 mt-n1">
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
                    <div className="icon text-primary fs-28 me-4 mt-n1">
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
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default AboutTwo;
