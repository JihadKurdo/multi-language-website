
var btn = document.querySelector("button"),
currentLanguage = document.querySelector("[data-current]"),
target = document.querySelectorAll("[data-target]"),
source = [
	{
		eng : "Hello World!", //English
		es : "Hola Mundo!" //Spanish
	},
	{
		eng : "Switch Language", //English
		es : "Cambiar De Idioma" //Spanish
	},
]

const lang = localStorage.getItem("lang")

if (lang == "eng" || lang == null){
	for(i = 0; i < source.length; i++){
		target[i].textContent = source[i].eng
	}
	currentLanguage.textContent = "English"
}
else if (lang == "es"){
	for(i = 0; i < source.length; i++){
		target[i].textContent = source[i].es
	}
	currentLanguage.textContent = "Spanish"
}

btn.addEventListener("click", () => {
	if (lang == "es"){
		localStorage.setItem("lang","eng")
	}
	else if (lang == "eng" || lang == null){
		localStorage.setItem("lang","es")
	}
	window.location = ""
})
