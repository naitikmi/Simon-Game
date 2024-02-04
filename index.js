
var givencolor=["red","blue","green","yellow","orange","skyblue","pink","orange"];
var gamearray=[];
var userarray=[];
var level=0;
var istrue=false;

$(document).keypress(function(){
    if(!istrue){
       seq();
       istrue=true;
    }
});


$(".bt").click(function(){
    var btncolor=$(this).attr("id");
    userarray.push(btncolor);
    playsound(btncolor);
    animate(btncolor);

    check(userarray.length-1);
});

function check(curcolrind){
    if(gamearray[curcolrind] === userarray[curcolrind]){
        if(gamearray.length === userarray.length)
            setTimeout(function(){ seq(); },300);
            //  seq();
    }else{
        playsound("wrong");
        $("body").addClass("remove");
        setTimeout(function(){
            $("body").removeClass("remove");
        },300);
        $("h1").text("Game Over!,Press Any Key To Restart");
        startover();
    }
}

function seq(){
    userarray=[];
    level++;
    $("h1").text("level "+level);
    var  x=Math.floor(Math.random()*8);
    var c=givencolor[x];
    gamearray.push(c);

    $("#"+c).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(c);
}

function playsound(aud){
    var aud=new Audio("sounds/"+aud+".mp3");
    aud.play();
}  
function animate(colr){
    $("#"+colr).addClass("pressed");
    setTimeout(function(){
        $("#"+colr).removeClass("pressed");
    },300);
}

function startover(){
    level=0;
    gamearray=[];
    istrue=false;
}
