import React, { useState } from 'react';
import ResumeBuilder from './ResumeBuilder';

function App() {
  const [resumeData, setResumeData] = useState({});

  return (
    <div>
      <h1>Resume Builder Application</h1>
      <ResumeBuilder resumeData={resumeData} setResumeData={setResumeData} />
      {/* Other components and features */}
    </div>
  );
}

export default App;
// The file is the main for the application based code
