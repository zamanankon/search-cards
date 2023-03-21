const loadMeals=(searchText)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMeals(data.meals))
}

 const displayMeals=(meals)=>{
    const mealsContainer=document.getElementById('meals-container')
    mealsContainer.innerHTML='';
     meals.forEach(meal=>{
     const mealDiv=document.createElement('div')
        mealDiv.classList.add('col')
        mealDiv.innerHTML=`
         <div class="col">
        <div class="card h-80">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.</p>
                  <button onclick="loadMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Details
</button>
            </div>
        </div>
    </div>
        `
      mealsContainer.appendChild(mealDiv)
     })   
 }
const  searchMeals=()=>{
  const searchText=document.getElementById('search-field').value
  loadMeals(searchText);
}

const loadMealDetail=idMeal=>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
     fetch(url)
     .then(res=>res.json())
     .then(data=>displayDetails(data.meals[0]))
}

const displayDetails=meal=>{
   const data=document.getElementById('exampleModalLabel').innerText=meal.strMeal;
   console.log(data);
    const mealsDetails=document.getElementById('mealDetailsBody')
    console.log(mealsDetails);
    mealsDetails.innerHTML=`
    <img class="img-fluid" src="${meal.strMealThumb}">
 
    `
}
loadMeals('fish')
