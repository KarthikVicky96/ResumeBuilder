// Backend code
// This code is for Entry point and server setup

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Resume routes
const resumeRouter = require('./routes/resume');
app.use('/api/resume', resumeRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Backend Server code
