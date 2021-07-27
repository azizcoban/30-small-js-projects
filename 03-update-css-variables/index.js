const inputs = document.querySelectorAll('.controls input');

const handleUpdate = (e) => {
  const currentEl = e.target;
  const suffix = currentEl.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${currentEl.name}`, currentEl.value + suffix);
}

inputs.forEach((input) => input.addEventListener('change', (e) => handleUpdate(e)));
inputs.forEach((input) => input.addEventListener('mousemove', (e) => handleUpdate(e)));