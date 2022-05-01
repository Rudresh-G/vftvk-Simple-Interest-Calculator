function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;
    A = p*(1 + r*t/100)-p;
    currYear = parseInt(new Date().getFullYear(), 10);
    targetYear = (currYear + parseInt(t));
    printText = "If you deposit <mark>" + p + "</mark> , <br> at an interest rate of <mark>" + r + "%</mark>.<br> You will recieve an amount of <mark>" + A + "</mark>,<br> in the year <mark>" + targetYear;
    document.getElementById("result").innerHTML=printText
    
}

function show_val(x)
{
    document.getElementById("rateDisp").innerHTML=x +"%"
}
        