const btn = document.querySelector(".btn");
const idSpan = document.querySelector(".adviceId")
const quote = document.getElementById("quote")


btn.addEventListener("click", () => {
    btn.disabled = true
    btn.classList.add("disabled")
    const f = setTimeout(() => {
        btn.removeAttribute("disabled")
    }, 2000);
    console.log("clicked")
    getData('https://api.adviceslip.com/advice').catch(error => {
        console.error("the catched error is ", error)
    })
})
async function getData(url){
    const response = await fetch(url);
    console.log(response)
    const data = await response.json()
    const id =  data["slip"].id
    const advice = data["slip"].advice
    console.log(data["slip"])
    idSpan.textContent =`#${id}`
    quote.textContent = `"${advice}"`
}
