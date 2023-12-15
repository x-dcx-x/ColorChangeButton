let phrase = document.getElementById("phrase");
let but1 = document.getElementById("but1");
let but2= document.getElementById("but2");
let but3 =document.getElementById("but3");

but1.addEventListener("click", function (){
phrase.innerHTML=" Vous avez appuyer sur le bouton Clic!";
})

but2.addEventListener("click",function (){
    phrase.innerHTML="Vous venez de me mettre en vert xD"
    phrase.style.color = "green";
})

but3.addEventListener("click",function (){
    phrase.innerHTML="Et maintenant en bleu xxD"
    phrase.style.color = "blue";
})

