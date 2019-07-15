const express = require('express');
const getScreenshots = require('./getScreenshots');
require('dotenv').config();
const bodyParser = require('body-parser');

// Creates express app
const app = express();
// The port used for Express server
const PORT = 3000;
// Start the server
app.listen(PORT || 3000)

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/', async (req, res) => {
  // Get webpage URL from command
  const location = req.body.text;
  console.log(`location: ${location}`);

  try {
    // Get image
    const webpagePng = await getScreenshots(location);
    // I need to return the files from this request somehow
    console.log(webpagePng);

    // Create form data
    // let data = {
    //   token: process.env.SLACK_AUTH_TOKEN,
    //   title: "Image",
    //   filename: "bliss.png",
    //   filetype: "auto",
    //   channels: "#general",
    //   file: fs.createReadStream('bliss.png'),
    // };

    // Upload file to slack
    // request.post({
    //   url: 'https://slack.com/api/files.upload',
    //   formData: data
    // },
    // function (error, response, body) {
    //   console.log(body)
    //   res.json()
    // });

  } catch(error) {
    console.error(error);
  }

});
  