import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';
import { url } from 'utils/urls';
import Image from 'next/image';

const CTA10: FC = () => {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container py-14 py-md-16">
        <div className="row mb-8">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="fs-16 text-uppercase text-primary mb-3">Get Instant Quote Now</h2>
            <h3 className="display-4 mb-0">
              If you need more than 50 photos or just have some sweet ideas that you don’t see here, let’s discuss a
              custom project!
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 mx-auto">
            <div className="d-flex justify-content-center">
              <NextLink href={url.contact()} title="Get Started" className="btn btn-primary rounded mx-1" />
              <NextLink href={url.contact()} title="Free Trial" className="btn btn-green rounded mx-1" />
            </div>

            {/* <form action="#">
              <div className="form-floating input-group">
                <input type="url" className="form-control border-0" placeholder="Enter Website URL" id="analyze" />
                <label htmlFor="analyze">Enter Website URL</label>
                <button className="btn btn-primary" type="button">
                  Analyze
                </button>
              </div>
            </form> */}
          </div>
        </div>
      </div>

      <figure>
        <Image width={1502} height={118} src="/img/photos/clouds.png" alt="Decorative cloud" />
      </figure>
    </section>
  );
};

export default CTA10;
