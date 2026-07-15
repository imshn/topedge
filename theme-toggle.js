// Dark/Light Theme Toggle
(function() {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('theme') || 'light';

  html.setAttribute('data-theme', savedTheme);

  // Create toggle button
  const toggle = document.createElement('button');
  toggle.id = 'theme-toggle';
  toggle.setAttribute('aria-label', 'Toggle dark/light theme');
  toggle.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';
  toggle.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 10000;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  toggle.addEventListener('mouseover', () => {
    toggle.style.transform = 'scale(1.1)';
    toggle.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
  });

  toggle.addEventListener('mouseout', () => {
    toggle.style.transform = 'scale(1)';
    toggle.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
  });

  toggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    toggle.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
  });

  document.body.appendChild(toggle);
})();
