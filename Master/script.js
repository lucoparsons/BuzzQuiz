$(".ui-btn .ui-corner-all .ui-btn-inline").css("background-color", "#DD3355");

function User(name, pass, sex, weight, height) {
    this.username = name;
    this.password = pass;
    this.sex = sex;
    this.weight = weight;
    this.height = height;
    this.bmiheight = this.height * this.height;
    this.bmi = (this.weight / this.bmiheight) * 703
}

function build() {
    $(document).ready(function(){
        user1 = new User(
            $("#username2").val(),
            $("#password2").val(),
            $("#select-choice-min").val(),
            $("#weight").val(),
            $("#height").val());
        console.log(user1);
    });
    function howmuchshouldyoudrink(){
        var liquidLeft = user1.weight * .6;
        console.log(liquidLeft);
    }
    howmuchshouldyoudrink();
}

build();