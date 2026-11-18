const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation?.classList.toggle('open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

// The EXE is published separately as a GitHub Release asset.
// Keep this download link pointed at the latest release.
const downloadButton = document.querySelector('#download-button');
if (downloadButton && !downloadButton.getAttribute('href')) {
  downloadButton.setAttribute(
    'href',
    'https://github.com/saidianstreet-code/QRBLauncher-Website/releases/latest/download/QRBLauncher.exe'
  );
}
