var library = [{
        title: 'When Breath Becomes Air',
        author: 'Paul Kalanithi',
        readingStatus: true
    },
    {
        title: 'The Girls',
        author: 'Emma Cline ',
        readingStatus: true
    },

    {
        title: 'The Nest',
        author: 'Cynthia',
        readingStatus: false
    },

    {
        title: 'The Crown',
        author: 'Kiera Cass',
        readingStatus: true
    },

    {
        title: 'Behind Closed Doors',
        author: 'B.A. Paris',
        readingStatus: false
    },

    {
        title: 'It Ends with Us ',
        author: 'Colleen Hoover',
        readingStatus: true



    }
];

for (var i = 0; i < library.length; i++) {

    if (library[i].readingStatus === true) {
    	//console.log (library.title + "Already Read \n");
        document.write(library[i].title + "<p style= {color:green;}> Already Read </p>" + "<br>");


    }

    else if (library[i].readingStatus === false) {
//console.log (library.title + "You have to Read \n");
        document.write(library[i].title + "<p style ={color: red;}> You still need to read </p>" + "<br>");

     }

    }




    function sliceMe() {
    	var str = [];

    	str = document.getElementById("field1").value;

    	var nbr = Number(document.getElementById("field2").value);

    	var str2 =str.slice(0, nbr);

    	document.getElementById("result").innerHTML = str2;



    }


    function createTbl () {

    	var col = Number (prompt("Please enter cols-number"));
    	var rows = Number (prompt("Please enter rows"));


   		

    }