// list of dictionaries that describe events on the calendar
const events = [
    { "date": "2024-6-1", "title": "Quesos", "time": "6:30p","description": "Sidestream is coming to Quesos in Plainfield, IN!", "link": "https://cl.ison24.com/#/sn/newRv?id=3e5709f8-12b9-11ee-b5f3-02915a867417" },
    { "date": "2024-6-8", "title": "Inspire Music Collective", "time": "6:30p","description": "Mainstream is partnering with Inspire Music Collective", "link": "https://www.inspiremusiccollective.org/events-1" },
    { "date": "2024-6-12", "title": "Ale Emporium (Fishers)", "time": "8:30p","description": "The Sidestream duo will be entertaining dinnergoers all night long!", "link": "https://aleemporium.securetree.com/Locations/Fishers/" },
    { "date": "2024-6-14", "title": "Ale Emporium (Fishers)", "time": "8:30p","description": "The Sidestream duo will be entertaining dinnergoers all night long!", "link": "https://aleemporium.securetree.com/Locations/Fishers/" },
    { "date": "2024-6-15", "title": "Kilroy's Bar & Grill (Broad Ripple)", "time": "8:00p","description": "Sidestream will be playing on the patio outside. It's sure to be a hot night of music!", "link": "https://www.kilroysindy.com" },
    { "date": "2024-6-22", "title": "The Social View", "time": "8:00p","description": "Mainstream is keeping the dinnertime vibes at The Social View.", "link": "#" },
    { "date": "2024-7-6", "title": "Live on the Lake @ Cicero", "time": "6:00p", "description": "Catch Mainstream in an all-exclusive laketop performance. The band will be set up on a pontoon in Cicero's Morse Reservoir, floating around spreading positivity through music.", "link": "#" },
    { "date": "2024-7-7", "title": "The Garage", "time": "4:00p", "description": "Mainstream is coming to The Garage downtown to rock & roll with the people!", "link": "https://www.garageindy.com/entertainment" },
    { "date": "2024-7-20", "title": "Britton Tavern", "time": "10:00p", "description": "Mainstream will be at the Britton Tavern to rock & roll all night!", "link": "http://thebrittontavern.co/calendar" },
    { "date": "2024-8-3", "title": "Ale Emporium (Greenwood)", "time": "8:30p", "description": "Mainstream will be entertaining dinnergoers all night long!", "link": "https://aleemporium.securetree.com/Locations/Greenwood/" },
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
            title = events.find(event => event.date == `${year}-${month + 1}-${i}`).description;
            url = events.find(event => event.date == `${year}-${month + 1}-${i}`).link;
        } else {
            style = ""
            url = "#"
        }
        console.log("creating event", style, title, url)
        lit += `<li class="${style}" title="${title}" onclick="window.open('${(url?url:"#")}')">${i}</li>`;
    }

    for (let i = dayend; i < 6; i++) {
        lit += `<li class="inactive">${i - dayend + 1}</li>`
    }

    currdate.innerText = `${months[month]} ${year}`;
    day.innerHTML = lit;
}

function buildSidePanel() {
    ulist = document.getElementById("ulist")
    events.forEach(function (e) {
        let splitDate = e.date.split("-")
        if (new Date(splitDate[0],splitDate[1]-1,splitDate[2]) < new Date() && splitDate[2] != new Date().getDate() ) { return }
        let elm = ""
        let dateStr = new Date(splitDate[0], splitDate[1] - 1, splitDate[2]).toString()
        elm += `<li onclick="window.open('${e.link}')">
                    <span>${dateStr.substring(0,dateStr.indexOf("2024")-1)} - ${e.title}</span>
                    <p>${e.time}</p>
                </li><br>`
        ulist.innerHTML += elm
    })
}

manipulate();
buildSidePanel();

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
