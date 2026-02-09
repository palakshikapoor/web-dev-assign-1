function addEvent() {

    let list = document.getElementById("eventsList");

    let title = document.getElementById("title").value;
    let date = document.getElementById("date").value;
    let category = document.getElementById("category").value;
    let description = document.getElementById("description").value;

    if (title === "" || date === "") {
        alert("Please enter event title and date");
        return;
    }

    if (list.innerHTML.includes("No events")) {
        list.innerHTML = "";
    }

    let eventDiv = document.createElement("div");
    eventDiv.className = "event";

    eventDiv.innerHTML =
        '<button class="delete-btn" onclick="deleteEvent(this)">×</button>' +
        '<h4>' + title + '</h4>' +
        '<div class="date">📅 ' + date + '</div>' +
        '<div class="badge">' + category + '</div>' +
        '<p>' + description + '</p>';

    list.appendChild(eventDiv);

    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
}

function deleteEvent(button) {

    let eventCard = button.parentElement;
    eventCard.remove();

    let list = document.getElementById("eventsList");

    if (list.children.length === 0) {
        list.innerHTML = "No events yet. Add your first event!";
    }
}

function clearEvents() {

    let list = document.getElementById("eventsList");
    list.innerHTML = "No events yet. Add your first event!";
}

function addSampleEvents() {

    clearEvents();

    document.getElementById("title").value = "idea 3.0";
    document.getElementById("date").value = "2026-01-28";
    document.getElementById("category").value = "Social";
    document.getElementById("description").value = "it is best for innovation idea";

    addEvent();
}
