// Accordion Functionality
let acc = document.getElementsByClassName("accordion-btn");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Booking Functionality
document.querySelectorAll(".select-btn").forEach(btn => {
    btn.addEventListener("click", function() {
        const row = this.parentElement.parentElement;
        const date = row.cells[0].innerText;
        const startTime = row.cells[1].innerText;
        const endTime = row.cells[2].innerText;

        document.getElementById("session-date").innerText = date;
        document.getElementById("session-start").innerText = startTime;
        document.getElementById("session-end").innerText = endTime;
    });
});

// Pagination buttons (can be connected with backend logic)
document.getElementById("prev-btn").addEventListener("click", function() {
    // Logic for previous page
});

document.getElementById("next-btn").addEventListener("click", function() {
    // Logic for next page
});
