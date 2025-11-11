(function() {
  const root = document.documentElement;
  const themeKey = 'fs_theme';
  const languageKey = 'fs_language';
  
  // Theme functionality
  const saved = localStorage.getItem(themeKey);
  if (saved === 'light' || saved === 'dark') {
    root.setAttribute('data-theme', saved);
  }

  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem(themeKey, next);
      toggle.setAttribute('aria-pressed', String(next === 'dark')); updateThemeToggleIcon();
    });
  }

  // Language switcher functionality
  const languageSwitcher = document.querySelector('.language-switcher');
  if (languageSwitcher) {
    const languageBtn = languageSwitcher.querySelector('.language-btn');
    const languageDropdown = languageSwitcher.querySelector('.language-dropdown');
    const languageOptions = languageSwitcher.querySelectorAll('.language-option');
    
    // Set saved language
    const savedLanguage = localStorage.getItem(languageKey) || 'en';
    setActiveLanguage(savedLanguage);
    
    // Toggle dropdown
    languageBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      languageDropdown.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      languageDropdown.classList.remove('show');
    });
    
    // Language selection
    languageOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = option.getAttribute('data-lang');
        changeLanguage(lang);
        languageDropdown.classList.remove('show');
      });
    });
  }
  
  function setActiveLanguage(lang) {
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
      if (option.getAttribute('data-lang') === lang) {
        option.classList.add('active');
        // Update button text
        const languageBtn = document.querySelector('.language-btn');
        if (languageBtn) {
          const flag = lang === 'en' ? 'ðŸ‡ºðŸ‡¸' : 'ðŸ‡«ðŸ‡·';
          const text = lang === 'en' ? 'English' : 'FranÃ§ais';
          languageBtn.innerHTML = `<span class="flag">${flag}</span><span>${text}</span>`;
        }
      } else {
        option.classList.remove('active');
      }
    });
  }
  
  function changeLanguage(lang) {
    localStorage.setItem(languageKey, lang);
    setActiveLanguage(lang);
    
    // Get current page path
    const currentPath = window.location.pathname;
    const isPrivacyPage = currentPath.includes('privacy-policy');
    
    // Redirect to appropriate language version
    if (lang === 'fr') {
      if (isPrivacyPage) {
        window.location.href = '/fr/privacy-policy.html';
      } else {
        window.location.href = '/fr/';
      }
    } else {
      if (isPrivacyPage) {
        window.location.href = '/privacy-policy.html';
      } else {
        window.location.href = '/';
      }
    }
  }

  // Year update
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}  function updateThemeToggleIcon() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    toggle.textContent = isDark ? 'â˜€ï¸' : 'ðŸŒ™';
  }
  updateThemeToggleIcon();
})();
