import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid';

function ProjectList({ projectItem }) {
  return (
    <div className="containerCards">
      {projectItem.map(({ img, category }) => (
        <img key={uuidv4()} src={img} alt={category} />
      ))}
    </div>
  );
}

ProjectList.propTypes = {
  projectItem: PropTypes.array.isRequired
}

export default ProjectList;

