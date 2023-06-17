import { NextPage } from 'next';
import { Fragment } from 'react';
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
import { company } from 'data/company-info';
import Button from 'components/elements/NavbarButton';
import { env } from 'process';

const projectList1 = [
  {
    id: 1,
    link: 'bmw-car-photos-project',
    category: 'CARS',
    title: 'BMW 530i M Sport',
    description: 'One of the our project BMW 5 series.',
    images: [
      {
        width: 960,
        height: 640,
        url: '/img/portfolio_cars/bmw_white_2018/002.jpg',
        tooltip: 'BMW White One',
        full: '/img/portfolio_cars/bmw_white_2018/002.jpg'
      },
      {
        width: 960,
        height: 640,
        url: '/img/portfolio_cars/bmw_white_2018/004.jpg',
        tooltip: 'BMW White Two',
        full: '/img/portfolio_cars/bmw_white_2018/004.jpg'
      },
      {
        width: 960,
        height: 640,
        url: '/img/portfolio_cars/bmw_white_2018/011.jpg',
        tooltip: 'BMW Whit Three',
        full: '/img/portfolio_cars/bmw_white_2018/011.jpg'
      }
    ]
  },
  {
    id: 2,
    link: 'colored-car-photography-project',
    category: 'CONCEPT',
    title: 'Vulputate Sollicitudin',
    description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
    images: [
      {
        width: 960,
        height: 640,
        url: '/img/portfolio_cars/bmw_colored/001.jpg',
        tooltip: 'Bmw light blue',
        full: '/img/portfolio_cars/bmw_colored/001.jpg'
      },
      {
        width: 960,
        height: 640,
        url: '/img/portfolio_cars/bmw_colored/002.jpg',
        full: '/img/portfolio_cars/bmw_colored/002.jpg',
        tooltip: 'BMW blue'
      },
      {
        width: 960,
        height: 640,
        url: '/img/portfolio_cars/bmw_colored/003.jpg',
        full: '/img/portfolio_cars/bmw_colored/003.jpg',
        tooltip: 'BMW Pink'
      }
    ]
  }
  // {
  //   id: 3,
  //   link: '#',
  //   category: 'STILL LIFE',
  //   title: 'Vulputate Sollicitudin',
  //   description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
  //   images: [
  //     {
  //       width: 900,
  //       height: 600,
  //       url: '/img/photos/cs7.jpg',
  //       tooltip: 'Purus Tellus Magna',
  //       full: '/img/photos/cs7-full.jpg'
  //     },
  //     {
  //       width: 900,
  //       height: 600,
  //       url: '/img/photos/cs8.jpg',
  //       full: '/img/photos/cs8-full.jpg',
  //       tooltip: 'Fusce Ipsum Vestibulum'
  //     },
  //     {
  //       width: 900,
  //       height: 633,
  //       url: '/img/photos/cs9.jpg',
  //       full: '/img/photos/cs9-full.jpg',
  //       tooltip: 'Condimentum Parturient Ligula'
  //     }
  //   ]
  // },
  // {
  //   id: 4,
  //   link: '#',
  //   category: 'WORKSHOP',
  //   title: 'Ornare Commodo Mollis',
  //   description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
  //   images: [
  //     {
  //       width: 900,
  //       height: 630,
  //       url: '/img/photos/cs10.jpg',
  //       tooltip: 'Purus Tellus Magna',
  //       full: '/img/photos/cs10-full.jpg'
  //     },
  //     {
  //       width: 900,
  //       height: 655,
  //       url: '/img/photos/cs11.jpg',
  //       full: '/img/photos/cs11-full.jpg',
  //       tooltip: 'Fusce Ipsum Vestibulum'
  //     },
  //     {
  //       width: 900,
  //       height: 630,
  //       url: '/img/photos/cs12.jpg',
  //       full: '/img/photos/cs12-full.jpg',
  //       tooltip: 'Condimentum Parturient Ligula'
  //     }
  //   ]
  // },
  // {
  //   id: 5,
  //   link: '#',
  //   category: 'TOOLS & TOYS',
  //   title: 'Porta Tortor Vulputate',
  //   description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
  //   images: [
  //     {
  //       width: 900,
  //       height: 600,
  //       url: '/img/photos/cs13.jpg',
  //       tooltip: 'Purus Tellus Magna',
  //       full: '/img/photos/cs13-full.jpg'
  //     },
  //     {
  //       width: 900,
  //       height: 600,
  //       url: '/img/photos/cs14.jpg',
  //       tooltip: 'Fusce Ipsum Vestibulum',
  //       full: '/img/photos/cs14-full.jpg'
  //     },
  //     {
  //       width: 900,
  //       height: 601,
  //       url: '/img/photos/cs15.jpg',
  //       full: '/img/photos/cs15-full.jpg',
  //       tooltip: 'Condimentum Parturient Ligula'
  //     }
  //   ]
  // }
];

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
        <title>{`Cars Photography Projects - ${company.companyName}`}</title>
        <meta
          name="description"
          content={`Cars Photography Services by our creative photo studio - ${company.companyName}`}
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
                  <h1 className="display-1 mb-1">Car Photography Service.</h1>
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
                  {projectList1.map((item) => (
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
