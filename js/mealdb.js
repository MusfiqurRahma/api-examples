document.getElementById('error-message').style.display = 'none';
const searchFood = () => {
  const searchField = document.getElementById('search-field')
  const searchText = searchField.value;
  // clear data
  searchField.value = '';
  document.getElementById('error-message').style.display = 'none';
  // if (searchText == 0) {
    
  // }
  // else()
  // load data
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))
    .catch(error => displayError(error));
  
};
const displayError = (error) => {
  document.getElementById('error-message').style.display = 'block';
}
const displaySearchResult = meals => {
  const searchResults = document.getElementById('search-result')
  // searchResults.innerHTML = '';
  searchResults.textContent = '';
  // if (meals.length == 0) {
   
  // } else {
  //   alert('show no result found');
  // }
  meals.forEach(meal => {
    console.log(meal);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
        <div onclick ='loadMealDeatail(${meal.idMeal})' class="card h-50">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${meal.strMeal}</h5>
                          <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
                          <p class="card-text">${meal.strArea}</p>
                        </div>
                      </div>`
    searchResults.appendChild(div);
  })
};
const loadMealDeatail = mealId => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]))
}
const displayMealDetail = meal => {
  console.log(meal);
  const mealDetails = document.getElementById('meal-details')
  const div = document.createElement('div')
  div.classList.add('card')
  div.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
    <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
  </div>
  `
  mealDetails.appendChild(div);
}
