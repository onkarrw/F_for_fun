let i = 0;
let txt = 'Python Developer, web Developer'
let j = txt.length
let speed = 80;
let dem =  document.getElementById("demo")

function typeWriter() {
    if (i < txt.length) {
        
        dem.innerHTML+= txt.charAt(i)
        i++
        
        setTimeout(typeWriter, speed)
    }

    else
    {
       dem.innerHTML = null
       i=0
       typeWriter()

    

}





