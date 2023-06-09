import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';
import { TestimonialCard1 } from 'components/reuseable/testimonial-cards';
// -------- data -------- //
import { testimonialList1 } from 'data/herro';
import { url } from 'utils/urls';

const Testimonial1: FC = () => {
  return (
    <section className="wrapper bg-gradient-reverse-primary">
      <div className="container py-14 py-md-18">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-7">
            <div className="row gx-md-5 gy-5">
              {testimonialList1.map((item, i) => (
                <div className={`col-md-6 ${item.columnClasses}`} key={i}>
                  <TestimonialCard1 {...item} />
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5">
            <h2 className="fs-16 text-uppercase text-muted mb-3 mt-lg-n6">Why us?</h2>
            <h3 className="display-4 mb-5">We are in business more than 20 years and we understand business needs.</h3>
            <p>
              We guarantee the best service we can provide for you. If for some reason you won't like the result of our
              work - we will refund you 100% of your money. Without asking.
            </p>
            <NextLink href={url.contact()} title="Contact Us" className="btn btn-primary rounded-pill mt-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial1;
