var names = 
{
	firstName: "Josh",
	lastname: "Lehman" 
};
var num = 
{
	a: 1,
	b:2,
	c: 3,
	d: 4
};
var animals = 
{
     animal: "dog",
     noise: "bark",
     age: 3,
     type: "Labrador",
     color: "Yellow"
};

var boss =
{
	first: "Abhishek",
	last: "Bhardwaj",
	middle: "Boss",
	age: 81,
	homeTown: "Meerut",
	occupation: "Chilling",
	dateOfBirth: 01/23/1945,
	pet: "Dog",
	favColor: "black"

}

var favMovie =
{
	Title:"The Godfather",
	 Year:"1972",
	 Rated:"R",
	 Released :"24 Mar 1972",
	Runtime:"175 min",
	Genre: ["Crime", "Drama"],
	Director: "Francis Ford Coppola",
	Writer: ["Mario Puzo (screenplay)", "Francis Ford Coppola (screenplay)", "Mario Puzo (novel)"],
	Actors: ["Marlon Brando", "Al Pacino", "James Caan", "Richard S. Castellano"],
	Plot:"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
	Language: ["English", "Italian", "Latin"],
	Country:"USA",
	Awards:"Won 3 Oscars. Another 23 wins & 27 nominations.",
	Poster:"http://ia.media-imdb.com/images/M/MV5BMjEyMjcyNDI4MF5BMl5BanBnXkFtZTcwMDA5Mzg3OA@@._V1_SX300.jpg",
	Metascore:"100",
	imdbRating:"9.2",
	imdbVotes:"1,131,262",
	imdbID:"tt0068646",
	Type:"movie",
	Response:"True"
}

var key = "name";
var person = {
    name: "Alyssa P. Hacker",
    age: 26,
    hometown: "somewhere"
};
// person[age]; // => 26
// person.key; // => "Alyssa P. Hacker"
// person["somewhere"] // => ???

function formatName(boss)
{
  return boss.first + " " + boss.last;
};

var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21},
  {name: {first: "Louis", last: "Reasoner"}, age: 31}

];


function fullName(people)
{  var fullnames = [];
   for(i=0; i < people.length; i++)
   {
   	  fullnames.push(formatName(people[i].name));
   }

   return fullnames;
}

function average(people)
{
     var sum = 0;
     for(i=0; i < people.length; i++)
     {
         sum = sum + people[i].age ;
     }

     return (sum/people.length).toFixed(2);
}

function ageGreater(people,age)
{
     var agegreater = [];
     for(i=0; i < people.length; i++)
     {
     	if(age < people[i].age)
     	{
     		agegreater.push(formatName(people[i].name));
     	}

     }

     if(agegreater.length > 0)
     {
         return agegreater;
     }
     else
     {
     	 return "No Result !!"
     }
}


var dirtyObject = {
      _fht: 192492,
      name: "Alyssa P. Hacker",
      age: 26,
     _byz: 939205,
     _ttrs: 510852
}

function clean(obj) {
  // ...
   var clean = {};
   for(var key in obj)
   {
       if(key.charAt(0) === " ")
       {
       	  delete obj[key];
       }
   }

   return obj;
}
//clean(dirtyObject); // => {name: "Alyssa P. Hacker", age: 26}

function removesOddValues(obj)
{
	for(var key in obj)
	{
		if(typeof(obj[key] === "number"))
		{
			if(obj[key] % 2 === 1)
			{
				delete obj[key];
			}
		}
	}

	return obj;
}

function countWords(s)
{
   var words = s.split(" ");
   var obj = {};
   for(var i=0; i < words.length; i++)
   {
        var lwords = words[i].toLowerCase();
        if(obj[lwords] === undefined){
        	obj[lwords] = 1;
        }
        else
        {
        	obj[lwords] = obj[lwords] + 1;
        }
   }

   
   return obj;
}

function countCharacters(s)
{
   var words = s.split("");
   var obj = {};
   for(var i=0; i < words.length; i++)
   {
        var lwords = words[i].toLowerCase();
        if(obj[lwords] === undefined){
        	obj[lwords] = 1;
        }
        else
        {
        	obj[lwords] = obj[lwords] + 1;
        }
   }

   clean(obj);

   return obj;
}

// function select(obj,keys)
// {
// 	var newobj = {};
// 	for(i=0; i < keys.length; i++)
// 	{
// 		newobj
// 	}
//     for(var key in obj)
//     {
//     	if(key === )
//     }
// }



