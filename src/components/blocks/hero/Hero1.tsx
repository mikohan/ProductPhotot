import { FC } from 'react';
import Image from 'next/image';
import { herroPhoto } from 'data/herro';

const Hero1: FC = () => {
  return (
    <section className="wrapper bg-gradient-primary">
      <div className="container pt-10 pt-md-14 pb-8 text-center">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-7">
            <figure>
              <Image
                alt="hero"
                className="w-auto"
                src="/img/illustrations/i2.png"
                width={800}
                height={538}
                // srcSet="/img/illustrations/i2@2x.png 2x"
              />
            </figure>
          </div>

          <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start">
            <h1 className="display-1 mb-5 mx-md-n5 mx-lg-0">{herroPhoto.h1}</h1>
            <p className="lead fs-lg mb-7">{herroPhoto.subheader}</p>
            <a className="btn btn-primary rounded-pill me-2">{herroPhoto.button}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
