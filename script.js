
function addBenefit() {
  var input = document.getElementById('hobby-input');
  var text = input.value.trim();

  if (text === '') return;

  var li = document.createElement('li');
  li.innerHTML = text + ' <button onclick="deleteItem(this)">Delete</button>';

  document.getElementById('hobby-list').appendChild(li);

  input.value = '';
}


document.getElementById('hobby-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addBenefit();
  }
});

function deleteItem(btn) {
  btn.parentElement.remove();
}

function submitForm(e) {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  e.target.reset();
}

function updateClock() {
  var now = new Date();

  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var months = ['January','February','March','April','May','June',
                'July','August','September','October','November','December'];

  var day   = days[now.getDay()];
  var date  = String(now.getDate()).padStart(2, '0');
  var month = months[now.getMonth()];
  var year  = now.getFullYear();
  var hours = String(now.getHours()).padStart(2, '0');
  var mins  = String(now.getMinutes()).padStart(2, '0');
  var secs  = String(now.getSeconds()).padStart(2, '0');

  document.getElementById('clock').textContent =
    day + ', ' + date + ' ' + month + ' ' + year + '  ' + hours + ':' + mins + ':' + secs;
}

updateClock();
setInterval(updateClock, 1000);