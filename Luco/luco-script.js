/**
 * Created by h205p2 on 5/18/17.
 */
var person;
var waterDrank = 0;
var alcoholDrank = 0;
var exerciseDo = 0;

function User(name, pass, sex, weight, height) {
    this.username = name;
    this.password = pass;
    this.sex = sex;
    this.weight = weight;
    this.height = height;
    this.bmiheight = this.height * this.height;
    this.bmi = (this.weight / this.bmiheight) * 703;
    this.water = 0;
    this.remainder = 0;
    // this.calcWater = function() {
    //      if (this.sex == "female") {
    //          this.water = this.weight*.6;
    //          this.remainder = this.weight*.6;
    //      }
    //      if (this.sex == "male") {
    //          this.water = this.weight*.7;
    //          this.remainder = this.weight*.7;
    //      }
    //  };
     this.date = new Date().toDateString();
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
                console.log(person);
                timeCheck();
                document.getElementById("goalLabel").innerHTML = Math.round(person.water) + " oz";
                document.getElementById("remainderLabel").innerHTML = Math.round(person.remainder) + " oz";
                document.getElementById("output").innerHTML = ""
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
    // person.calcWater();
    // document.getElementById("goalLabel").innerHTML = Math.round(person.water) + " oz";
    // document.getElementById("remainderLabel").innerHTML = Math.round(person.remainder) + " oz";
             if (person.sex == "female") {
                 person.water = person.weight*.6;
                 person.remainder = person.weight*.6;
             }
             if (person.sex == "male") {
                 person.water = person.weight*.7;
                 person.remainder = person.weight*.7;
             }

    document.getElementById("goalLabel").innerHTML = Math.round(person.water) + " oz";
    document.getElementById("remainderLabel").innerHTML = Math.round(person.remainder) + " oz";
}

function timeCheck() {
    var today = new Date().toDateString();

    if (today == person.date){
        console.log("yes it worked");
    }
    else if (today != person.date) {
        person.remainder = person.water;
        console.log("The date has been RESET");
    }
}

function logOut() {
        document.getElementById("water").innerHTML = "Water: 0 oz";
        document.getElementById("alcohol").innerHTML = "Alcohol: 0 oz";
        document.getElementById("exercise").innerHTML = "Exercise: 0 min";
        //$("#goalLabel").empty();
        //$("#remainderLabel").empty();

    var username = person.username;
    var password = person.password;
    var database = reload("userDatabase");
    console.log(database);
    //console.log(allUsers);
    for(key in database){
        if((database[key].username == username) && (database[key].password == password)) {
            console.log(database[key]);
            person.date = new Date().toDateString();
            database[key] = person;
            console.log(database[key]);
            download(database, "userDatabase");
            person = "";
            waterDrank = 0;
            alcoholDrank = 0;
            exerciseDo = 0;
            console.log(person);
        }
    }

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
    // exerciseDone = document.getElementById("exerciseintake").value;
    // exerciseDo = Number(exerciseDone);
    // exerciseTotal += exerciseDo;
    // document.getElementById("exercise").innerHTML= "";
    // document.getElementById("exercise").innerHTML = "Exercise: " + exerciseTotal;
    // document.getElementById("exerciseintake").value = "";
    // var totalIntake = waterDrink + alcoholDrink;
    // document.getElementById("intake").innerHTML = "Today's Total Intake: " + totalIntake + " oz"

    var waterintake = Number(document.getElementById("waterintake").value);
    var alcoholintake = Number(document.getElementById("alcoholintake").value);
    var exerciseintake = Number(document.getElementById("exerciseintake").value);
    if(waterintake!=0){
        waterDrank+=waterintake;
        person.remainder-=waterintake;
        //document.getElementById("remainderLabel").innerHTML = Math.round(person.remainder) + " oz";
        console.log(person.remainder);
        document.getElementById("water").innerHTML = "Water: " + waterDrank + " oz"
    }
    if(alcoholintake!=0){
        person.remainder+=((alcoholintake/12)*6);
        alcoholDrank+=alcoholintake;
        document.getElementById("alcohol").innerHTML = "Alcohol: " + alcoholDrank + " oz"
    }
    if(exerciseintake!=0){
        person.remainder+=(exerciseintake*3);
        exerciseDo+=exerciseintake;
        document.getElementById("exercise").innerHTML = "Exercise: " + exerciseDo + " mins"
    }
    document.getElementById("remainderLabel").innerHTML = Math.round(person.remainder) + " oz";
    $(document).ready(function(){
        $("#waterintake").val('');
        $("#alcoholintake").val('');
        $("#exerciseintake").val('');
    });

}
