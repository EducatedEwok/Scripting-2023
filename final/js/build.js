//Adj - BUTTON- cold, warm, foggy, rainy
console.log(working);
var adj = document.getElementById("adjInp").value;
var num1 = document.getElementById("num1Inp").value;
var place = document.getElementById("placeInp").value; 0
var ficChar1 = document.getElementById("ficChar11Inp").value;
var emot = document.getElementById("emotInp").value;
var num2 = document.getElementById("num2Inp").value;
var food = document.getElementById("foodInp").value;
var phySens = document.getElementById("phySensInp").value;
var ficChar2 = document.getElementById("ficChar2Inp").value;
var profession = document.getElementById("professionInp").value;
var animal = document.getElementById("animalInp").value;
var country = document.getElementById("countryInp").value;
var emot2 = document.getElementById("emot2Inp").value;
var animal2 = document.getElementById("animal2Inp").value;

console.log("submit")
function write() {
    if (profession == "programmer") {
        document.getElementById('output').innerHTML = "No sir, not for me.";
    }
    else {

        document.getElementById('output').innerHTML =
            "On a " + adj + " night " + num1 + " year/s ago, I went to " + place + " with " + ficChar1 +
            ". I had expected it to be " + adj + ", however I never expected it to be as BUTTON VAR it became." +
            " I will forever feel " + emot + " when I think about that night.\n" +
            " We had " + num2 + " serving/s of " + food + "and it made me feel " + phySens +
            ". After we ate, " + ficChar1 + " and I met " + ficChar2 + " , who immediately attacked " + ficChar1 +
            " with a/n " + obj + ". We survived only due to " + ficChar1 + "&apos;s experience in " + profession +
            ".  This is not unexpected, as " + profession + "s are well known for their kung fu skills.\n" +
            "After dispatching " + ficChar2 + " we needed to escape the situation. We commandeered several "
            + animal + "s and made a break for " + country + " where crime is perfectly legal. We hit the highway doing "
            + num2 + " miles per hour, narrowly outrunning the police who had acquired their own " + animal +
            " powered chariots. As we approached the boarder of " + country + " I heard a sound that put "
            + emot2 + " in my veins. Above us and to the North I heard the distinct sound of a/n " + animal2 +
            " powered, fully armed Apache attack helicopter approaching. Fortunately for us, " + animal +
            "s are the natural enemies of " + animal2 + "s. Our mighty " + animal +
            " opened fire with their Browning 50 caliber " + food +
            " guns, for which they are so widely known and respected. Our anti-air " + food +
            " engagement was successful as we lured the " + animal2 + "s to a clearing. As everyone knows, "
            + food + " is the natural and preferred food with which one would feed such a beast."
        " As we blasted through the border crossing in a glorious scene unheard of since Bonnie and Clyde,"
        " I knew one thing for sure, and one thing only.\n" +
            "I have to stop eating " + food + " before bed, these dreams are getting weird.";

        document.getElementById('output').innerHTML += "<img src=images/plate.jpg>";
    }
}
