$(function(){

// 获取id
let id = location.search.substring(4);
// phoneData.forEach(e=>{
//     if(e.pID == id){
//     console.log(e);
//     }
// })
// 简单点的方法
// let target = phoneData.find((e,i)=>{
    let target = phoneData.find(e=>{
        //这里要写 “ == ”
        return e.pID == id
})
// 改名字
$('.sku-name').text(target.name);
// 改图片
$('.preview-img > img').attr('src',target.imgSrc);//我们改的是src属性所以要用“ attr ”修改
// 修改价格
$('.summary-price em').text(target.price);

// 点击加入购物车
$('.addshopcar').on('click',function(){
    let number = $('.choose-number').val();
    // console.log(number);
    if(number.trim().length === 0 || isNaN(number) || parseInt(number) <= 0){
        alert('请正确输入');
    }
    let arr = kits.loadData('cartLsitData');//
    // console.log(arr);
    let exist = arr.find(e=>{ //exist(存在)
        return e.pID == id;
    });
 // 为了保证数量是数字，需要把数量先转换为数字
 number = parseInt(number);
 if(exist) {
    exist.number += number;
 } else {
    let obj = {
        pID: target.pID,
        name: target.name,
        imgSrc: target.imgSrc,
        price: target.price,
        number: number,
    }
    arr.push(obj);
 }
 kits.svData('cartLsitData',arr);
 location.href = './cart.html';
})




})
