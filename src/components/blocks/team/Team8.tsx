import { FC } from 'react';
// -------- custom component -------- //
import Carousel from 'components/reuseable/Carousel';
import carouselBreakpoints from 'utils/carouselBreakpoints';
import NextLink from 'components/reuseable/links/NextLink';
import { TeamCard2 } from 'components/reuseable/team-cards';
import Button from 'components/elements/NavbarButton';
// -------- data -------- //
import { teams } from 'data/herro';

const Team8: FC = () => {
  return (
    <section className="wrapper bg-light">
      <div className="container py-14 py-md-16">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-4">
            <h2 className="fs-15 text-uppercase text-line text-primary text-center mb-3">Meet the Team</h2>
            <h3 className="display-5 mb-5">Save your time and money by choosing our professional team.</h3>
            <p>Photography and Videography is our passion.</p>
            <Button />
          </div>

          <div className="col-lg-8">
            <div className="swiper-container text-center mb-6">
              <Carousel grabCursor navigation={false} breakpoints={carouselBreakpoints}>
                {teams.map((team) => (
                  <TeamCard2 key={team.id} {...team} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team8;
