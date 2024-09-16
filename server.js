const express = require('express');
const axios = require('axios');
const app = express();

// GitHub Raw URL base
const GITHUB_RAW_BASE_URL = 'https://raw.githubusercontent.com';

app.get('/image/:user/:repo/:branch/*', async (req, res) => {
  const { user, repo, branch } = req.params;
  const filePath = req.params[0]; // Capture the rest of the path

  // Construct the URL to the raw file
  const url = `${GITHUB_RAW_BASE_URL}/${user}/${repo}/${branch}/${filePath}`;

  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const contentType = response.headers['content-type'];
    res.set('Content-Type', contentType);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching the image');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
