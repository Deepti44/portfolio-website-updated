// 1. Add hobby benefit on button click
function addHobbyBenefit() {
  const input = document.getElementById('hobby-input');
  const text = input.value.trim();
  if (text === '') return;

  const list = document.getElementById('hobby-list');
  const li = document.createElement('li');
  li.innerHTML = `${text} <button class="delete-btn" onclick="deleteItem(this)">Delete</button>`;
  list.appendChild(li);
  input.value = '';
}

// Allow pressing Enter to add a benefit
document.getElementById('hobby-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') addHobbyBenefit();
});

// 2. Delete a list item
function deleteItem(btn) {
  btn.parentElement.remove();
}

// 3. Contact form alert on submission
function handleFormSubmit(e) {
  e.preventDefault();
  alert('Thank you! Your message has been submitted successfully.');
  e.target.reset();
}

// 4. Dynamic footer - show current date and time
function updateDateTime() {
  const now = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  const day = days[now.getDay()];
  const dd = String(now.getDate()).padStart(2, '0');
  const month = months[now.getMonth()];
  const yyyy = now.getFullYear();
  const HH = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');

  document.getElementById('footer-datetime').textContent =
    `${day}, ${dd} ${month} ${yyyy}, ${HH}:${mm}:${ss}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);