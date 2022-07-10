"use strict"
const desktopView = document.querySelector('.content_project_block_desktop');
const tabletView = document.querySelector('.content_project_block_tablet');
const phoneView = document.querySelector('.content_project_block_phone');
const desktopViewBtn = document.querySelector('.desktop_view');
const tabletViewBtn = document.querySelector('.tablet_view');
const phoneViewBtn = document.querySelector('.phone_view');


if (desktopViewBtn, tabletViewBtn, phoneViewBtn) {
  desktopViewBtn.addEventListener("click", function (e) {
    desktopView.classList.toggle('_active', true);
    desktopView.classList.toggle('_default', true);
    tabletView.classList.remove('_active');
    phoneView.classList.remove('_active');
  });
  tabletViewBtn.addEventListener("click", function (e) {
    desktopView.classList.remove('_active');
    desktopView.classList.toggle('_default', true);
    tabletView.classList.toggle('_active', true);
    phoneView.classList.remove('_active');
  });
  phoneViewBtn.addEventListener("click", function (e) {
    desktopView.classList.remove('_active');
    desktopView.classList.toggle('_default', true);
    tabletView.classList.remove('_active');
    phoneView.classList.toggle('_active', true);
  });
}

const btnSearch = document.querySelectorAll("#btn");

console.log(btnSearch);





