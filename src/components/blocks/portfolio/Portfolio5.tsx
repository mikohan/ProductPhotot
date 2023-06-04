import { FC } from 'react';
import useIsotope from 'hooks/useIsotope';
import { portfolioList4 } from 'data/herro';
import Image from 'next/image';
import useLightBox from 'hooks/useLightBox';

const Portfolio5: FC = () => {
  const { filterKey, handleFilterKeyChange } = useIsotope();
  useLightBox();
  // filter list
  const filterList = [
    { id: 1, title: 'All', value: '*' },
    { id: 2, title: 'Products', value: '.product' },
    { id: 3, title: 'Foods', value: '.food' },
    { id: 4, title: 'Estate', value: '.estate' },
    { id: 5, title: 'Videos', value: '.video' }
  ];

  return (
    <section id="portfolio">
      <div className="wrapper bg-gray">
        <div className="container py-15 py-md-17 text-center">
          <div className="row">
            <div className="col-lg-10 col-xl-8 col-xxl-7 mx-auto mb-8">
              <h2 className="display-5 mb-3">Look at Our Portfolio</h2>
              <p className="lead fs-lg">Photography is our passion and We love to turn ideas into beautiful things.</p>
            </div>
          </div>

          <div className="grid grid-view projects-masonry">
            <div className="isotope-filter filter mb-10">
              <ul>
                {filterList.map(({ id, title, value }) => (
                  <li key={id}>
                    <a
                      onClick={handleFilterKeyChange(value)}
                      className={`filter-item ${filterKey === value ? 'active' : ''}`}
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="row gx-md-6 gy-6 isotope">
              {portfolioList4.map(({ category, id, image, title, width, height }) => (
                <div className={`project item col-md-6 col-xl-4 ${category}`} key={id}>
                  <figure className="overlay overlay-1 rounded">
                    {/* {`/img/photos/${image}-full.jpg`} */}
                    <a href={`/img/photos/${image}-full.jpg`} data-glightbox data-gallery="portfolio5">
                      <Image quality={55} src={`/img/photos/${image}.jpg`} width={width} height={height} alt={title} />
                      <span className="bg" />
                    </a>
                    <div className="glightbox-desc caption1">
                      <p className="mb-0">This div will be used as the image description. HTML is supported.</p>
                    </div>
                    <figcaption>
                      <h5 className="from-top mb-0">{title}</h5>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio5;
