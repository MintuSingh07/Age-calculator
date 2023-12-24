let useerInput = document.getElementById("date");
let result = document.getElementById("result");
useerInput.max = new Date().toISOString().split("T")[0]; //to disable future date. It only shows the current days

function calculateAge() {
    let birthDate = new Date(useerInput.value);

    //? the date that user will input
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;  //! this +1 is because the month starts with 0 (In Programming Language), to start with 1 we add +1
    let y1 = birthDate.getFullYear();


    //? Function fot Present date 
    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();


    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    }
    else {
        y3--;
        m3 = 12 + m2 - m1;
    }
    if(d2 >= d1){
        d3 = d2 - d1;
    }
    else{
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if(m3 < 0 ){
        m3 = 11;
        y3--;
    }
    if(result.innerHTML = `You are ${y3} Years, ${m3} Months and ${d3} Days Old`){
        result.classList.add("pop");
    }
    
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate()
}