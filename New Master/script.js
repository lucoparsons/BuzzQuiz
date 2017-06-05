var waterDrank = 0;
var waterTotal = 0;
var alcoholDrank = 0;
var alcoholTotal = 0;
var excerciseDo = 0;
var excerciseTotal = 0;
var person;

function User(name, pass, sex, weight, height) {
    this.username = name;
    this.password = pass;
    this.sex = sex;
    this.weight = weight;
    this.height = height;
    this.bmiheight = this.height * this.height;
    this.bmi = (this.weight / this.bmiheight) * 703;
    this.water = 0;
    this.liquidLeft = this.weight * .6;
}

function download(array, name) {
    var json = JSON.stringify(array);
    localStorage.setItem(name, json);
}

function reload(name) {
    var text = localStorage.getItem(name);
    var obj = JSON.parse(text);
    console.log(obj);
    return obj;
}

function build() {
    $(document).ready(function(){
        var user1 = new User(
            $("#username2").val(),
            $("#password2").val(),
            $("#select-choice-min").val(),
            $("#weight").val(),
            $("#height").val());
        console.log(user1);
        users.push(user1);
        console.log(user1.password);
        console.log(users[1].password);
        download(users, "userDatabase");
        reload("userDatabase");
        person = user1;
        console.log(person);
    });

}
console.log(JSON.parse(localStorage.getItem("userDatabase")));
console.log(JSON.parse(localStorage.getItem("userDatabase"))[0].username);

function signin(){
    var username = document.getElementById("username1").value;
    var password = document.getElementById("password1").value;
    var database = reload("userDatabase");
    console.log(database);
    for(key in database){
        if(database[key].username == username){
            if(database[key].password == password){
                window.location.href = "#page4";
                person = database[key];
                console.log(person);
            }
            else{
                document.getElementById("output").innerHTML = "Username and Password do not match :("
            }
        }
        else{
            document.getElementById("output").innerHTML = "Username invalid, try another or sign up"
        }
    }
}

function logOut() {
    person = "";
    console.log(person);
}
function drink() {
    waterDrank = document.getElementById("waterintake").value;
    var waterDrink = Number(waterDrank);
    waterTotal += waterDrink;
    document.getElementById("water").innerHTML = "Water: " + waterTotal;
    alcoholDrank = document.getElementById("alcoholintake").value;
    var alcoholDrink = Number(alcoholDrank);
    alcoholTotal += alcoholDrink;
    document.getElementById("alcohol").innerHTML = "Alcohol: " + alcoholTotal;
    document.getElementById("alcoholintake").value = "";
    excerciseDone = document.getElementById("excerciser").value;
    excerciseDo = Number(excerciseDone);
    excerciseTotal += excerciseDo;
    document.getElementById("excercise").innerHTML = "Excercise: " + excerciseTotal;
    document.getElementById("excerciser").value = "";
}
