/**
 * Created by h205p2 on 5/18/17.
 *  test push, working?
 */

var user= {};

function User(name, pass, sex, weight, height) {
    this.username = name;
    this.password = pass;
    this.sex = sex;
    this.weight = weight;
    this.height = height;
    this.bmiheight = this.height * this.height;
    this.bmi = (this.weight / this.bmiheight) * 703;
    this.water = 0;

    users.nextIndex++
}

function signin(){
    var username = document.getElementById("username1").value;
    var password = document.getElementById("password1").value;
    for(key in users){
        if(users[key].username == username){
            if(users[key].password== password){
                window.location.href = "#page4";
                user = users[key];
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

function build() {
    // $(document).ready(function(){
    //     users["user"+(users.nextIndex-1)] = new User(
    //         $("#username2").val(),
    //         $("#password2").val(),
    //         $("#select-choice-min").val(),
    //         $("#weight").val(),
    //         $("#height").val());
    //     console.log(users["user"+users.nextIndex]);
    // });
    var username = document.getElementById("username2").value;
    var password = document.getElementById("password2").value;
    var sex = document.getElementById("select-choice-min").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var newuser = new User(username, password, sex, weight, height);
    users["user" + users.nextIndex] = newuser;
    users.nextIndex++
    console.log(users["user" + (users.nextIndex-1)])
}

function addIntake(){
    console.log(user);
    var waterintake = document.getElementById("waterintake").value;
    var alcoholintake = document.getElementById("alcoholintake").value;
    var excersiseintake = document.getElementById("excersiseintake").value;
    if(waterintake!=0){
        user.water-=waterintake;
    }
    if(alcoholintake!=0){
        user.water+=((alcoholintake/12)*6);
    }
    if(excersiseintake!=0){
        user.water+=(excersiseintake*3);
    }
}

$(document).ready(function(){
    document.getElementById("remainder").innerHTML = user.water
});