document.querySelectorAll("td").forEach((td) => {
  td.addEventListener("click", (e) => {
    if(e.target.innerHTML == "🔲")
      e.target.innerHTML = "✅";
    else if(e.target.innerHTML == "✅")
      e.target.innerHTML = "❎";
    else if(e.target.innerHTML == "❎")
      e.target.innerHTML = "🔲";
  });
})
