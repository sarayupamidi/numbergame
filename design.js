var num = (Math.ceil(Math.random()*100));
var count=1;
console.log(num);
function find()
{
    var numUser = parseInt(document.getElementById("n1").value);
    if(numUser == num)
    {
        document.getElementById("res").textContent = "Congratulation!!! You guessed the number in "+count+" tries.";
    }
    else if(numUser > num)
    {
        document.getElementById("res").textContent = "Try with a Smaller Number.";
    }
    else{
        document.getElementById("res").textContent = "Try with a Greater Number.";
    }
    document.getElementById("tries").textContent = count;
    count++;
}    