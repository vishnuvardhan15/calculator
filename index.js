const btns = document.querySelectorAll(".btn");
const dis =document.querySelectorAll("#disNum")
console.log(dis[0].innerText)
btns.forEach((elem)=>{
    elem.addEventListener("click",(e)=>{
        try {
            if(e.target.innerText=="="){
                dis[0].innerText=eval(dis[0].innerText)
            }
            else{
                dis[0].innerText=dis[0].innerText+e.target.innerText
            }
        } catch (error) {
            console.log(error)
            dis[0].innerText=""
        }
    });
})