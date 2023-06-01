import { FC, useState } from 'react';
import Switch from 'components/reuseable/Switch';
import NextLink from 'components/reuseable/links/NextLink';
import { PricingCard1 } from 'components/reuseable/pricing-cards';
// -------- data -------- //
import { pricingList1 } from 'data/herro';
import { url } from 'utils/urls';

const Pricing7: FC = () => {
  const [activeYearly, setActiveYearly] = useState(false);

  return (
    <div className="row gy-6 gy-lg-0 mb-10 mb-md-18">
      <div className="col-lg-4">
        <h2 className="display-4 mt-lg-18 mb-3">Our Pricing Examples</h2>
        <p className="lead fs-lg">
          We offer <span className="underline-3 style-3 green">great prices</span>, premium and quality photos for your
          business.
        </p>
        <p className="mb-5">
          Enjoy a <NextLink title="Our Service" href={url.services()} className="hover" /> and experience the full
          service.
        </p>

        <NextLink href={url.prices()} title="See All Prices" className="btn btn-primary rounded-pill mt-2" />
      </div>

      <div className="col-lg-7 offset-lg-1 pricing-wrapper">
        <div className="row gy-6 mt-5">
          {pricingList1.map((item, i) => (
            <div className={`col-md-6 ${i === 1 && 'popular'}`} key={i}>
              <PricingCard1 bulletBg {...item} activeYearly={activeYearly} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing7;
