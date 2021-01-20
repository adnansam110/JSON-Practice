
// Simple Javascript
var person = {

    name:"Adnan",
    age : 35,
    email: function(){            //this won't work in json
       return `adnan@email.com`;
    }
}

//console.log(person.email());

// -----------------------------------------

// Using JSON

// var person = {

//     name:"Adnan",
//     age : 35,
//     address : {
//         street: "5th Street",
//         city: "karachi"
//     },
//     children: ["Usman", "Subhan"]
// }

// var people = [
//     {
//         name:"Adnan",
//         age: 21
//     },
//     {
//         name:"Usman",
//         age: 25
//     },
//     {
//         name:"Subhan",
//         age: 28
//     }
// ]


//  ------ Same thing -------
// for (var i=0;i<people.length;i++)
// {
//     //console.log(people[i].name);
//     var ul = document.getElementById('people');
//     var list = document.createElement('li');
//     list.innerText = people[i].name;
//     ul.appendChild(list);

// }

// var output =''
// for (var i=0;i<people.length;i++)
// {
//     //console.log(people[i].name);
//     output += "<li>"+people[i].name+"</li>";

// }
// document.getElementById('people').innerHTML = output;

// person = JSON.stringify(person)
// If we try to console any value from person now it will give undefined Hence we Do parse

// person = JSON.parse(person);
// now we can consoole the values of the object

// console.log(person.address.street);
// console.log(person.children[1]);

// console.log(people[1].name);

var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              //console.log(xhttp.responseText);
            var response = JSON.parse(xhttp.responseText);
             
            var people = response.people;

            var output = '';
            for(var i = 0;i < people.length;i++){
              output += '<li>'+people[i].name+'</li>';
            }
            document.getElementById('people').innerHTML = output;
          }
      };
      xhttp.open("GET", "people.json", true);
      xhttp.send();