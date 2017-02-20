const express = require('express');
const expressJWT = require('express-jwt');
const port    = process.env.PORT || 3000;
const app     = express();
const dest    = `${__dirname}/public`;

app.use(express.static(dest));

app.use('/api', expressJWT({ secret: secret })
  .unless({
    path: [
      { url: '/api/login', methods: ['POST'] },
      { url: '/api/register', methods: ['POST'] }
    ]
  }));

app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));

app.listen(port, () => console.log(`Express has started on port: ${port}`));
