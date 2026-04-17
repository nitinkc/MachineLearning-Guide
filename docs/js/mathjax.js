// Configure MathJax for math rendering with dark theme support
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true
  },
  svg: {
    fontCache: 'global',
    scale: 1.2,
    externalLocation: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5'
  },
  chtml: {
    scale: 1
  },
  startup: {
    pageReady() {
      // Apply dark mode styles to equations
      applyDarkModeToMath();
      return MathJax.typesetPromise().catch(err => console.log(err));
    }
  }
};

// Function to apply dark mode styling to MathJax SVG equations
function applyDarkModeToMath() {
  document.querySelectorAll('mjx-container').forEach(container => {
    // Add data attribute to identify dark mode containers
    if (document.documentElement.getAttribute('data-bs-theme') === 'dark') {
      container.setAttribute('data-dark-mode', 'true');
    }
  });
}

