const express = require('express');
const path = require('path');

const app = express();

/** Set the public folder as source for rendering static file */

app.use(express.static(path.join(__dirname, 'public')));

/** Send all requests to index.html */
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

/** Tell server to listen on the port set by the environment or use port 3000 */
app.listen(process.env.PORT || 3000);

module.exports = app;
