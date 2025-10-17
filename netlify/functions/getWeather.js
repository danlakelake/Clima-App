// Función Netlify para obtener clima desde OpenWeather
exports.handler = async function (event) {
  try {
    // Extrae el parámetro 'city' de la solicitud
    const { city } = event.queryStringParameters;

    if (!city) {
      return {
        statusCode: 400, // Bad Request: falta ciudad
        body: JSON.stringify({ error: 'Falta el parámetro city' }),
      };
    }

    // Variable de entorno
    const API_KEY = process.env.OPENWEATHER_API_KEY;

    // Validación para API_KEY
    if (!API_KEY) {
      return {
        statusCode: 500, // Internal Server Error
        body: JSON.stringify({ error: 'Falta la clave de OpenWeather' }),
      };
    }

    // Fetch a endpoint Netlify
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Ciudad no encontrada');
    }

    const data = await response.json();

    return {
      statusCode: 200, // Respuesta Exitosa
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500, // Error de Servidor
      body: JSON.stringify({ error: err.message }),
    };
  }
};
