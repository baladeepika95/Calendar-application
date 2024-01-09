const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const calendarGrid = document.getElementById("calendarGrid");
const currentMonthLabel = document.getElementById("currentMonth");
const currentYearLabel = document.getElementById("currentYear");
const monthSelector = document.getElementById("month");
const yearSelector = document.getElementById("year");
2
function generateCalendar(year, month) {
  calendarGrid.innerHTML = "";89+
  constDay - new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  
  currentMonthLabel.textContent = monthNames[month];
  currentYearLabel.textContent = year;
  
  for (let i = 0; i < firstDay; i++) {
      const emptyDay = document.createElement("div");
      calendarGrid.appendChild(emptyDay);
  }
  
  for (let day = 1; day <= lastDate; day++) {
      const calendarDay = document.createElement("div");
      calendarDay.textContent =
      day;
      calendarGrid.appendChild(calendarDay);
  }
}

function updateCalendar() {
  const selectedMonth = monthSelector.value;
  const selectedYear = yearSelector.value;
  generateCalendar(selectedYear, selectedMonth);
}

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

for (let year = currentYear - 50; year <= currentYear + 50; year++) {
  const option = document.createElement("option");
  option.value = year;
  option.textContent = year;
  yearSelector.appendChild(option);
}

monthSelector.selectedIndex = currentDate.getMonth();
yearSelector.selectedIndex = 50; // Select current year by default
generateCalendar(currentYear, currentDate.getMonth());
