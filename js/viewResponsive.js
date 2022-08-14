"use strict"

const projects = document.querySelectorAll(".project_conteiner")

for (const project of projects) {
  console.log(project)

  const desktopView = project.querySelector(".content_project_block_desktop")
  const tabletView = project.querySelector(".content_project_block_tablet")
  const phoneView = project.querySelector(".content_project_block_phone")
  const desktopViewBtn = project.querySelector(".desktop_view")
  const tabletViewBtn = project.querySelector(".tablet_view")
  const phoneViewBtn = project.querySelector(".phone_view")

  if ((desktopViewBtn, tabletViewBtn, phoneViewBtn)) {
    desktopViewBtn.addEventListener("click", function (e) {
      desktopView.classList.toggle("_active", true)
      desktopView.classList.toggle("_default", true)
      tabletView.classList.remove("_active")
      phoneView.classList.remove("_active")
    })
    tabletViewBtn.addEventListener("click", function (e) {
      desktopView.classList.remove("_active")
      desktopView.classList.toggle("_default", true)
      tabletView.classList.toggle("_active", true)
      phoneView.classList.remove("_active")
    })
    phoneViewBtn.addEventListener("click", function (e) {
      desktopView.classList.remove("_active")
      desktopView.classList.toggle("_default", true)
      tabletView.classList.remove("_active")
      phoneView.classList.toggle("_active", true)
    })
  }
}






