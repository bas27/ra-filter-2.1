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

export default Toolbar;
