const fs = require('fs-extra');

const originPath = "/srv/sorba_devices/carbon.super/d0c2e200-b21a-11ed-8ef6-3b7647862b6f/files/sql.sql";
const destinationPath = "/srv/sorba_devices/carbon.super/6c8da630-b2c4-11ed-b7ca-795edfaf7fd0/files/sql.sql";

fs.copy(originPath, destinationPath, { overwrite: true })
    .then(() => console.log('success!'))
    .catch(err => console.error(err))