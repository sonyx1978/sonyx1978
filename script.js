const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 700px)');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.hidden = mobile.matches;
}

menuButton.hidden = false;
closeMenu();
mobile.addEventListener('change', closeMenu);

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.hidden = !open;
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a') && mobile.matches) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobile.matches && !navigation.hidden) {
    closeMenu();
    menuButton.focus();
  }
});
