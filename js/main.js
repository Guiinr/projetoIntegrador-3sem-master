const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".container .letter-s", {
  duration: 1000,
  delay: 1000,
});
ScrollReveal().reveal(".container img", {
  duration: 1000,
  delay: 1500,
});
ScrollReveal().reveal(".container .text__left", {
  ...scrollRevealOption,
  origin: "right",
  delay: 2000,
});
ScrollReveal().reveal(".container .text__right", {
  ...scrollRevealOption,
  origin: "left",
  delay: 2000,
});
ScrollReveal().reveal(".container .explore", {
  duration: 1000,
  delay: 2500,
});
ScrollReveal().reveal(".container h5", {
  duration: 1000,
  interval: 500,
  delay: 3000,
});
ScrollReveal().reveal(".container .catalog", {
  duration: 1000,
  delay: 5000,
});
ScrollReveal().reveal(".container .print", {
  duration: 1000,
  delay: 5500,
});
ScrollReveal().reveal(".footer p", {
  duration: 1000,
  delay: 7000,
});

// Sidebar functionality
const loginIcon = document.querySelector('a[href="login.html"]');
const sidebar = document.getElementById('sidebar');
const closeSidebarBtn = document.getElementById('close-sidebar');

// Abre a sidebar ao clicar no ícone de login
loginIcon.addEventListener('click', (e) => {
  e.preventDefault(); // Evita o comportamento padrão do link
  sidebar.classList.add('open');
});

// Fecha a sidebar ao clicar no botão de fechar
closeSidebarBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
});

// Fecha a sidebar ao clicar fora dela
document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && !loginIcon.contains(e.target)) {
    sidebar.classList.remove('open');
  }
});