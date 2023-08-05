const btns = document.querySelectorAll(".btn");
const dis =document.querySelectorAll("#disNum")
console.log(dis[0].value)

btns.forEach((elem)=>{
    elem.addEventListener("click",(e)=>{
        console.log(e.target.innerText)
        try {
            if(e.target.innerText=="="){
                dis[0].value=eval(dis[0].value)
            }
            else{
                dis[0].value=dis[0].value+e.target.innerText
            }
        } catch (error) {
            dis[0].value=""
        }
    });
})
