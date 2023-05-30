import { FC } from 'react';
import CountUp from 'react-countup';
import Image from 'next/image';

const Tiles3: FC = () => {
  return (
    <div className="row gx-md-5 gy-5">
      <div className="col-md-6">
        <figure className="rounded mt-md-10 position-relative">
          <Image src="/img/photos/g5.jpg" quality={50} width={375} height={375} alt="Contact image 1" />
        </figure>
      </div>

      <div className="col-md-6">
        <div className="row gx-md-5 gy-5">
          <div className="col-md-12 order-md-2">
            <figure className="rounded">
              <Image src="/img/photos/g6.jpg" quality={50} width={375} height={250} alt="Contact Image 2" />
            </figure>
          </div>

          <div className="col-md-10">
            <div className="card bg-pale-primary text-center">
              <div className="card-body py-11 counter-wrapper">
                <h3 className="counter text-nowrap">
                  <CountUp end={5000} suffix="+" />
                </h3>

                <p className="mb-0">Satisfied Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiles3;
