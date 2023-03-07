 // Lấy tất cả các menu items và sections
let menu_Btn=document.querySelector('#menu-btn');
let navbar=document.querySelector('.nav');
menu_Btn.onclick=()=>{
    menu_Btn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
// const menuActives= document.querySelectorAll('.left-sibar>li');
// const subMenuActives=document.querySelectorAll('.sub-menu');
// for(var i=0;i<menuActives.length;i++){
//   menuActives[i].addEventListener('click',function(){
//     menuActives.forEach(function(menuActive){
//       menuActive.classList.remove('active');
//     })
//     subMenuActives.forEach(function(subMenuActive){
//       subMenuActive.classList.remove('active');
//     })
//     this.classList.add('active');
//     subMenuActives[i].classList.add('active');
//   })
// }
// làm hiệu ứng xuất hiện cho submenu
//  menuActives[0].classList.add('active');
//  subMenuActives[0].classList.add('active');
//  menuActives.forEach(function(menuActive){
//     menuActive.addEventListener('click',function(){
//       menuActives.forEach(function(menuActive){
//         menuActive.classList.remove('active');
//       })
//       subMenuActives.forEach(function(subMenuActive){
//         subMenuActive.classList.remove('active');
//       })
//       // Thêm class "active" vào menu item được click và section tương ứng
//      const target = this.getAttribute('data-target');
//      const section = document.getElementById(target);
//      this.classList.add('active');
//      section.classList.add('active');
//     })
//  });
 // Lặp qua các menu items và thêm event listener để khi click vào sẽ chuyển đến phần tử tương ứng
 const menuItems = document.querySelectorAll('.sub-menu li');
 const sections = document.querySelectorAll('.right-main');
 menuItems.forEach(function(item) {
   item.addEventListener('click', function() {
     // Loại bỏ class "active" khỏi tất cả các menu items và sections
     menuItems.forEach(function(item) {
       item.classList.remove('active');
     });  
     sections.forEach(function(section) {
       section.classList.remove('active');
     });
 
     // Thêm class "active" vào menu item được click và section tương ứng
     const target = this.getAttribute('data-target');
     const section = document.getElementById(target);
     this.classList.add('active');
     section.classList.add('active');
   });
 });
 
 // Mặc định hiển thị section đầu tiên
 sections[0].classList.add('active');
 menuItems[0].classList.add('active');
 const menuSubItems=document.querySelectorAll('.right-tableOfContent li');
 menuSubItems.forEach(function(menuSubItem) {
    menuSubItem.addEventListener('click', function() {
      // Loại bỏ class "active" khỏi tất cả các menu items và sections
      menuSubItems.forEach(function(menuSubItem) {
        menuSubItem.classList.remove('menuSubItem_active');
      });
      // Thêm class "active" vào menu item được click và section tương ứng
      this.classList.add('menuSubItem_active');
    });
  });

