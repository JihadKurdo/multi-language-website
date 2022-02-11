
var btn = document.querySelector("button"),
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

if (lang == "eng"){
	for(i = 0; i < source.length; i++){
		target[i].textContent = source[i].eng
	}
}
else if (lang == "es" || lang == null){
	for(i = 0; i < source.length; i++){
		target[i].textContent = source[i].es
	}
}

btn.addEventListener("click", () => {
	if (lang == "es" || lang == null){
		localStorage.setItem("lang","eng")
	}
	else if (lang == "eng"){
		localStorage.setItem("lang","es")
	}
	window.location = ""
})