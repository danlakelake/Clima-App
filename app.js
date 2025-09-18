const API_KEY = '196c7ac1af1a29e1dc7a86eeed186d23'; // API key OpenWeather
const btn_search = document.getElementById('buscar');
const result = document.getElementById('resultado');
const btn_clear = document.getElementById('limpiar');

// Event listener para botón buscar
btn_search.addEventListener('click', () => {
  const city = document.getElementById('ciudad').value;
  console.log(city);
  if (city === '') {
    alert('Porfavor ingresa una ciudad');
    return;
  }
  getWeather(city);
});

// Función asincrona para obtener clima
async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Ciudad no encontrada');
    }
    const data = await response.json();
    showWeather(data);
  } catch (error) {
    result.innerHTML = '❌ ' + error.message;
  }
}

// Función mostrar clima
function showWeather(data) {
  const { name, main, weather } = data;
  result.innerHTML = `
        <h2 class="text-3xl font-bold text-blue-600 mb-3">${name}</h2>
        <p>🌡️ Temp: ${main.temp} °C</p>
        <p>☁️ Estado: ${weather[0].description}</p>
        <p>💧 Humedad: ${main.humidity}%</p>
    `;
}

// Función Limpiar input y resultado
btn_clear.addEventListener('click', () => {
  console.log('diste click en limpiar');
  document.getElementById('ciudad').value = ''; // Limpia input
  resultado.innerHTML = ''; // Limpia resultado
});
