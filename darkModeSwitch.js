window.addEventListener('load', (event) => {
  const checkbox = document.getElementById('dark-mode-switch')

  checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  })
});
