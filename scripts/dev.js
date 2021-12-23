const fs = require('fs');
const execa = require('execa');

const target = 'monitor'

build(target)
async function build(target){
    //console.log(target);
    await execa('rollup',['-cw','--environment',`TARGET:${target}`], //cw中的w是监控文件变化
    {
        stdio: 'inherit'
      });//当子进程打包的信息共享给父进程
}