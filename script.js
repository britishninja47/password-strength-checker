const passwordInput = document.getElementById("password");
const indicator = document.getElementById("strength-indicator");

function evaluateStrength(password) {
  if (!password) {
    return { label: "", level: "none" };
  }

  let score = 0;

  // Core length checks
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;

  // Character variety checks
  if (/[a-z]/.test(password)) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  if (score <= 2) {
    return { label: "Weak password", level: "weak" };
  }

  if (score <= 4) {
    return { label: "Medium strength", level: "medium" };
  }

  return { label: "Strong password", level: "strong" };
}

function renderStrength() {
  const { label, level } = evaluateStrength(passwordInput.value);

  indicator.textContent = label;
  indicator.classList.remove("weak", "medium", "strong", "visible");

  if (level !== "none") {
    indicator.classList.add(level, "visible");
  }
}

passwordInput.addEventListener("input", renderStrength);
