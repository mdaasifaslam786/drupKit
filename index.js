var buttonLength = document.querySelectorAll("button").length;

for(var i=0;i<buttonLength;i++){
    
    document.querySelectorAll("button")[i].addEventListener("click",
        function(){
            var buttonInnerHtml = this.innerHTML;
            makeSound(buttonInnerHtml);
            buttonAnimation(buttonInnerHtml);
        }
    )
}

document.addEventListener("keypress",function(eve){
    makeSound(eve.key);
    buttonAnimation(eve.key);
})

function makeSound(asd){
    switch(asd){
        case "w":
            var tom1 =new Audio("sounds/tom-1.mp3");
                tom1.play();
            break;
        case "a":
            var tom1 =new Audio("sounds/tom-2.mp3");
                tom1.play();  
            break;
        case "s":
            var tom1 =new Audio("sounds/tom-3.mp3");
                tom1.play();   
            break;
        case "d":
            var tom1 =new Audio("sounds/tom-4.mp3");
                tom1.play();  
            break;
        case "j":
        var tom1 =new Audio("sounds/crash.mp3");
            tom1.play();   
        break;
        case "k":
        var tom1 =new Audio("sounds/kick-bass.mp3");
            tom1.play();
        break;
        case "l":
            var tom1 =new Audio("sounds/snare.mp3");
                tom1.play();  
            break;
        default:
            console.log(this.innerHTML);
    }
}

function buttonAnimation(myKey){

    var effect = document.querySelector("." + myKey);
    effect.classList.add("pressed");

    setTimeout(function(){
        effect.classList.toggle("pressed");
    },150)
}