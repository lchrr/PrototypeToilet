const checkbox = 
document.querySelector("input[type='checkbox']");
checkbox.addEventListener("click", () => {
	document.body.classList.switch("dark");
})