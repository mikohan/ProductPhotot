import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';
import { url } from 'utils/urls';
import Image from 'next/image';

const Contact4: FC = () => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-10 mb-md-14 align-items-center">
      <div className="col-lg-7">
        <figure>
          <Image alt="contact" className="w-auto" src="/img/illustrations/i5.png" width={800} height={590} />
        </figure>
      </div>

      <div className="col-lg-5">
        <h2 className="fs-16 text-uppercase text-muted mb-3 ">Let’s Talk</h2>
        <h3 className="display-4 mb-5 ">Let's make something great together. We are trusted by over 500+ clients.</h3>

        <p>
          If you need a reliable creative studio for your project just contact us and you will receive the best service.
          Test us and we fulfill your expectations.
        </p>

        <NextLink title="Join Us" href={url.contact()} className="btn btn-primary rounded-pill mt-2" />
      </div>
    </div>
  );
};

export default Contact4;
