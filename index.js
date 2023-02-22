const fs = require('fs-extra');

const originPath = "/tmp/aa.txt";
const destinationPath = "/tmp/aa1.txt";

fs.copy(originPath, destinationPath, { overwrite: true })
    .then(() => console.log('success!'))
    .catch(err => console.error(err))