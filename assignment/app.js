const dish = document.getElementById("dish")

dish.addEventListener("click",(e)=>{
    dish.style.backgroundColor = "white"
})

while (1) {
    if(dish.style.backgroundColor == "white") {
        dish.style.backgroundColor = "gray"
    }
}