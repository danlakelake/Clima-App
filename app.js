const API_KEY = '196c7ac1af1a29e1dc7a86eeed186d23'; // <- API key OpenWeather
const btn_search = document.getElementById('buscar');
const result = document.getElementById('resultado');

// Event Listener para botón buscar
btn_search.addEventListener('click', () => {
  const city = document.getElementById('ciudad').value;
  console.log(city);
  if (city === '') {
    alert('Porfavor ingresa una ciudad');
  }
});
