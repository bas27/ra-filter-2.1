import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line react/prop-types
const ProjectList = ({ projectItem }) => {
  return (
    <div className="containerCards">
      {projectItem.map(({ img, category }) => (
        <img key={uuidv4()} src={img} alt={category} />
      ))}
    </div>
  );
};

export default ProjectList;