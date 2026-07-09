// Track Gym progress
// Program Start

// ── Helper ──
function createLogEntry(parentId, sets, reps) {
    var logList = document.getElementById(parentId);

    var entry = document.createElement("div");
    entry.classList.add("log-entry");

    var input = document.createElement("input");
    input.type = "text";
    input.readOnly = true;
    input.value = "Sets " + sets + "  ×  " + reps + " reps";

    input.addEventListener("click", function () {
        input.readOnly = false;
    });

    // var saveBtn = document.createElement("button");
    // saveBtn.classList.add("save-btn");
    // saveBtn.textContent = "Save";
    // saveBtn.addEventListener("click", function () {
        // input.readOnly = true;
    // });

    var del = document.createElement("button");
    del.classList.add("delete-btn");
    del.textContent = "Delete";
    del.addEventListener("click", function () {
        entry.remove();
    });

    entry.appendChild(input);
    // entry.appendChild(saveBtn);
    entry.appendChild(del);
    logList.appendChild(entry);
}

// ── Push ──
var pushButton = document.getElementById("push-button");
pushButton.addEventListener("click", function () {
    var sets = document.getElementById("sets").value;
    var reps = document.getElementById("repetitions").value;
    createLogEntry("push-log", sets, reps);
});

// ── Pull ──
var pullButton = document.getElementById("pull-button");
pullButton.addEventListener("click", function () {
    var sets = document.getElementById("pull-sets").value;
    var reps = document.getElementById("pull-reps").value;
    createLogEntry("pull-log", sets, reps);
});

// ── Legs ──
var legsButton = document.getElementById("legs-button");
legsButton.addEventListener("click", function () {
    var sets = document.getElementById("legs-sets").value;
    var reps = document.getElementById("legs-reps").value;
    createLogEntry("legs-log", sets, reps);
});

// ── Cardio ──
var cardioButton = document.getElementById("cardio-button");
cardioButton.addEventListener("click", function () {
    var sets = document.getElementById("cardio-sets").value;
    var reps = document.getElementById("cardio-reps").value;
    createLogEntry("cardio-log", sets, reps);
});

// ── Abs ──
var absButton = document.getElementById("abs-button");
absButton.addEventListener("click", function () {
    var sets = document.getElementById("abs-sets").value;
    var reps = document.getElementById("abs-reps").value;
    createLogEntry("abs-log", sets, reps);
});
