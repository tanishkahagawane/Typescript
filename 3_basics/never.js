// function tryReturn(){
// }
// console.log(tryReturn())  //undefined
function apiError(msg, code) {
    throw function (message, apiCode) {
        return ;
    };
}
console.log(apiError("Server side error", 500));
