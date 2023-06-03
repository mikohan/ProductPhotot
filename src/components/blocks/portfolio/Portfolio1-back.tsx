import { FC } from 'react';
import Image from 'next/image';
import Carousel from 'components/reuseable/Carousel';
// -------- data -------- //
import { portfolioList1 } from 'data/portfolio';
import Link from 'next/link';
import { url } from 'utils/urls';

const Portfolio1: FC = () => {
  const carouselBreakpoints = {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 }
  };

  return (
    <div className="container-fluid px-md-6">
      <div className="swiper-container blog grid-view mb-17 mb-md-19">
        <Carousel grabCursor breakpoints={carouselBreakpoints}>
          {portfolioList1.map((item) => (
            <figure className="rounded" key={item}>
              <Link href={url.portfolio()}>
                <Image width={900} height={650} src={item} alt="project" style={{ width: '100%', height: 'auto' }} />
              </Link>
            </figure>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Portfolio1;
