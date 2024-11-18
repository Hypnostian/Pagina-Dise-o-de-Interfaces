document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');
    const eventListEl = document.getElementById('event-list');
    const selectedDateEl = document.getElementById('selected-date');
    const monthSelect = document.getElementById('month');
    const yearSelect = document.getElementById('year');

    const events = [
        {
            title: 'Celebración 30 años del programa de Psicología',
            start: '2024-10-31',
        },
        {
            title: 'Conferencia sobre Inteligencia Artificial',
            start: '2024-10-15',
        },
        {
            title: 'Feria de Emprendimiento',
            start: '2024-10-20',
        },
    ];

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        initialDate: '2024-10-01',
        locale: 'es',
        headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: '',
        },
        events: events,
        dateClick: function (info) {
            const clickedDate = info.dateStr;
            selectedDateEl.textContent = clickedDate;

            const dailyEvents = events.filter(event => event.start === clickedDate);

            if (dailyEvents.length > 0) {
                eventListEl.innerHTML = dailyEvents
                    .map(
                        event => `
                    <div class="event-item">
                        <p>${event.title}</p>
                        <button>Más información</button>
                        <button>Agendar</button>
                    </div>
                `
                    )
                    .join('');
            } else {
                eventListEl.innerHTML = '<p>Sin actividades</p>';
            }
        },
    });

    calendar.render();
});