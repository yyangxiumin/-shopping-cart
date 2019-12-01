// 实现页面购物车的小气泡
let arr = kits.loadData('cartLsitData');
let total = 0;
arr.forEach(e=>{
  total += e.number;
})
$('.count').text(total);