const nav = document.querySelector("nav");
const navToggle = document.querySelector(".mobileNavToggle");

navToggle.addEventListener("click", () => {
	const visibility = nav.getAttribute("data-visible");

	if (visibility === "false") {
		nav.setAttribute("data-visible", true);
		navToggle.setAttribute("aria-expanded", true);
	} else {
		nav.setAttribute("data-visible", false);
		navToggle.setAttribute("aria-expanded", false);
	}
});

const navLinks = document.querySelector(".navUl").children;

for (var i = 0; i < navLinks.length; i++) {
	navLinks[i].addEventListener("click", () => {
		nav.setAttribute("data-visible", false);
		navToggle.setAttribute("aria-expanded", false);
	});
}

const inputParent = document.querySelectorAll(".inputContainer");
const input = Array.from(document.querySelectorAll("input[placeholder]"));

input.forEach((element) => {
	element.addEventListener("mouseover", () => {
		inputParent[input.indexOf(element)].style.border = "2px solid var(--primaryColor)";
	});

	element.addEventListener("click", () => {
		inputParent[input.indexOf(element)].style.border = "2px solid var(--primaryColor)";
	});

	element.addEventListener("mouseout", () => {
		inputParent[input.indexOf(element)].style.border = "2px solid var(--lightgrey)";
	});
});

