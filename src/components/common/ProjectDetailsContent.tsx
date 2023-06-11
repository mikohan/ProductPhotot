import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';

// =======================================================
type ProjectDetailsContentProps = {
  title: string;
  titleClass?: string;
  contentRowClass?: string;
  content?: string;
  projectDate?: string;
  projectClient?: string;
};
// =======================================================

const ProjectDetailsContent: FC<ProjectDetailsContentProps> = ({
  title,
  contentRowClass = 'row gx-0',
  titleClass = 'display-6 mb-4',
  content,
  projectClient,
  projectDate
}) => {
  return (
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <h2 className={titleClass}>{title}</h2>

        <div className={contentRowClass}>
          <div className="col-md-9 text-justify">
            <p>{content}</p>
          </div>

          <div className="col-md-2 ms-auto">
            <ul className="list-unstyled">
              <li>
                <h5 className="mb-1">Date</h5>
                <p>{projectDate}</p>
              </li>

              <li>
                <h5 className="mb-1">Client Name</h5>
                <p>{projectClient}</p>
              </li>
            </ul>

            {/* <NextLink title="See Project" href="#" className="more hover" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsContent;
