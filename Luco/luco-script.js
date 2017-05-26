/**
 * Created by h205p2 on 5/18/17.
 */

function User(name, pass, sex, weight, height) {
    this.username = name;
    this.password = pass;
    this.sex = sex;
    this.weight = weight;
    this.height = height;
    this.bmiheight = this.height * this.height;
    this.bmi = (this.weight / this.bmiheight) * 703;
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