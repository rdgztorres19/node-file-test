const fs = require('fs-extra');
const fsNative = require('fs');

const originPath = "/srv/sorba_devices/carbon.super/d0c2e200-b21a-11ed-8ef6-3b7647862b6f/files/sql.sql";
const destinationPath = "/tmp/sql.sql";

try {
    fsNative.copyFileSync(originPath, destinationPath, fsNative.constants.COPYFILE_EXCL);
} catch (error) {
    console.log(error);
}


/*fs.copy(originPath, destinationPath, { overwrite: true })
    .then(() => console.log('success!'))
    .catch(err => console.error(err))*/

//export PATH=$PATH:/layers/heroku_nodejs-engine/dist/bin/:/layers/heroku_nodejs-npm/npm/bin/