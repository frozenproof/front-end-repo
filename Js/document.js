 // Lấy tất cả các menu items và sections
 const menuItems = document.querySelectorAll('.sub-menu li');
 const sections = document.querySelectorAll('.right-main');
 const menuActive= document.querySelectorAll('.left-sibar li');
 const subMenuActive=document.querySelectorAll('.sub-menu');
 // làm hiệu ứng xuất hiện cho submenu
 menuActive.forEach(function(item){
    item.addEventListener('click',function(){
      menuActive.forEach(function(item){
        item.classList.remove('active');
      })
      subMenuActive.forEach(function(item){
        item.classList.remove('sibar-li_active');
      })
      this.classList.add('active');
      this.classList.add('sibar-li_active');
    })
 });
 // Lặp qua các menu items và thêm event listener để khi click vào sẽ chuyển đến phần tử tương ứng
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

