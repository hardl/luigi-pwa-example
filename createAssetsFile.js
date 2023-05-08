const { exec } = require("child_process");
let assetsStr = 'export const assets = [\n';

exec(`cd docs && find . -printf "'%p',\n"`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    assetsStr += stdout.replace(`'.',`, '');
    
    assetsStr += '\n];';
    console.log(assetsStr);
});