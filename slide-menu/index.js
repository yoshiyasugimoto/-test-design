window.onload = () => {
  const btn = document.getElementById("btn");
  const nav = document.querySelector("nav");

  btn.addEventListener("click", () => {
    nav.classList.toggle("open-menu");
    console.log("test");
  });
};
