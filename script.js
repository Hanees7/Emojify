const text = document.querySelector("#textmsg")
const password = document.querySelector('#password')
const result = document.querySelector("#result")
var clutter = "";

// For Encryption

function encryption(){
    document.querySelector("#encrypt-btn")
    .addEventListener("click", function(){

        // Get Password

var pass= document.getElementById("password").value;
console.log(pass);  

        // get input
var input = document.getElementById("textmsg").value;
console.log(input); 


//split the input into emoji
var str = input.split("")
str.forEach(element => {
clutter += `&#128${(element.charCodeAt())} `
});
// console.log(clutter);

// document.querySelector("#result").style.display = "block";
document.querySelector("#result").innerHTML = clutter

// For Data Store in LocalStorage
var dataa = [];

if(JSON.parse(localStorage.getItem('data1'))){
dataa = JSON.parse(localStorage.getItem('data1'));
console.log(dataa);
    dataa.push({"pass":pass, "input":input, 
"clutter":clutter})
}
else
{
    dataa = [{"pass":pass, "input":input, 
    "clutter":clutter}] 
}


localStorage.setItem(`data1`, JSON.stringify(dataa))
})
}

// For decryption

function decryption(){
    document.querySelector("#decrypt-btn")
    .addEventListener("click",function(){
        var clutter2 = '';

        // Get the given input msg
        var input2 = document.querySelector("#emojimsg").value
        //Get the pass
        var finalPass = document.querySelector("#finalpassword").value
   
        var user = JSON.parse(localStorage.getItem('data1'))
   console.log(user);

   var str2 = input2.split(" ")
   str2.forEach(element =>{
    clutter2 += `&#${(element.codePointAt(0))} `
   });
   console.log(clutter2)
   var found;

   for(let i of user){
if(i.clutter == clutter2){
    found = i;
    console.log(i)
}
   }
   if(found.clutter === clutter2){
    console.log("ji");
    document.querySelector("#result").style.display=`block`
    document.querySelector("#result").style.color=`#eee`
   
    document.querySelector("#result").innerHTML = found.input;

   }
   else{
    document.querySelector("#result").innerHTML = "Wrong Password!"
    document.querySelector("#result").style.display=`block`
    document.querySelector("#result").style.color=`red`
     
}

    })
}



function btnClick(){

    document.querySelector("button").addEventListener("click", function () {
        document.querySelector("#result").style.display = "block";
        // console.log(localStorage.getItem("password"))
        // console.log(localStorage.getItem("emojis"))
    })
document.querySelector("#dec-btn").addEventListener("click", function(){
    document.querySelector("#decryption").style.display="block";
    document.querySelector("#encryption").style.display="none";
    document.querySelector("#dec-btn").style.backgroundColor="#333";
    document.querySelector("#enc-btn").style.backgroundColor="#222";
    document.querySelector("#result").style.display="none";
document.querySelector("#main>h1 span img").style.rotate="180deg";;
})
document.querySelector("#enc-btn").addEventListener("click", function(){
    document.querySelector("#encryption").style.display="block";
    document.querySelector("#decryption").style.display="none";
document.querySelector("#result").style.display="none";
    document.querySelector("#enc-btn").style.backgroundColor="#333";
    document.querySelector("#dec-btn").style.backgroundColor="#222";
document.querySelector("#main>h1 span img").style.rotate="360deg";

})

// document.querySelector("#encrypt-btn")
// .addEventListener("click", function(){
//     document.querySelector("#result").style.display="block";
// })

// document.querySelector("#decrypt-btn")
// .addEventListener("click", function(){
//     document.querySelector("#result").style.display="block";
// })
}

encryption();
decryption();
btnClick();
