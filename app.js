const API_KEY = '196c7ac1af1a29e1dc7a86eeed186d23'; // <- API key OpenWeather
const btn_search = document.getElementById('buscar');
const result = document.getElementById('resultado');

// Event listener para botón buscar
btn_search.addEventListener('click', () => {
  const city = document.getElementById('ciudad').value;
  console.log(city);
  if (city === '') {
    alert('Porfavor ingresa una ciudad');
    return;
  }
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
  } catch (error) {
    result.innerHTML = '❌ ' + error.message;
  }
}
