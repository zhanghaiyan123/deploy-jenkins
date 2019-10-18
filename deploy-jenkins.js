const fetch = require('node-fetch');
const URL = require('url');

const JENKINS_USER = 'xxxx';//jenkins登录用户，点击右上角用户名-》Configure-》API Token：show api token
const JENKINS_TOKEN = 'xxxx';

const JENKINS_STATUS_CODE = {
    SUCCESS: 201,
    INVALID_AUTH: 401,
    FORBIDDEN: 403
};

const API_URL_OPTIONS = {
    protocol: 'http',
    auth: `${JENKINS_USER}:${JENKINS_TOKEN}`,
    hostname: 'xxxx',//jenkins域名
    pathname: '/job/xx/buildWithParameters'//xx是jenkins任务名
};

const params = {
    token: 'xx', // 这个token需要与jenkins的 Build Triggers中一致，加了这个参数后就不会在jenkins中显示启动用户了
    xx: 'xxx'//与jenkins中This build is parameterized 的params一致
};
module.exports = {
    doRequest: async () => {
        const url = URL.format(
            Object.assign({}, API_URL_OPTIONS, {
                query: params
            })
        );
        let result = null;
        try {
            console.log(`Begin to request with url: `, url);
            result = await fetch(url, { method: 'post' });
        } catch (err) {
            throw Error(
                `Failed to invoke doRequest method with errors: ${JSON.stringify(
                    err
                )}`
            );
        }
        if (result && result.status == JENKINS_STATUS_CODE.SUCCESS) {
            console.log(
                `Successfully requested to jenkins, with response: `,
                result.statusText
            );
        } else {
            console.error(
                `Failed to request to jenkins, with response: `,
                result && result.statusText
            );
        }
        return result;
    }
}
