$(function(){
// 读取本地数据中的数据
let arr = kits.loadData('cartLsitData');
// 先准备一个空字符串
let html = ``;
// 遍历数组 生成指定的结构
arr.forEach(e => {
    html += `<div class="item" data-id="${e.pID}">
    <div class="row">
      <div class="cell col-1 row">
        <div class="cell col-1">
          <input type="checkbox" class="item-ck" ${e.isChecked ? 'checked' : ''}>
        </div>
        <div class="cell col-4">
          <img src="${e.imgSrc}" alt="">
        </div>
      </div>
      <div class="cell col-4 row">
        <div class="item-name">${e.name}</div>
      </div>
      <div class="cell col-1 tc lh70">
        <span>￥</span>
        <em class="price">${e.price}</em>
      </div>
      <div class="cell col-1 tc lh70">
        <div class="item-count">
          <a href="javascript:void(0);" class="reduce fl ">-</a>
          <input autocomplete="off" type="text" class="number fl" value="${e.number}">
          <a href="javascript:void(0);" class="add fl">+</a>
        </div>
      </div>
      <div class="cell col-1 tc lh70">
        <span>￥</span>
        <em class="computed">${e.number * e.price}</em>
      </div>
      <div class="cell col-1">
        <a href="javascript:void(0);" class="item-del">从购物车中移除</a>
      </div>
    </div>
  </div>`;
})
$('.item-list').append(html);
// 如果arr里面的数据不是全都勾选 需要把全选的勾选去掉
let noCkAll = arr.find(e => {
  //  return e.isChecked === false;
  return !e.isChecked;
})
if(noCkAll){
    $('.pick-all').prop('checked',false);
}

// 判断购物车如果不为空 就把空空如也隐藏 把全选显现
if(arr.length != 0){
    $('.empty-tip').hide();
    $('.cart-header').show();
    $('.total-of').show();
}
// 全选和点选
$('.pick-all').on('click',function(){
    let status = $(this).prop('checked');
    $('.pick-all').prop('checked',status);
    $('.item-ck').prop('checked',status);
    // 先把本地数据都勾选
    arr.forEach(e=>{
        e.isChecked = status;
    })
    // 重新存入本地
    kits.svData('cartLsitData',arr);
    // 点击时也需要把数据更新
    calcTotal();
})
// 点选是动态生成的所以我们利用委托注册
$('.item-list').on('click','.item-ck',function(){
    // 如果勾选的个数和总个数一致 = 全选
    let ckall = $('.item-ck').length === $('.item-ck:checked').length;
    $('.pick-all').prop('checked',ckall);
    // 点选同时 需改改多选框在本地数据里的勾选状态
    // 根据id到本地修改 isChecked 属性
    let pID = $(this).parents('.item').attr('data-id');
    // 获取当前是否选中
    let isChecked = $(this).prop('checked');
    arr.forEach(e=>{
      if(e.pID == pID){
        e.isChecked = isChecked;
      }
    });
    // 把数据更新到本地数据
    kits.svData('cartLsitData',arr);
    // 点选时也要计算总价格和总件数
    calcTotal();
})
// 封装一个计算总价格和总件数的函数
function calcTotal(){
  //  计算总价格和总件数
  let totalCount = 0; // 总件数
  let totalMoney = 0; // 总价格
  arr.forEach(e=>{
    if(e.isChecked){
      totalCount += e.number;
      totalMoney += e.number * e.price;
    }
  })
  // 把总价格和总数量更新到页面
  $('.selected').text(totalCount);
  $('.total-money').text(totalMoney);
}
// 需要一开始就计算一次
calcTotal();


})