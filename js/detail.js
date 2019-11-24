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
let arr = kist.loaDat.location('cartListData');


})
