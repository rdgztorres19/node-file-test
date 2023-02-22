const fs = require('fs-extra');

const originPath = "/tmp/aa.txt";
const destinationPath = "/srv/aa.txt";

fs.copy(originPath, destinationPath, { overwrite: true })
    .then(() => console.log('success!'))
    .catch(err => console.error(err))

//export PATH=$PATH:/layers/heroku_nodejs-engine/dist/bin/:/layers/heroku_nodejs-npm/npm/bin/