// Initialize Mermaid diagram rendering with dark mode support
if (typeof mermaid !== 'undefined') {
  // Detect dark mode
  const isDarkMode = () => {
    return document.documentElement.getAttribute('data-bs-theme') === 'dark' ||
           window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  // Initialize Mermaid with appropriate theme
  const initMermaid = () => {
    const darkMode = isDarkMode();
    mermaid.initialize({
      startOnLoad: true,
      theme: darkMode ? 'dark' : 'default',
      securityLevel: 'loose',
      darkMode: darkMode,
      // Mermaid dark mode settings
      themeVariables: darkMode ? {
        primaryColor: '#282a36',
        primaryBorderColor: '#89b4fa',
        background: '#1e1e2e',
        mainBkg: '#44475a',
        secondBkg: '#44475a',
        tertiaryBkg: '#44475a',
        textColor: '#f8f9fa',
        lineColor: '#89b4fa',
        primaryTextColor: '#f8f9fa',
        darkmode: true,
      } : {}
    });
  };

  // Initial render on page load
  initMermaid();

  // Re-render on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function() {
    mermaid.contentLoaded();
  });

  // Observer for dynamically added content (live reload support)
  if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver(function(mutations) {
      mermaid.contentLoaded();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  // Re-initialize on theme change
  const themeObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === 'data-bs-theme') {
        initMermaid();
        mermaid.contentLoaded();
      }
    });
  });

  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-bs-theme']
  });
}

