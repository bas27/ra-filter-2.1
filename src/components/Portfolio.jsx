import { useState } from 'react';
import Toolbar from './Toolbar'
import ProjectList from './ProjectList'
import { data } from '../data.js'


const Portfolio = () => {

  const filters = new Set(data.map(({ category }) => category));
  const [selected, setSelected] = useState("All");
  const projectsToRender =
    selected === "All"
      ? data
      : data.filter(({ category }) => category === selected);

  const handleSelectFilter = (filter) => setSelected(filter);

    return (
      <div className="container">
        <Toolbar
          selected={selected}
          filters={filters}
          handleSelectFilter={handleSelectFilter}
        />
        <ProjectList projectItem={projectsToRender} />
      </div>
    );
  };

  export default Portfolio