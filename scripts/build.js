const fs = require('fs');
const execa = require('execa');

const targets = fs.readdirSync('packages').filter(f=>{
    if(!fs.statSync(`packages/${f}`).isDirectory()){
        return false;
    }
    return true;
});
console.log(targets);

async function build(target){
    console.log(target);
    await execa('rollup',['-c','--environment',`TARGET:${target}`],
    {stdio:'inherit'});//当子进程打包的信息共享给父进程
}

function runParallel(targets,iteratorFn){
    const res = [];
    for(const item of targets){
        const p = iteratorFn(item);
        res.push(p);
    }
    return Promise.all(res)
}

runParallel(targets,build) 