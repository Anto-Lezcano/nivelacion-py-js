const textArea = document.getElementById('text');
const card = document.getElementById('card');
const cardText = document.getElementById('cardText');
const colorBtn = document.getElementById('colorBtn');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('modalOverlay');
const btn = document.getElementById('Enter');


btn.addEventListener('click', function () {
  const userText = textArea.value.trim();
  if (userText) {
    cardText.textContent = userText;
    card.style.display = 'block';
    overlay.style.display = 'block';
  }
});

const colorSchemes = [
  { background: 'white', color: 'black' },
  { background: 'black', color: 'white' },
  { background: 'lightblue', color: 'red' }
];

let currentSchemeIndex = 0;

colorBtn.addEventListener('click', function () {
  const currentScheme = colorSchemes[currentSchemeIndex];
  card.style.backgroundColor = currentScheme.background;
  card.style.color = currentScheme.color;
  currentSchemeIndex = (currentSchemeIndex + 1) % colorSchemes.length;
});


closeBtn.addEventListener('click', function () {
  card.style.display = 'none';
  overlay.style.display = 'none'; 
});
