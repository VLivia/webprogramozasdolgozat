const officeList = document.getElementById('office-list');

async function fetchOffices() {
  try {
    const response = await fetch('https://p161-7ddfd-default-rtdb.europe-west1.firebasedatabase.app/offices.json');
    if (!response.ok) throw new Error('Hiba történt az adatok letöltésekor.');

    const data = await response.json();
    displayOffices(data);
  } catch (error) {
    officeList.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}

function displayOffices(offices) {
  if (!offices) {
    officeList.innerHTML = '<p>Nincsenek elérhető irodák.</p>';
    return;
  }

  officeList.innerHTML = ''; // kiürítjük az alap szöveget

  Object.values(offices).forEach(office => {
    const card = document.createElement('div');
    card.className = 'office-card';

    card.innerHTML = `
      <h2>${office.name}</h2>
      <p><strong>Cím:</strong> ${office.address}</p>
      <p><strong>Ár:</strong> ${office.price} Ft / hó</p>
      <p><strong>Alapterület:</strong> ${office.size} m²</p>
      <button class="rent-button">Bérlés</button>
    `;

    // Gomb működése (opcionális – pl. alert)
    card.querySelector('button').addEventListener('click', () => {
      alert(`Bérlés kezdeményezve: ${office.name}`);
    });

    officeList.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', fetchOffices);
