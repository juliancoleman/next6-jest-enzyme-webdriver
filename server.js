const { createServer } = require("http");
const next = require('next');
const R = require("ramda");

const routes = require('./routes');

const filterInt = require("./helpers/filterInt");

const PORT = 3000;
const defaultPort = R.defaultTo(PORT);
const port = defaultPort(filterInt(process.env.PORT));

const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = routes.getRequestHandler(app);

function startServer() {
  const conn = createServer(handle);
  conn.listen({ port }, (err) => {
    if (err) { throw err; }
    console.info(`Server listening on port: ${port}`);
  });
}

function withStackTrace(err) {
  console.error(err.toString());

  if (err.stack) {
    console.error(err.stack);
  }

  process.exit(1);
}

app.prepare()
  .then(startServer)
  .catch(withStackTrace);
