const messages = {
    'no_races': 'Κανένας αγώνας',
    'error_loading': 'Σφάλμα φόρτωσης:',
    'empty': 'άδειο',
    'failed_loading': 'Failed to load races'
};

document.addEventListener('DOMContentLoaded', () => {
    const calendarBody = document.getElementById('calendar-body');
    const currentMonthDisplay = document.getElementById('current-month');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    const raceList = document.getElementById('race-list');

    let currentDate = new Date();
    let races = [];

    // Fetch races from the backend
    async function fetchRaces() {
        try {
            const response = await fetch('https://racelist.gr/races.json');
            if (!response.ok) throw new Error(messages.failed_loading);

            races = await response.json();
            renderCalendar(currentDate);
            renderRaces(currentDate);
        } catch (error) {
            raceList.innerHTML = `<li>${messages.error_loading} ${error.message}</li>`;
        }
    }

    // Render the calendar for the current month
    function renderCalendar(date) {
        calendarBody.innerHTML = ''; // Clear previous calendar
        const year = date.getFullYear();
        const month = date.getMonth();

        currentMonthDisplay.textContent = date.toLocaleString('el-GR', { month: 'long', year: 'numeric' });

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

        let dayCount = 1;

        for (let i = 0; i < 6; i++) {
            let row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                let cell = document.createElement('td');

                if (i === 0 && j < firstDayOfMonth) {
                    cell.classList.add(messages.empty);
                } else if (dayCount > lastDateOfMonth) {
                    cell.classList.add(messages.empty);
                } else {
                    cell.textContent = dayCount;

                    // Check if the day has events
                    const currentDay = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayCount).padStart(2, '0')}`;
                    const hasEvent = races.some(race => race.Date === currentDay);

                    if (hasEvent) {
                        const dot = document.createElement('div');
                        dot.classList.add('event-dot');
                        cell.appendChild(dot);
                    }

                    dayCount++;
                }

                row.appendChild(cell);
            }

            calendarBody.appendChild(row);

            // Stop adding rows if the month is fully displayed
            if (dayCount > lastDateOfMonth) break;
        }
    }

    // Render races for the selected month
    function renderRaces(date) {
        raceList.innerHTML = ''; // Clear the race list
        const selectedYear = date.getFullYear();
        const selectedMonth = date.getMonth() + 1; // JavaScript months are zero-based

        // Sort by date
        races.sort((a, b) => new Date(a.Date) - new Date(b.Date));

        const filteredRaces = races.filter(race => {
            const raceDate = new Date(race.Date);
            return (
                raceDate.getFullYear() === selectedYear &&
                raceDate.getMonth() + 1 === selectedMonth
            );
        });

        if (filteredRaces.length === 0) {
            raceList.innerHTML = `<li>${messages.no_races}</li>`;
            return;
        }

        filteredRaces.forEach(race => {
            const li = document.createElement('li');
            li.innerHTML = renderRace(race);
            raceList.appendChild(li);
        });
    }

    function renderRace(race) {
        let text = `
                <strong>${race.Title}</strong> - ${race.Date} ${race.Location}<br>
            `;
        if (race.Distances && race.Distances.length > 0) {
            text += `<b>Αποστάσεις</b>: ${race.Distances.join(", ")} - `;
        }

        if (race.SignupLink) {
            text += `<a href=${race.SignupLink}?utm_src=racelist.gr>Εγγραφή<a>`
        }
        return text;
    }

    // Event Listeners for Month Navigation
    prevMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
        renderRaces(currentDate);
    });

    nextMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
        renderRaces(currentDate);
    });

    // Initial Fetch and Render
    fetchRaces();
});

