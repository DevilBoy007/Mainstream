// list of dictionaries that describe events on the calendar
const events = [
    {"date": "2024-5-3", "title": "The Garage", "description": "Mainstream is coming to rock the Garage!"},
    {"date": "2024-5-10", "title": "Whiskey Row", "description": "Mainstream is coming to bring a slow, jazzy vibe to Whiskey Row!"},
    {"date": "2024-5-13", "title": "The Tap", "description": "Get elevated with Mainstream at the Tap!"},
]


let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".calendar-dates");
const currdate = document.querySelector(".calendar-current-date");
const prenexIcons = document.querySelectorAll(".calendar-navigation span");

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

// Function to generate the calendar
const manipulate = () => {

    let dayone = new Date(year, month, 1).getDay();
    let lastdate = new Date(year, month + 1, 0).getDate();
    let dayend = new Date(year, month, lastdate).getDay();
    let monthlastdate = new Date(year, month, 0).getDate();

    let lit = "";

    for (let i = dayone; i > 0; i--) {
        lit +=
            `<li class="inactive">${monthlastdate - i + 1}</li>`;
    }

    for (let i = 1; i <= lastdate; i++) {

        let style; 
        
        if (i === new Date().getDate() && year === new Date().getFullYear() && month === new Date().getMonth()) {
            style = "active"
        } else if (events.some(event => event.date == `${year}-${month + 1}-${i}`)) {
            style = "event" 
        } else {
            style = ""
        }

        lit += `<li class="${style}">${i}</li>`;
    }

    for (let i = dayend; i < 6; i++) {
        lit += `<li class="inactive">${i - dayend + 1}</li>`
    }

    currdate.innerText = `${months[month]} ${year}`;
    day.innerHTML = lit;
}

manipulate();

prenexIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        month = icon.id === "calendar-prev" ? month - 1 : month + 1;
        if (month < 0 || month > 11) {
            date = new Date(year, month, new Date().getDate());
            year = date.getFullYear();
            month = date.getMonth();
        }
        else {
            date = new Date();
        }
        manipulate();
    });
});
