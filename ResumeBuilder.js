// This code is the main component for building the Resume

import React from 'react';

function ResumeBuilder({ resumeData, setResumeData }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setResumeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Resume Builder</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={resumeData.name || ''}
            onChange={handleInputChange}
          />
        </label>
        {/* Other input fields and sections */}
      </form>
      {/* Resume preview and customization */}
    </div>
  );
}

export default ResumeBuilder;


// The App resume builder
