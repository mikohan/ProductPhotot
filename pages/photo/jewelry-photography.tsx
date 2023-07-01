import { NextPage } from 'next';
import { Fragment, useEffect } from 'react';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
// -------- custom component -------- //
import { NavbarPhoto } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import { ProjectCard1 } from 'components/reuseable/project-cards';
// -------- custom hook -------- //
import useIsotope from 'hooks/useIsotope';
import useLightBox from 'hooks/useLightBox';
import useTooltip from 'hooks/useTooltip';
// -------- data -------- //
import { jewelryPhotographyProjects, projectList1 } from 'data/project';
import { company } from 'data/company-info';
import Button from 'components/elements/NavbarButton';

const Projects: NextPage = () => {
  // used for masonry layout
  useIsotope();
  // used for lightbox
  useLightBox();
  // added tooltip library
  useTooltip();

  return (
    <Fragment>
      <Head>
        <title>{`Jewelry Photography Services - ${company.companyName}`}</title>
        <meta
          name="description"
          content={`Jewelry Photography & General Ecommers product photography - ${company.companyName}`}
        />
      </Head>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-gray">
        <NavbarPhoto language button={<Button />} />
      </header>

      <main className="content-wrapper">
        {/* ========== title section ========== */}
        <section className="section-frame-back overflow-hidden">
          <div className="wrapper bg-gray">
            <div className="container py-13 py-md-17 text-center">
              <div className="row">
                <div className="col-lg-10 col-xxl-8 mx-auto">
                  <h1 className="display-1 mb-1">Jewelry Photography</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== projects section ========== */}
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="row mt-6">
              <div className="col-xl-10 mx-auto">
                <div className="projects-tiles">
                  {jewelryPhotographyProjects.map((item) => (
                    <ProjectCard1 {...item} key={item.id} />
                  ))}
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

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (!process.env.showPage) {
    return {
      notFound: true
    };
  }

  return {
    props: {}
  };
};
export default Projects;
