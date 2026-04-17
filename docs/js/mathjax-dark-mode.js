// Handle MathJax dark mode styling
document.addEventListener('DOMContentLoaded', function() {

  // Function to style math equations for dark mode
  function styleMathForDarkMode() {
    const isDarkMode = document.documentElement.getAttribute('data-bs-theme') === 'dark';

    document.querySelectorAll('mjx-container').forEach(container => {
      const svg = container.querySelector('svg');
      if (svg && isDarkMode) {
        // Style the SVG for dark mode
        svg.style.backgroundColor = 'transparent';
        svg.style.filter = 'invert(1) hue-rotate(180deg) brightness(1.3) contrast(1.2)';

        // Also style all text elements
        svg.querySelectorAll('text, tspan').forEach(text => {
          text.style.fill = 'white';
          text.style.stroke = 'none';
        });
      } else if (svg) {
        // Light mode - reset
        svg.style.filter = 'none';
      }
    });
  }

  // Initial styling
  setTimeout(styleMathForDarkMode, 100);
  setTimeout(styleMathForDarkMode, 500);

  // Watch for theme changes
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === 'data-bs-theme') {
        // Re-style math when theme changes
        styleMathForDarkMode();

        // Also re-render with MathJax if available
        if (window.MathJax && window.MathJax.typesetPromise) {
          setTimeout(function() {
            window.MathJax.typesetPromise().catch(err => console.log(err));
          }, 200);
        }
      }
    });
  });

  // Observe the html element for theme attribute changes
  observer.observe(document.documentElement, { attributes: true });

  // Handle theme toggle buttons
  document.addEventListener('change', function(e) {
    if (e.target && (e.target.id === 'theme-toggle' || e.target.classList.contains('theme-toggle'))) {
      setTimeout(styleMathForDarkMode, 100);
    }
  });

  // Also observe MutationObserver for new math being added to DOM
  const contentObserver = new MutationObserver(function(mutations) {
    let hasMathJax = false;
    mutations.forEach(function(mutation) {
      if (mutation.addedNodes.length) {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1 && (node.tagName === 'MJX-CONTAINER' || node.querySelector('mjx-container'))) {
            hasMathJax = true;
          }
        });
      }
    });
    if (hasMathJax) {
      setTimeout(styleMathForDarkMode, 50);
    }
  });

  // Observe the main content area for new math
  const contentArea = document.querySelector('main') || document.querySelector('article') || document.body;
  contentObserver.observe(contentArea, { childList: true, subtree: true });
});

