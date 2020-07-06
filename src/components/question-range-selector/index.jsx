import React, { useEffect } from "react";

const QuestionRangeSelector = ({ handleChange, limit, range }) => {
    
  return (
    <div>
      <input
        type="range"
        value={range || limit}
        min="10"
        max={limit}
        step="1"
        onChange={(e) => handleChange(e)}
      />
      <span>{range || limit / 2}</span>
    </div>
  );
};

export default QuestionRangeSelector;
