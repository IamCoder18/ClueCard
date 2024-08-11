const x = "❌"
const y = "✅"
const empty = "🔲"

document.querySelectorAll(".tdSelect").forEach((td) => {
    td.addEventListener("click", (e) => {
        if(e.target.innerHTML == empty){
            e.target.innerHTML = y;
            console.log(e.target.parentNode.parentNode.parentNode.parentNode)
            e.target.parentNode.parentNode.parentNode.parentNode.style.backgroundColor = "#e10101"
        }
        else if(e.target.innerHTML == y){
            e.target.innerHTML = x;
            e.target.parentNode.parentNode.parentNode.parentNode.style.backgroundColor = "#85e989"
        }
        else if(e.target.innerHTML == x){
            e.target.innerHTML = empty;
            e.target.parentNode.parentNode.parentNode.parentNode.style.backgroundColor = "#00000000"
        }
    });
})
