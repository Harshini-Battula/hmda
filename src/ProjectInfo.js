// src/ProjectInfo.js

import React, { useState, useEffect } from 'react';

const ProjectInfo = () => {
  const [projectType, setProjectType] = useState('');
  const [extent, setExtent] = useState('');
  const [other1, setOther1] = useState('');
  const [other2, setOther2] = useState('');
  const [info, setInfo] = useState(null);

  const handleProjectTypeChange = (e) => {
    const selectedType = e.target.value;
    setProjectType(selectedType);

    switch (selectedType) {
      case 'Building Permission':
        setExtent('residential buildings with height less than 18mts');
        break;
      case 'Occupancy Certificate':
        setExtent('Not Applicable');
        break;
      case 'Layout with Housing Under Gated Community (With Compound Wall)':
      case 'Layout with housing without Gated and Community':
      case 'Layout Open Plot':
        setExtent('about 1 acre');
        break;
      default:
        setExtent('');
    }
  };

  const handleFetch = () => {
    // Simulate fetching data based on the selected options
    setInfo(`Fetching data for:
      Project Type: ${projectType}
      Extent: ${extent}
      Other 1: ${other1}
      Other 2: ${other2}`);
  };

  return (
    <div>
      <h1>Project Info</h1>
      <div>
        <label>Project Type: </label>
        <select value={projectType} onChange={handleProjectTypeChange}>
          <option value="">Select Project Type</option>
          <option value="Building Permission">Building Permission</option>
          <option value="Occupancy Certificate">Occupancy Certificate</option>
          <option value="Layout with Housing Under Gated Community (With Compound Wall)">Layout with Housing Under Gated Community (With Compound Wall)</option>
          <option value="Layout with housing without Gated and Community">Layout with housing without Gated and Community</option>
          <option value="Layout Open Plot">Layout Open Plot</option>
        </select>
      </div>
      <div>
        <label>Extent: </label>
        {projectType === 'Building Permission' ? (
          <select value={extent} onChange={(e) => setExtent(e.target.value)}>
            <option value="residential buildings with height less than 18mts">residential buildings with height less than 18mts</option>
            <option value="residential buildings with height greater than 18mts">residential buildings with height greater than 18mts</option>
            <option value="Commercial buildings with height less than 15mts">Commercial buildings with height less than 15mts</option>
            <option value="Commercial buildings with height greater than 15mts">Commercial buildings with height greater than 15mts</option>
          </select>
        ) : (
          <input type="text" value={extent} readOnly />
        )}
      </div>
      <div>
        <label>Other 1: </label>
        <input type="text" value={other1} onChange={(e) => setOther1(e.target.value)} />
      </div>
      <div>
        <label>Other 2: </label>
        <input type="text" value={other2} onChange={(e) => setOther2(e.target.value)} />
      </div>
      <button onClick={handleFetch}>Fetch</button>
      {info && <div>{info}</div>}
    </div>
  );
};

export default ProjectInfo;
