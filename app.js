
const button = document.querySelector('.input-button');

button.addEventListener('click', () => {
  const APIKey = '5395ba703aa0be771f2d271930ebf86a';
  const city = document.querySelector('.header input').value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(res => res.json()).then(json => {
      if (json.cod == '404') {
        return;
      }
      const { temp, humidity } = json.main;

    });
});