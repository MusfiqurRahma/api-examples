const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(json =>displayCountries(json))
}
loadCountries();
displayCountries = country => {
    //     for (const country of countries) {
    //        console.log(country);
    //    }
    const wholeCountries = document.getElementById('countriesss');
    country.forEach(countries => {
        // console.log(countries);
        const div =document.createElement('div')
      ;
        div.classList.add('countries')
        div.innerHTML = `
        <h2> ${countries.name} </h2>
        <p> ${countries.capital} </p>
        <button onclick="loadCountryByName('${countries.name}')">Details</button>`
        // const h2 = document.createElement('h2');
        // h2.innerText = countries.name;
        // div.appendChild(h2);
        // const p = document.createElement('p');
        // p.innerText = countries.capital;
        // div.appendChild(p);
        wholeCountries.appendChild(div);
    })
};
const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data =>displayCountryDetail(data[0]))
}
const displayCountryDetail = country => {
    console.log(country);
    const countryDiv = document.getElementById('country-details')
    countryDiv.innerHTML = `
    <h3>${country.name}</h3>
    <p>${country.population}</p>
    <img width=200px src="${country.flag}">`
}