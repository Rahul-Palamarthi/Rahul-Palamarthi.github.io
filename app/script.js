const nav = document.querySelector("nav");
const navToggle = document.querySelector(".mobileNavToggle");
const emptyNav = document.querySelector(".emptyNav");

navToggle.addEventListener("click", () => {
	const visibility = nav.getAttribute("data-visible");

	if (visibility === "false") {
		nav.setAttribute("data-visible", true);
		navToggle.setAttribute("aria-expanded", true);
		emptyNav.style.display = "inline";
	} else {
		nav.setAttribute("data-visible", false);
		navToggle.setAttribute("aria-expanded", false);
		emptyNav.style.display = "none";
	}
});

const navLinks = Array.from(document.querySelector(".navUl").children);

for (var i = 0; i < navLinks.length; i++) {
	navLinks[i].addEventListener("click", () => {
		nav.setAttribute("data-visible", false);
		navToggle.setAttribute("aria-expanded", false);
		emptyNav.style.display = "none";
	});
}

emptyNav.addEventListener("click", () => {
	nav.setAttribute("data-visible", false);
	navToggle.setAttribute("aria-expanded", false);
	emptyNav.style.display = "none";
});

const btnsContainer = document.querySelector(".navUl");
const btns = btnsContainer.querySelectorAll("li");

btns.forEach((element) => {
	element.addEventListener("click", () => {
		const activeElement = document.querySelector(".active");
		activeElement.classList.remove("active");
		element.classList.add("active");
	});
});

const backToTop = document.querySelector(".backToTop");
console.log(backToTop);

window.onscroll = () => {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		backToTop.style.display = "inline";
	} else {
		backToTop.style.display = "none";
	}
};

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
