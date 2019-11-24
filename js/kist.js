let kist = {};

/**
 * @description //该方法是用于求随机整数的
 * @param { number } n //随机数的下限
 * @param { number } m //随机数的上限
 * @returns number
 */
kist.randomInt = function(n,m){
    return Math.floor(Math.random(m-n+1) + n);
}
kist.loaDat = function(key){
    let json = localStorage.getItem(key);
    let arr;
 //    if(json === null){
 //        arr = []
 //    } else {
 //        arr = JSON.parse(json)
 //    }
 //  利用三元表达式简化
    // arr = json === null ? [] : JSON.parse(json);
    let arr = JSON.parse(json) || [];
    // return arr;

}