async function moduleProject4() {

  // 👇 WORK WORK BELOW THIS LINE 👇
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  let descriptions = [
    ["Sunny", "☀️"],
    ["Cloudy", "☁️"],
    ["Rainy", "🌧️"],
    ["Thunderstorm", "⛈️"],
    ["Snowy", "❄️"],
    ["Partly Cloudy", "⛅️"]
  ]

  let weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  // 👉 Tasks 1 - 5 go here
  const weatherEL = document.querySelector("div#weatherWidget")
  weatherEL.style.display = "none"

  const comboBox = document.querySelector("#citySelect")
  comboBox.addEventListener("change", () => {
    // console.log(comboBox.value);
    comboBox.disabled = true
    weatherEL.style.display = "none"
    const fetchingP = document.querySelector("p.info")
    fetchingP.textContent = `Fetching weather data...`
    axios.get(`http://localhost:3003/api/weather?city=${comboBox.value}`)
      .then(res => {
        fetchingP.textContent = ""
        comboBox.disabled = false
        weatherEL.style.display = "block"

        const apparentTempEl = document.querySelector("div#apparentTemp > :nth-child(2)")
        apparentTempEl.textContent = `${res.data.current.apparent_temperature}°`

          const weatherEmoji = document.querySelector("#todayDescription")
          if (res.data.current.weather_description === 'Sunny') {
            let emoji =  descriptions.find(arr => arr[0] === 'Sunny')
            weatherEmoji.textContent = emoji[1]
          } else if (res.data.current.weather_description === 'Cloudy') {
            let emoji =  descriptions.find(arr => arr[0] === 'Cloudy')
            weatherEmoji.textContent = emoji[1]
          } else if (res.data.current.weather_description === 'Rainy') {
            let emoji =  descriptions.find(arr => arr[0] === 'Rainy')
            weatherEmoji.textContent = emoji[1]
          } else if (res.data.current.weather_description === 'Thunderstorm') {
            let emoji =  descriptions.find(arr => arr[0] === 'Thunderstorm')
            weatherEmoji.textContent = emoji[1]
          } else if (res.data.current.weather_description === 'Snowy') {
            let emoji =  descriptions.find(arr => arr[0] === 'Snowy')
            weatherEmoji.textContent = emoji[1]
          } else if (res.data.current.weather_description === 'Partly Cloudy') {
            let emoji =  descriptions.find(arr => arr[0] === 'Partly Cloudy')
            weatherEmoji.textContent = emoji[1]
          }

          const tsMinMax = document.querySelector("#todayStats > :nth-child(1)")
          tsMinMax.textContent = `${res.data.current.temperature_min}°/${res.data.current.temperature_max}°`
          
          const tsPrecipitation = document.querySelector("#todayStats > :nth-child(2)")
          tsPrecipitation.textContent = `Precipitation: ${res.data.current.precipitation_probability *100}%`

          const tsHumidity = document.querySelector("#todayStats > :nth-child(3)")
          tsHumidity.textContent = `Humidity: ${res.data.current.humidity}%`

          const tsWind = document.querySelector("#todayStats > :nth-child(4)")
          tsWind.textContent = `Wind: ${res.data.current.wind_speed}m/s`

        res.data.forecast.daily.forEach( (day, dayIdx) => {
          const nextDayForcast = document.querySelector(`#forecast > :nth-child(${dayIdx + 1})`)

          const dayP = nextDayForcast.querySelector(":nth-child(1)")
          let dateToday = new Date(day.date).getDay()
          dayP.textContent = weekDay[dateToday]

          const emojiEl = nextDayForcast.querySelector(":nth-child(2)")
          if (day.weather_description === 'Sunny') {
            let emoji =  descriptions.find(arr => arr[0] === 'Sunny')
            emojiEl.textContent = emoji[1]
          } else if (day.weather_description === 'Cloudy') {
            let emoji =  descriptions.find(arr => arr[0] === 'Cloudy')
            emojiEl.textContent = emoji[1]
          } else if (day.weather_description === 'Rainy') {
            let emoji =  descriptions.find(arr => arr[0] === 'Rainy')
            emojiEl.textContent = emoji[1]
          } else if (day.weather_description === 'Thunderstorm') {
            let emoji =  descriptions.find(arr => arr[0] === 'Thunderstorm')
            emojiEl.textContent = emoji[1]
          } else if (day.weather_description === 'Snowy') {
            let emoji =  descriptions.find(arr => arr[0] === 'Snowy')
            emojiEl.textContent = emoji[1]
          } else if (day.weather_description === 'Partly Cloudy') {
            let emoji =  descriptions.find(arr => arr[0] === 'Partly Cloudy')
            emojiEl.textContent = emoji[1]
          }

          const minMaxEl = nextDayForcast.querySelector(":nth-child(3)")
          minMaxEl.textContent = `${day.temperature_min}°/${day.temperature_max}°`

          const precipitationEl = nextDayForcast.querySelector(":nth-child(4)")
          precipitationEl.textContent = `Precipitation: ${day.precipitation_probability *100}%`
        })

        // res.data.location
        const locationCity = document.querySelector("#location > :nth-child(1)")
        locationCity.textContent = res.data.location.city

        const locationCountry = document.querySelector("#location > :nth-child(2)")
        locationCountry.textContent = res.data.location.country

      })
      .catch(error => {
        console.log(error.message);
      })
  })


  // 👆 WORK WORK ABOVE THIS LINE 👆

}

// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject4 }
else moduleProject4()
