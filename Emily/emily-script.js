/**
 * Created by h205p2 on 5/18/17.
 *  test push, working?
 */

function User(name, pass, sex, weight, height) {
    this.username = name;
    this.password = pass;
    this.sex = sex;
    this.weight = weight;
    this.height = height;
    this.bmiheight = this.height * this.height;
    this.bmi = (this.weight / this.bmiheight) * 703;
    this.water = 0;
}

function signin(){
    var username = document.getElementById("username1").value;
    var password = document.getElementById("password1").value;
    for(key in users){
        if(users[key].username == username){
            if(users[key].password== password){
                window.location.href = "#page4";
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
    $(document).ready(function(){
        var user1 = new User(
            $("#username2").val(),
            $("#password2").val(),
            $("#select-choice-min").val(),
            $("#weight").val(),
            $("#height").val());
        console.log(user1);
    });
}
