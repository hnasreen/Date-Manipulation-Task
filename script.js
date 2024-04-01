var parentdiv = document.createElement("div");
parentdiv.className = "main"


var input_date = document.createElement("input")
input_date.setAttribute("type","date");
input_date.id = "dob"

var button = document.createElement("button");
button.setAttribute("type","button")
button.className = "btn btn-primary"
button.innerHTML = "Display Data"
button.addEventListener("click",displaydata)



//Create a Div to display the date manipulation data

var textarea1=document.createElement("div")
textarea1.id="displayArea1"
var textarea2=document.createElement("div")
textarea2.id="displayArea2"
var textarea3=document.createElement("div")
textarea3.id="displayArea3"
var textarea4=document.createElement("div")
textarea4.id="displayArea4"
var textarea5=document.createElement("div")
textarea5.id="displayArea5"
var textarea6=document.createElement("div")
textarea6.id="displayArea6"
var textarea7=document.createElement("div")
textarea7.id="displayArea7"
var textarea8=document.createElement("div")
textarea8.id="displayArea8"
var textarea9=document.createElement("div")
textarea9.id="displayArea9"

parentdiv.append(input_date,button,textarea1,textarea2,textarea3,textarea4,textarea5,textarea6,textarea7,textarea8,textarea9)

document.body.append(parentdiv)


function displaydata(){

var input = document.getElementById("dob").value;
console.log(input);

if(Date.parse(input)){

var inputdate = new Date(input);
var currentdate = new Date();
var millisecdiff = parseInt(currentdate.getTime())-parseInt(inputdate.getTime())
console.log(millisecdiff);
var secdiff = Math.floor(millisecdiff/1000);
console.log(secdiff);
var mindiff = Math.floor(secdiff/60);
console.log(mindiff);
var hoursdiff = Math.floor(mindiff/60);
console.log(hoursdiff);
var daydiff = Math.floor(hoursdiff/24);
console.log(daydiff);
var yeardiff = currentdate.getFullYear() - inputdate.getFullYear()
console.log(yeardiff);
var monthdiff = (yeardiff*12)+(currentdate.getMonth()-inputdate.getMonth())
console.log(monthdiff);

document.getElementById('displayArea1').innerText="The selected input date is "+ inputdate 
document.getElementById('displayArea2').innerText="The Current Date is "+currentdate
document.getElementById('displayArea3').innerText="Total milliseconds: "+millisecdiff
document.getElementById('displayArea4').innerText="Total seconds: "+ secdiff
document.getElementById('displayArea5').innerText="Total minutes: "+mindiff
document.getElementById('displayArea6').innerText="Total Hours: "+hoursdiff
document.getElementById('displayArea7').innerText="Total Number of Days: "+daydiff
document.getElementById('displayArea8').innerText="Total Number of Years: "+yeardiff
document.getElementById('displayArea9').innerText="Total Number of Months: "+monthdiff;

}
else{
    console.log("invalid date selected")
}



}