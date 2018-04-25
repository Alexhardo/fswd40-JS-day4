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


    } else if (library[i].readingStatus === false) {
        //console.log (library.title + "You have to Read \n");
        document.write(library[i].title + "<p style ={color: red;}> You still need to read </p>" + "<br>");

    }

}




function sliceMe() {
    var str = [];

    str = document.getElementById("field1").value;

    var nbr = Number(document.getElementById("field2").value);

    var str2 = str.slice(0, nbr);

    document.getElementById("result").innerHTML = str2;



}


function createTbl() {

    var col = Number(prompt("Please enter cols-number"));
    var rows = Number(prompt("Please enter rows"));

}
 msg3 = 0;

function chknight() {
    var night1 = Math.floor(Math.random() * 10 + 1);
    var night2 = Math.floor(Math.random() * 10 + 1);
    var night3 = Math.floor(Math.random() * 10 + 1);    

    var Hotels = [{
            name: "Hilton",
            nights: night1,

        },

        {
            name: "Mariots",
            nights: night2,

        },

        {
            name: "Grand hotel",
            nights: night3,

        }
    ];

    var NumOfNights = Number(prompt("Please enter the number of nights (between 1 and 10 nights) you want to stay in : "));
    
    msg3 = "",msg2="",msg1="";

    for (var q = 0; q < Hotels.length; q++) {

        var msg3 = msg3 + (" there is : " + Hotels[q].nights + " free night in hotel " + Hotels[q].name + "<br>");
        document.getElementById("checknights1").innerHTML = msg3;
    }


    for (var j = 0; j < Hotels.length; j++) 
    {
        if (NumOfNights > Hotels[j].nights) 
        {
            var msg1 = msg1 + (" sorry, the nummber of nights you have entered is bigger than the availabe nummber of free nights in hotel : " + Hotels[j].name + "<br>");
            document.getElementById("checknights").innerHTML = msg1;
        } 

        else if (NumOfNights <= Hotels[j].nights) {
            var msg2 = msg2 + (" there is " + Hotels[j].nights + " night in hotel " + Hotels[j].name + ", you can book here<br>");
            document.getElementById("checknights").innerHTML = msg2;
        }


    }
}