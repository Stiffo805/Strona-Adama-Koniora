const P4 = document.getElementById("P4");
const P5 = document.getElementById("P5");
const P6 = document.getElementById("P6");
const P7 = document.getElementById("P7");
const P8 = document.getElementById("P8");
const S1 = document.getElementById("S1");
const S2 = document.getElementById("S2");
const S3 = document.getElementById("S3");
const S4 = document.getElementById("S4");
const levelHeaderDiv = document.getElementById("level-header");
const taskContentP = document.getElementById("task-content");
const taskSolutionP = document.getElementById("task-solution");

P4.addEventListener('click',function(){
    viewAnotherSol(0);
});
P5.addEventListener('click',function(){
    viewAnotherSol(1);
});
P6.addEventListener('click',function(){
    viewAnotherSol(2);
});
P7.addEventListener('click',function(){
    viewAnotherSol(3);
});
P8.addEventListener('click',function(){
    viewAnotherSol(4);
});
S1.addEventListener('click',function(){
    viewAnotherSol(5);
});
S2.addEventListener('click',function(){
    viewAnotherSol(6);
});
S3.addEventListener('click',function(){
    viewAnotherSol(7);
});
S4.addEventListener('click',function(){
    viewAnotherSol(8);
});

const levelHeaders = ["Szkoła podstawowa klasa 4 (P.4)",
                "Szkoła podstawowa klasa 5 (P.5)",
                "Szkoła podstawowa klasa 6 (P.6)",
                "Szkoła podstawowa klasa 7 (P.7)",
                "Szkoła podstawowa klasa 8 (P.8)",
                "Szkoła średnia klasa 1 (S.1)",
                "Szkoła średnia klasa 2 (S.2)",
                "Szkoła średnia klasa 3 (S.3)",
                "Szkoła średnia klasa 4 (S.4)"]

const taskContents = ["Oblicz wartość wyrażenia 5*(2+3*5+2:6)",
                      "Uzupełnij działania:<br>&nbsp;&nbsp;4_3<br>+_15<br>-------<br>= 748<br>",
                    "W koszyku jest o 20% jabłek więcej niż gruszek. O ile procent mniej jest gruszek niż jabłek?"
                ]
                
const taskSolutions = ["Rozwiązanie:<br>1. 5*(2+15+1/3)<br>2. 5*(17+1/3)<br>3. 86+2/3",
                        "Rozwiązanie:<br>&nbsp; 433<br>+315<br>-------<br>= 748",
                    "Rozwiązanie:<br> 1. x - liczba gruszek<br> 1,2x - liczba jabłek<br> 2. Gruszek jest o 0,2x mniej. Jaka to jest część liczby jabłek?<br> 3. (0,2x/1,2x)*100% = (1/6)*100% = 16,(6)%"
                ]

function viewAnotherSol(solID){
    levelHeaderDiv.innerHTML = levelHeaders[solID];
    taskContentP.innerHTML = taskContents[solID];
    taskSolutionP.innerHTML = taskSolutions[solID];
    P4.classList.remove("viewed-task");
    P5.classList.remove("viewed-task");
    P6.classList.remove("viewed-task");
    P7.classList.remove("viewed-task");
    P8.classList.remove("viewed-task");
    S1.classList.remove("viewed-task");
    S2.classList.remove("viewed-task");
    S3.classList.remove("viewed-task");
    S4.classList.remove("viewed-task");

    switch(solID){
        case 0:
            P4.classList.add("viewed-task");
            break;
        case 1:
            P5.classList.add("viewed-task");
            break;
        case 2:
            P6.classList.add("viewed-task");
            break;
        case 3:
            P7.classList.add("viewed-task");
            break;
        case 4:
            P8.classList.add("viewed-task");
            break;
        case 5:
            S1.classList.add("viewed-task");
            break;
        case 6:
            S2.classList.add("viewed-task");
            break;
        case 7:
            S3.classList.add("viewed-task");
            break;
        case 8:
            S4.classList.add("viewed-task");
            break;
    }
}

const hamburgerButton = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgerButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('show'); 
});

window.addEventListener('resize', function(){
    if (this.innerWidth>=1200){
        mobileMenu.classList.remove('show');
    }
});
