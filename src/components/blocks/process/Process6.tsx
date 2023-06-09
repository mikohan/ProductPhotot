import { FC, Fragment } from 'react';
// -------- data -------- //
import { processList2 } from 'data/herro';

const Process6: FC = () => {
  return (
    <Fragment>
      <h2 className="display-4 mb-3">How We Do It?</h2>
      <p className="lead fs-lg mb-8">
        We make your experience <span className="underline">stress-free</span> for you and will take care of whole
        process.
      </p>

      <div className="row gx-lg-8 gx-xl-12 gy-6 process-wrapper line">
        {processList2.map(({ no, title, subtitle }, i) => {
          const iconColor = i === 1 ? 'btn-primary' : 'btn-soft-primary';

          return (
            <div className="col-md-6 col-lg-3" key={no}>
              <span className={`icon btn btn-circle btn-lg pe-none mb-4 ${iconColor}`}>
                <span className="number">{no}</span>
              </span>

              <h4 className="mb-1">{title}</h4>
              <p>{subtitle}</p>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Process6;
