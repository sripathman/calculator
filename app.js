let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if  
 (button.innerHTML === "=") {
            try {
                input.value = eval(input.value);
            } catch (error) {
                input.value = "Error";
            }
        } else if (button.innerHTML === "Cl") {
            input.value = "";
        } else if (button.innerHTML === "Del") {
            input.value = input.value.slice(0, -1);
        } else {
            input.value += button.innerHTML;
        }
    });
});