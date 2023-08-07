import PropTypes from 'prop-types';
import cn from "classnames";
import "../App.css";
import { v4 as uuidv4 } from 'uuid';

function Toolbar({ handleSelectFilter, filters, selected }) {
  return (
    <div className="toolbar">
      {["All", ...filters].map((filter) => (
        <button
          key={uuidv4()}
          className={cn({ "App-link": selected === filter })}
          onClick={() => handleSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

Toolbar.propTypes = {
  handleSelectFilter: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  selected: PropTypes.string.isRequired,
}

export default Toolbar;
