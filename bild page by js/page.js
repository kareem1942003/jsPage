// create fun to creat ele

let create = (el) => document.createElement(`${el}`);

let header = create("header");
let logo = create("h2");
let menu = create("ul");
let content = create("div");
let footer = create("footer");

// class name

header.className = "website-head";
logo.className = "logo";
menu.className = "menu";
content.className = "content";
footer.className = "footer";

// add to page

header.append(logo);
header.append(menu);
document.body.append(header);
document.body.append(content);
document.body.append(footer);

// loop

for (let i = 1; i <= 15; i++) {
  if (i <= 4) {
    let menuList = create("li");
    menuList.className = `menu-list-${i} `;
    menu.append(menuList);
  }
  let prodBox = create("div");
  let prodNum = create("span");
  prodBox.className = "product";
  prodBox.textContent = "Product";
  prodNum.textContent = `${i}`;
  prodBox.prepend(prodNum);
  content.append(prodBox);

  if (i % 2 == 1) {
    console.log(prodBox);
    prodBox.style.cssText =
      "color:rgb(0,0,0); padding:20px; background-color:rgb(35,169,110); border: 1px solid rgb(221, 221, 221); width:calc((100% - 40px)/ 3); border-radius:0.5rem; box-sizing:border-box; text-align: center;";
  }
  // product style
  if (i % 2 == 0) {
    prodBox.style.cssText =
      "color:rgb(136,136,136); padding:20px; background-color:white; border: 1px solid rgb(221, 221, 221); width:calc((100% - 40px)/ 3); border-radius:0.5rem; box-sizing:border-box; text-align: center;";
  }
  prodNum.style.cssText =
    "display:block; color:black; font-size:35px; margin-bottom:20px";
}

// add text

logo.textContent = "Kareem";
document.querySelector(".menu-list-1").textContent = "Home";
document.querySelector(".menu-list-2").textContent = "About";
document.querySelector(".menu-list-3").textContent = "Service";
document.querySelector(".menu-list-4").textContent = "Contact";
footer.textContent = "Copyright 2023";

// website style

document.body.style.cssText =
  "margine:0; font-family: Tahoma, Arial; background-color:rgb(236,236,236)";
header.style.cssText =
  "display:flex; align-items:center; justify-content:space-between; padding:10px; background-color:white";
menu.style.cssText =
  "display:flex; justify-content:space-between; gap:15px; list-style:none;";
logo.style.cssText = "color:rgb(35,169,110);";
content.style.cssText =
  "display:flex; flex-wrap:wrap; gap: 20px; padding:20px; justify-content:center; box-sizing:border-box;";
footer.style.cssText =
  "text-align:center; background-color:rgb(35,169,110); padding:20px; color:white;";
