let city = 'araraquara'
let resultCity = document.querySelector("#resultCity");


resultCity.innerHTML = "São Paulo";


const fetchCity = async (city) => {
    const key = "80a4ad981dc134d36cc8ddea8b67a00a"
    const link = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${key}`);
    let data = await link.json();
    return data;
}

console.log(data);