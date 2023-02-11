// const fromServer = '{"username":"gamal","age":20}';
// const toJs = JSON.parse(fromServer);
// console.log(toJs);
// toJs.age = 22;
// const toServer = JSON.stringify(toJs);
// console.log(toServer);

const myPromise = new Promise((resolveFun, rejectFun) => {
    let connect = false;
    if (connect){
        resolveFun("connection established");
    }else{
        rejectFun(Error("connection failed"));
    }
});
console.log(myPromise);
myPromise.then(
    (resolveVal) => console.log(`Good ${resolveVal}`),
    (rejectVal) => console.log(`Bad ${rejectVal}`)
)
myPromise.then(
    () => {
        console.log(3 * 2);
    },
    () => console.log("connection failed")
)