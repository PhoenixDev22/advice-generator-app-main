const btn = document.querySelector(".btn");
const idSpan = document.querySelector(".adviceId")
const quote = document.getElementById("quote")


btn.addEventListener("click", () => {
    btn.disabled = true
    btn.classList.add("disabled")
    const f = setTimeout(() => {
        btn.removeAttribute("disabled")
    }, 2000);

    getData('https://api.adviceslip.com/advice').catch((error)=> {
        const e = new Error(error)
        console.log("The catched error is ", e.message)
    })
})
async function getData(url){
    const response = await fetch(url);
    const data = await response.json()
    const id =  data["slip"].id
    const advice = data["slip"].advice

    idSpan.textContent =`#${id}`
    quote.textContent = `${advice}`
}
