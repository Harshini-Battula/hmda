// src/ProjectInfo.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const FieldContainer = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const InfoContainer = styled.div`
  margin-top: 20px;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
`;

const ProjectInfo = () => {
  const [projectType, setProjectType] = useState('');
  const [extent, setExtent] = useState('');
  const [height, setHeight] = useState('');
  const [usage, setUsage] = useState('');
  const [info, setInfo] = useState([]);

  const handleProjectTypeChange = (e) => {
    const selectedType = e.target.value;
    setProjectType(selectedType);

    switch (selectedType) {
      case 'Building Permission':
        setExtent('');
        setHeight('');
        setUsage('');
        break;
      case 'Occupancy Certificate':
        setExtent('Not Applicable');
        setHeight('No height');
        setUsage('Residential');
        break;
      case 'Layout with Housing Under Gated Community (With Compound Wall)':
      case 'Layout with housing without Gated and Community':
      case 'Layout Open Plot':
        setExtent('about 1 acre');
        setHeight('No height');
        setUsage('Residential');
        break;
      default:
        setExtent('');
        setHeight('');
        setUsage('');
    }
  };
  const handleFetch = () => {
    let data;
    if (projectType === 'Building Permission') {
      switch (extent) {
        case '<4000':
          data = [
            'License copy of Architect',
            'Latest market value certificate per Sq.Yrd issued by the concerned sub-registrar office. (For TDR Certificate)',
            'Common Affidavit / Self Certification View Sample Format',
            'Builder License',
            'Report of Soil Test/Report of Geo-Technical Investigation issued after personal inspection by Institution / Consultant empaneled with licensed by the local authority.',
            'Structural designs and drawings prepared duly taking the soil bearing capacity into consideration and certified by qualified Structural - Engineer / Consultant Firm empaneled with / licensed by the local authority. The Structural Engineer / Consultant Firm is held responsible for defect in the design.',
            'TDR Document',
            'TDR Agreement',
            'Copy of previous Sanctioned plan / BPS / BRS plan.',
            'Copy of building Permit order / BPS / BRS order.',
            'Sale Deed Document',
            'Link Documents',
            'Mutation Document'
          ];
          break;
        case '>4000':
          data = [
            'Copy of the Sanctioned Plan',
            'Copy of the Building Permit Order',
            'Copy of the Completed Building Plan showing the changes if any to Approved Building Plan along with a statement of deviations',
            'Photographs of constructed building showing setbacks on four sides, elevation and roof level.',
            'Land value certificate issued by the Revenue Department (if deviations are made to Sanctioned plan).',
            'Building Completion Certificate'
          ];
          break;
        default:
          data = ['No data available for the selected extent.'];
      }
    } else {
      switch (projectType) {
        case 'Layout Open Plot':
            data = [
                'Registered Gift Deed executed in favour of local authority duly handing over the Parks/Open Spaces, Roads, Utilities to the Local Body',
                'Additional Conditions of Draft layout letter. Supporting documents in proof of fulfilment of additional conditions in Proceeding Letter of Draft Layout.',
                'An undertaking by Owner/Architect has to be submitted on Rs.100/- Non Judicial Stamp Paper in compliance with the approved Draft Layout vide File No.--------on compliance of all parameters.',
                'Undertaking for Final Layout',
                'Copy of Draft Layout Plan along with proceedings',
                'Registered Gift Deed executed in favour of the Local Authority, of the concerned Municipality, handing over the road effected area due to proposed Master Plan road along with confirmation letter from the Local Authority',
                'Registered Gift Deed executed in favour of competent authority duly handing over the area provided for capitalization towards provision of Master Plan facilities.',
                'Photographs showing Development Works in Layouts with date & time.(Layout Internal Roads)',
                'Photographs showing Development Works in Layouts with date & time.(Approach Road)',
                'Photographs showing Development Works in Layouts with date & time.(Footpaths)',
                'Photographs showing Development Works in Layouts with date & time.(Avenue Plantation)',
                'Photographs showing Development Works in Layouts with date & time.(Street Lights)',
                'Photographs showing Development Works in Layouts with date & time.(Rain Water Harvesting Pits)',
                'Photographs showing Development Works in Layouts with date & time.(Water Pipe Lines/ Water Connections)',
                'Photographs showing Development Works in Layouts with date & time.(Over Head Tank/SUMP/Borewell/Sump with Pneumatic Pumping System)',
                'Photographs showing Development Works in Layouts with date & time.(Connectivity of portable/ drinking water supply pipeline to the main trunk/connecting pipeline under Mission Bhagiratha etc.,)',
                'Photographs showing Development Works in Layouts with date & time.(Septic Tank/STP)',
                'Photographs showing Development Works in Layouts with date & time.(Greenery in Parks/Plantation/Landscaping)',
                'Photographs showing Development Works in Layouts with date & time.(Ornamental Compound walls with Grills for Open Spaces, and Utilities)',
                'Photographs showing Development Works in Layouts with date & time.(Cycling Tracks HMDA)',
                'Photographs showing Development Works in Layouts with date & time.(Transformer)',
                'Photographs showing Development Works in Layouts with date & time.(Underground Ducting of all utilities and Services (Electrical/optical fibers,etc) HMDA, GHMC)',
                'Photographs showing Development Works in Layouts with date & time.(storm water Drainage System)',
                'Photographs showing Development Works in Layouts with date & time.(Under Ground Drainage/Manholes)',
                'Photographs showing Development Works in Layouts with date & time.(Solid Waste Dumping Unit/ Bio Compost Unit HMDA)',
                'Photographs showing Development Works in Layouts with date & time.(Garbage Disposal Area HMDA)',
                'Registration Certificate issued by Telangana State Real Estate Regulatory Authority (TSRERA).'
              ];
          break;
        case 'Layout with housing without Gated and Community':
            data = [
                'Common Affidavit / Self Certification',
                'Latest market value certificate per Sq.Yrd issued by the concerned sub- registrar office.(For TDR Certificate )',
                'Location Plan of the site showing surrounding developments i.e., roads, electricity lines HTL/LTL, existing drainage & sewerage etc, within 500 meters radius of the site.',
                'NALA conversion certificate issued under Telangana Agricultural Land Act, 2006',
                'Revenue Sketch/ Revenue sketch issued by the concerned Tahsildar duly incorporating the site under reference in the survey number (if site is part of survey number)',
                'Copy of registered sale deed / Registered Development Agreement of sale cum General Power of Attorney. Special power of Attorney for obtaining permissions from HMDA/ Local Authority/ Pattadar Pass Book / Title deed issued by Revenue authorities.',
                'Khasara Pahanie for the year 1954/55 and latest year issued by Mandal Revenue Officer/Thasildar.',
                'Link Documents.',
                'Latest Encumbrance certificate.'
              ];
          break;
        case 'Layout with Housing Under Gated Community (With Compound Wall)':
            data = [
                'Registered Gift Deed executed in favour of local authority duly handing over the Parks/Open Spaces, Roads, Utilities to the Local Body',
                'Additional Conditions of Draft layout letter. Supporting documents in proof of fulfilment of additional conditions in Proceeding Letter of Draft Layout.',
                'An undertaking by Owner/Architect has to be submitted on Rs.100/- Non Judicial Stamp Paper in compliance with the approved Draft Layout vide File No.--------on compliance of all parameters. View Sample Format',
                'Undertaking for Final Layout',
                'Copy of Draft Layout Plan along with proceedings',
                'Registered Gift Deed executed in favour of the Local Authority, of the concerned Municipality, handing over the road effected area due to proposed Master Plan road along with confirmation letter from the Local Authority',
                'Registered Gift Deed executed in favour of competent authority duly handing over the area provided for capitalization towards provision of Master Plan facilities.',
                'Photographs showing Development Works in Layouts with date & time.(Layout Internal Roads)',
                'Photographs showing Development Works in Layouts with date & time.(Approach Road)',
                'Photographs showing Development Works in Layouts with date & time.(Footpaths)',
                'Photographs showing Development Works in Layouts with date & time.(Avenue Plantation)',
                'Photographs showing Development Works in Layouts with date & time.(Street Lights)',
                'Photographs showing Development Works in Layouts with date & time.(Rain Water Harvesting Pits)',
                'Photographs showing Development Works in Layouts with date & time.(Water Pipe Lines/ Water Connections)',
                'Photographs showing Development Works in Layouts with date & time.(Over Head Tank/SUMP/Borewell/Sump with Pneumatic Pumping System)',
                'Photographs showing Development Works in Layouts with date & time.(Connectivity of portable/ drinking water supply pipeline to the main trunk/connecting pipeline under Mission Bhagiratha etc.,)',
                'Photographs showing Development Works in Layouts with date & time.(Septic Tank/STP)',
                'Photographs showing Development Works in Layouts with date & time.(Greenery in Parks/Plantation/Landscaping)',
                'Photographs showing Development Works in Layouts with date & time.(Ornamental Compound walls with Grills for Open Spaces, and Utilities)',
                'Photographs showing Development Works in Layouts with date & time.(Cycling Tracks HMDA)',
                'Photographs showing Development Works in Layouts with date & time.(Transformer)',
                'Photographs showing Development Works in Layouts with date & time.(Underground Ducting of all utilities and Services (Electrical/optical fibers,etc) HMDA, GHMC)',
                'Photographs showing Development Works in Layouts with date & time.(storm water Drainage System)',
                'Photographs showing Development Works in Layouts with date & time.(Under Ground Drainage/Manholes)',
                'Photographs showing Development Works in Layouts with date & time.(Solid Waste Dumping Unit/ Bio Compost Unit HMDA)',
                'Photographs showing Development Works in Layouts with date & time.(Garbage Disposal Area HMDA)'
              ];
          break;
        case 'Occupancy Certificate':
            data = [
                'Copy of the Sanctioned Plan',
                'Copy of the Building Permit Order',
                'Copy of the Completed Building Plan showing the changes if any to Approved Building Plan along with a statement of deviations',
                'Photographs of constructed building showing setbacks on four sides, elevation and roof level.',
                'Land value certificate issued by the Revenue Department (if deviations are made to Sanctioned plan).',
                'Building Completion Certificate'
              ];
          break;
        default:
          data = ['No data available for the selected project type.'];
      }
    }
  
    setInfo(data);
  };
  

  return (
    <Container>
      <Title>Project Info</Title>
      <FieldContainer>
        <Label>Project Type: </Label>
        <Select value={projectType} onChange={handleProjectTypeChange}>
          <option value=""disabled>Select Project Type</option>
          <option value="Building Permission">Building Permission</option>
          <option value="Occupancy Certificate">Occupancy Certificate</option>
          <option value="Layout with Housing Under Gated Community (With Compound Wall)">Layout with Housing Under Gated Community (With Compound Wall)</option>
          <option value="Layout with housing without Gated and Community">Layout with housing without Gated and Community</option>
          <option value="Layout Open Plot">Layout Open Plot</option>
        </Select>
      </FieldContainer>
      <FieldContainer>
        <Label>Extent: </Label>
        {projectType === 'Building Permission' ? (
          <Select value={extent} onChange={(e) => setExtent(e.target.value)}>
            <option value="" disabled>Select Extent</option>
            <option value="<4000">Less than 4000</option>
            <option value=">4000">Greater than 4000</option>


          </Select>
        ) : (
          <Input type="text" value={extent} readOnly />
        )}
      </FieldContainer>
      <FieldContainer>
        <Label>Height of the building: </Label>
        <Input type="text" value={height} readOnly />
      </FieldContainer>
      <FieldContainer>
        <Label>Usage of the proposal: </Label>
        <Input type="text" value={usage} readOnly />
      </FieldContainer>
      <Button onClick={handleFetch}>Fetch</Button>
      {info.length > 0 && (
        <InfoContainer>
          <h2>DOCUMENTS REQUIRED</h2>
          <List>
            {info.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </List>
        </InfoContainer>
      )}
    </Container>
  );
};

export default ProjectInfo;
