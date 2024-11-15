const employees = {
    "abdul-sathar": {
        name: "Abdul Sathar",
        position: "Manager",
        email: "manager.btf@boscogrp.com",
        mobile: "+971 55 3009091",
        branch: "BTF"
    },
    "ahmed-abu-moghli": {
        name: "Ahmed Abu-Moghli",
        position: "Manager",
        email: "manager.btd@boscogrp.com",
        mobile: "553009176",
        branch: "BTD"
    },
    "muhammed-bilal": {
        name: "Muhammed Bilal",
        position: "Salesperson",
        email: "btd.sales@boscogrp.com",
        mobile: "544932861",
        branch: "BTD"
    }
    // Add more as needed
};

function showDetails(id) {
    const detailsDiv = document.getElementById("details");
    const employee = employees[id];
    document.getElementById("details-name").innerText = employee.name;
    document.getElementById("details-position").innerText = employee.position;
    document.getElementById("details-email").innerText = employee.email;
    document.getElementById("details-mobile").innerText = employee.mobile;
    document.getElementById("details-branch").innerText = employee.branch;
    detailsDiv.classList.remove("hidden");
}

function closeDetails() {
    document.getElementById("details").classList.add("hidden");
}
