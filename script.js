document.addEventListener("DOMContentLoaded", function () {
    // Collapsible sections functionality
    const collapsibles = document.querySelectorAll(".collapsible-header");
    collapsibles.forEach((button) => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;
            const icon = this.querySelector("i");
            if (content.style.display === "block") {
                content.style.display = "none";
                icon.textContent = "expand_more";
            } else {
                content.style.display = "block";
                icon.textContent = "expand_less";
            }
        });
    });

    // Route-Grade Translator functionality
    const translatorForm = document.getElementById("translator-form");
    translatorForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const inputGrade = document
            .getElementById("grade-input")
            .value.trim()
            .toUpperCase();
        // Simplified mapping example (expand as needed)
        const gradeMap = {
            V1: "Font 5A",
            V2: "Font 5B",
            V3: "Font 5C",
            V4: "Font 6A",
            V5: "Font 6B",
            V6: "Font 6C",
            V7: "Font 7A",
            V8: "Font 7B",
            V9: "Font 7C",
            "FONT 5A": "V1",
            "FONT 5B": "V2",
            "FONT 5C": "V3",
            "FONT 6A": "V4",
            "FONT 6B": "V5",
            "FONT 6C": "V6",
            "FONT 7A": "V7",
            "FONT 7B": "V8",
            "FONT 7C": "V9",
        };
        const result = gradeMap[inputGrade] || "Grade conversion not found.";
        document.getElementById("conversion-result").textContent =
            "Equivalent: " + result;
    });
});
