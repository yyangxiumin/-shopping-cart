var kits = {};

/**
 * @description //该方法是用于求随机整数的
 * @param { number } n //随机数的下限
 * @param { number } m //随机数的上限
 * @returns number
 */
kits.randomInt = function(n,m){
    return Math.floor(Math.random(m - n + 1) + n);
}
kits.loadData = function(key){
    let json = localStorage.getItem(key);
    // let arr;
    // if(json == null){
    //     arr = [];
    // }else{
    //     arr = JSON.parse(json);
    // }
    // 利用三运表达式简化
    // arr = json == null ? [] : JSON.parse(json);
    // return arr;
    // 利用短路运算进行简化
    return JSON.parse(json) || [];
}
/**
 * @description 把复杂数据转换为json格式存储到本地数据里面的封装
 * @param { string } key 
 * @param { Array || Object } data 
 */
kits.svData = function(key,data){
    let json = JSON.stringify(data);
    localStorage.setItem(key,json);
 
}