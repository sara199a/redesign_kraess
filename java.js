// Lav variablen "btn", der henviser til ".toggle-btn"
// Lav variablen "menu", der henviser til ".main-menu"
const btn = document.querySelector(".toggle-btn");
const menu = document.querySelector(".menu");

// Lav funktionen "toggleMenu()" med følgende funktionalitet
function toggleMenu() {
  // a) toggle klassen "shown" på menu vha. classList.toggle
  menu.classList.toggle("shown");
  let menuShown = menu.classList.contains("shown");
  // b) lav variablen "menuShown", som siger, at menu-variablen indeholder klassen "shown" via classList.contains("")

  // c) spørg om "menuShown" i if-sætningen nedenfor (=> if (menuShown)), og udskift teksten
  if (menuShown) {
    console.log(menuShown); // se i konsollen
    // sæt btn.textContent til "Luk", hvis menuShown er "true"
    btn.textContent = "Luk";
  } else {
    console.log(menuShown); // se i konsollen
    // sæt btn.textContent til "Menu", hvis menuShown er "false"
    btn.textContent = "Menu";
  }
  // "toggleMenu()" slutter her
}

// Tilføj et klik-event til "btn", der sætter toggleMenu-funktionen i gang
btn.addEventListener("click", toggleMenu);
