/**
 * Created by h205p2 on 5/18/17.
 */
var person;
var waterDrank = 0;
var waterTotal = 0;
var alcoholDrank = 0;
var alcoholTotal = 0;
var excerciseDo = 0;
var excerciseTotal = 0;

function User(name, pass, sex, weight, height) {
    this.username = name;
    this.password = pass;
    this.sex = sex;
    this.weight = weight;
    this.height = height;
    this.bmiheight = this.height * this.height;
    this.bmi = (this.weight / this.bmiheight) * 703;
    this.water = function() {
        if (this.sex == "female") {
            return person.weight*.6;
        }
        if (this.sex == "male") {
            return person.weight*.7;
        }
    }
}

function download(array, name) {
    var json = JSON.stringify(array);
    localStorage.setItem(name, json);
}

function reload(name) {
    var text = localStorage.getItem(name);
    var arr = JSON.parse(text);
    console.log(arr);
    return arr;
}

function build() {
    allUsers = reload("userDatabase");
    console.log(allUsers);
    if (allUsers == null) {
        allUsers = [users[0]];
        //allUsers.push(users[0])
    }
    var user = document.getElementById("username2").value;
    var pass = document.getElementById("password2").value;
    var sex = document.getElementById("select-choice-min").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    allUsers.push(new User(user, pass, sex, weight, height));
    person = allUsers[allUsers.length - 1];
    onLogin();
    download(allUsers, "userDatabase");
    console.log(person);
    console.log(JSON.parse(localStorage.getItem("userDatabase")));
}
//console.log(JSON.parse(localStorage.getItem("userDatabase")));
//console.log(JSON.parse(localStorage.getItem("userDatabase"))[0].username);

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
                onLogin();
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

function onLogin() {
    document.getElementById("remainderLabel").innerHTML = Math.round(person.water()) + " oz";
}

function logOut() {
        person = "";
    console.log(person);
}

function drink() {
    // waterDrank = document.getElementById("waterintake").value;
    // var waterDrink = Number(waterDrank);
    // waterTotal += waterDrink;
    // document.getElementById("water").innerHTML= "";
    // document.getElementById("water").innerHTML = "Water: " + waterTotal + " oz";
    // alcoholDrank = document.getElementById("alcoholintake").value;
    // var alcoholDrink = Number(alcoholDrank);
    // alcoholTotal += alcoholDrink;
    // document.getElementById("alcohol").innerHTML= "";
    // document.getElementById("alcohol").innerHTML = "Alcohol: " + alcoholTotal + " oz";
    // document.getElementById("alcoholintake").value = "";
    // excerciseDone = document.getElementById("excerciseintake").value;
    // excerciseDo = Number(excerciseDone);
    // excerciseTotal += excerciseDo;
    // document.getElementById("excercise").innerHTML= "";
    // document.getElementById("excercise").innerHTML = "Excercise: " + excerciseTotal;
    // document.getElementById("excerciseintake").value = "";
    // var totalIntake = waterDrink + alcoholDrink;
    // document.getElementById("intake").innerHTML = "Today's Total Intake: " + totalIntake + " oz"

    var waterintake = document.getElementById("waterintake").value;
    var alcoholintake = document.getElementById("alcoholintake").value;
    var excersiseintake = document.getElementById("excersiseintake").value;
    if(waterintake!=0){
        person.water-=waterintake;
    }
    if(alcoholintake!=0){
        person.water+=((alcoholintake/12)*6);
    }
    if(excersiseintake!=0){
        person.water+=(excersiseintake*3);
    }
}