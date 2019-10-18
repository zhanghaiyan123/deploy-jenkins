var exec = require('child_process').exec;
//purge接口
const purgeFn = async () => {
    exec('sh ./request.sh', {
        stdio: 'inherit',
        // 仅在当前运行环境为 Windows 时，才使用 shell
        shell: process.platform === 'win32'
    }, function (err, stdout, stderr) {
        if (err) {
            console.log('err:', err);
        }
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
    });
}