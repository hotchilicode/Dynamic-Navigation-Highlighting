links = document.querySelectorAll(".nav_links");

        links.forEach(link => {
            link.addEventListener("click", () => {
                document.querySelector(".active")?.classList.remove("active");
                link.classList.add("active");
            });
        });




let age = 21;

let checkAge = age >= 18 ? "You are old enough to drive" : "You are not old enough to drive";

console.log(checkAge);