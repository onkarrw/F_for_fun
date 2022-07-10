let i = 0;
let txt = 'Python Developer, web Developer, Photographer'
let speed = 80;

function typeWriter() {
    if (i < txt.length) {
        if (txt.charAt(i) == "/") {

            document.getElementById("demo").innerHTML += "<br>"
        }

        else {
            document.getElementById("demo").innerHTML += txt.charAt(i)
        }

        i++
        
        setTimeout(typeWriter, speed)
    }
}

function change()
{
    
        
        let el = document.getElementsByClassName("fa")

        console.log("working but of no use")


}