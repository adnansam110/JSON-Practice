let data = `{
    "username":"Adnan",
    "email":"adnan@email.com",
    "age":"21"
}`;

let jsonToObj = document.querySelector('#btn-JsonObj');
let objToJson = document.querySelector('#btn-ObjJson');

let username = document.querySelector('#username');
let email = document.querySelector('#email');
let age = document.querySelector('#age');

jsonToObj.addEventListener('click', () =>{
    myObj = JSON.parse(data);
    username.value = myObj.username;
    email.value = myObj.email;
    age.value = myObj.age;
});

objToJson.addEventListener('click', ()=>{
    let myObj = {};
    myObj.username  = username.value ;
    myObj.email =  email.value;
    myObj.age =  age.value;

    let json = JSON.stringify(myObj);

    document.querySelector('#jsonData').innerText = json;
})