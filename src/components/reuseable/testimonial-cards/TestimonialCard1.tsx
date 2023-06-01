import { FC } from 'react';
import Image from 'next/image';
import { url } from 'utils/urls';

// =================================================
type TestimonialCard1Props = {
  title: string;
  imageUrl: string;
  width: number;
  height: number;
};
// =================================================

const TestimonialCard1: FC<TestimonialCard1Props> = (props) => {
  const { title, imageUrl, width, height } = props;

  return (
    <div className="card shadow-lg">
      <div className="card-body">
        <figure className="itooltip itooltip-light hover-scale rounded" title={title}>
          <a href={url.portfolio()} data-glightbox={`title: ${title}`} data-gallery="project-2">
            <Image alt={title} src={imageUrl} width={width} height={height} style={{ width: '100%', height: 'auto' }} />
          </a>
        </figure>
      </div>
    </div>
  );
};

export default TestimonialCard1;
