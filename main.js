let randomBtn = document.querySelector("#rand_person");
let personName = document.querySelector("#person_name");
let personInfo = document.querySelector("#person_info");

randomBtn.addEventListener("click", randPerson);

function randPerson(){
    let num = Math.floor(Math.random() * data.results.length);
    let personImg = document.querySelector("#person_image");
    personImg.src = data.results[num].picture.large;
    personName.innerHTML = data.results[num].name.first + " " + data.results[num].name.last;
    console.log(data.results);
    personInfo.innerHTML = "Gender: " + data.results[num].gender + " | Country: " + data.results[num].location.country + " | Age: " + data.results[num].dob.age + " | Email: " + data.results[num].email;
}