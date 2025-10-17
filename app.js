// Variables Globales
const btn_search = document.getElementById('buscar');
const result = document.getElementById('resultado');
const btn_clear = document.getElementById('limpiar');

// Listener Botón Search
btn_search.addEventListener('click', () => {
  const city = document.getElementById('ciudad').value.trim();
  if (!city) {
    alert('Por favor ingresa una ciudad');
    return;
  }
  getWeather(city);
});

// Función para obtener clima desde la función Netlify
async function getWeather(city) {
  try {
    const response = await fetch(`/.netlify/functions/getWeather?city=${encodeURIComponent(city)}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Error al obtener el clima');
    }

    showWeather(data);
  } catch (error) {
    result.innerHTML = '❌ ' + error.message;
  }
}

// Función para mostrar Clima
function showWeather(data) {
  const { name, main, weather } = data;
  result.innerHTML = `
    <h2 class="text-3xl font-bold text-blue-600 mb-3">${name}</h2>
    <p>🌡️ Temp: ${main.temp} °C</p>
    <p>☁️ Estado: ${weather[0].description}</p>
    <p>💧 Humedad: ${main.humidity}%</p>
  `;
}

// Limpia input y resultado
btn_clear.addEventListener('click', () => {
  document.getElementById('ciudad').value = '';
  result.innerHTML = '';
});
