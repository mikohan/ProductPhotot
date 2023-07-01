import Image from 'next/image';
import { NextPage } from 'next';
import { Fragment } from 'react';
import Head from 'next/head';
// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox';
// -------- custom component -------- //
import { Footer8 } from 'components/blocks/footer';
import { NavbarPhoto } from 'components/blocks/navbar';
import PageProgress from 'components/common/PageProgress';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';
import ProjectDetailsContent from 'components/common/ProjectDetailsContent';
import ProjectDetailsNavigation from 'components/common/ProjectDetailsNavigation';
import Button from 'components/elements/NavbarButton';
import Plyr from 'plyr-react';

import { ProjectCard1 } from 'components/reuseable/project-cards';
// -------- data -------- //
import { gallery, projectList1 } from 'data/project';
import { company } from 'data/company-info';

const images = [

  '/img/portfolio_product/jew-0001.jpg',
  '/img/portfolio_product/jew-0002.jpg',
  '/img/portfolio_product/jew-0003.jpg',
  '/img/portfolio_product/jew-0004.jpg',

];

const ProjectDetails: NextPage = () => {
  // used for image lightbox
  useLightBox();

  return (
    <Fragment>
      <Head>
        <title>{`Product Photography - ${company.companyName}`}</title>
        <meta
          name="description"
          content={`Product Photography of our creative photo studio - ${company.companyName}`}
        />
      </Head>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-gray">
        <NavbarPhoto
          language
          navClassName="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light"
          button={<Button />}
        />
      </header>

      <main className="content-wrapper">
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-19 pt-md-14 pb-md-22 text-center">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <div className="post-header">
                  <div className="post-category text-line">
                    <NextLink title="Identity" href="#" className="hover" />
                  </div>

                  <h1 className="display-1 mb-3">One of the project in a jewerly photography.</h1>
                  <p className="lead px-md-12 px-lg-12 px-xl-15 px-xxl-18">
                  Few photos of jewerly and accessories
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light wrapper-border">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col-12">
                <article className="mt-n21">
                  <FigureImage
                    width={1674}
                    height={1041}
                    src="/img/portfolio_cars/product_diary/jew-0007.jpeg"
                    className="rounded mb-8 mb-md-12"
                  />

                  <ProjectDetailsContent
                    title="About the Project"
                    content={`We create high quality jewerly photography for clients to use on various platforms such as amazon, shopify, wordpress, magento, square space, wix, bigcommerce, woocommerce, etc.`}
                    projectClient="Anna"
                    projectDate="010 June 2023"
                  />

                  <div className="row mt-5 gx-md-6 gy-6">
                    {images.map((item) => (
                      <div className="item col-md-6" key={item}>
                        <figure className="hover-scale rounded cursor-dark">
                          <a href={item} data-glightbox data-gallery="project-1">
                            <Image
                              width={960}
                              height={640}
                              src={item}
                              alt="demo"
                              style={{ width: '100%', height: 'auto' }}
                            />
                          </a>
                        </figure>
                      </div>
                    ))}
                  </div>
                  {/* <div className="row mt-5 gx-md-6 gy-6">
                    <Plyr
                      poster="/img/photos/pp2.jpg"
                      options={{
                        loadSprite: true,
                        clickToPlay: true,
                        quality: { default: 720, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240] }
                      }}
                      source={{ type: 'video', sources: [{ src: '6PfAEJIbm_A', provider: 'youtube' }] }}
                    />
                  </div> */}

                  <div className="row mt-8 mt-md-12">
                    <div className="col-md-10 offset-md-1 text-justify">
                      <h2 className="mb-4">Jewerly photo shoot</h2>
                      <p>
                      I create high quality jewerly photography for clients to use on various platforms such as amazon, shopify, wordpress, magento, square space, wix, bigcommerce, woocommerce, etc.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ========== navigation section ========== */}
        {/* <ProjectDetailsNavigation /> */}
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default ProjectDetails;
