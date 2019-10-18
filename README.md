## node或请求触发jenkins的方法

## 几种调起jenkins的方法

#前提：
需要在jenkins的 configuration ->Build Triggers中选中Trigger builds remotely (e.g., from scripts)，
然后填写Authentication Token，这个值就是在调用jenkins中传的token参数
#1、shell命令调用，如exec.js	
注意点：1.1、window上用exec 调shell，需要在exec配置shell: process.platform === 'win32'	
1.2、如果将服务放到linux上，若执行sh ./xxx.sh出现：“Syntax error: “(” unexpected” 
那么在linux系统执行sudo dpkg-reconfigure dash
再选择项中选No，搞定了`	
#2、直接调用jenkins如deploy-jenkins.js
注意点：首选需要在jenkins的 Build Triggers中一致
