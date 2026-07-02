const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

const detailButtons = document.querySelectorAll(".details-btn");
const toast = document.getElementById("toast");

detailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!toast) return;

    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 1800);
  });
});

const MAKE_WEBHOOK_URL = "https://hook.eu2.make.com/여기에_본인_URL";

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    const btn = form.querySelector('button');

    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
      submittedAt: new Date().toISOString(),
      page: location.href
    };

    btn.disabled = true;
    status.textContent = '전송 중...';
    status.style.color = '#555';

    try {
      const res = await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        status.textContent = '문의가 정상적으로 전송되었습니다. 감사합니다!';
        status.style.color = 'green';
        form.reset();
      } else {
        throw new Error('bad status ' + res.status);
      }
    } catch (err) {
      status.textContent = '전송에 실패했습니다. 잠시 후 다시 시도해주세요.';
      status.style.color = 'red';
    } finally {
      btn.disabled = false;
    }
  });
}
