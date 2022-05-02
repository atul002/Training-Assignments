var currentDate = moment().format('DD-MMMM-YYYY');
const modalContainer = document.getElementById('modal-container');
var modalDate;

function showModal(date) {
	document.getElementById('modal-date').innerHTML = date;
	modalDate = date;
	modalContainer.classList.add('show');
}

function saveNote() {
	let note = document.forms['form']['note'].value;
	localStorage.setItem(`${modalDate}`, ` ${note}`);
	modalContainer.classList.remove('show');
	renderCalendar(currentDate);
}

const renderCalendar = (date) => {
	var month = moment(date).format('MMMM');
	var year = moment(date).format('YYYY');

	document.getElementById('date-heading').innerHTML = `${month + ' - ' + year}`;
	currentDate = date;

	document.getElementById('date-detail').innerHTML =
		moment().format('DD-MMMM-YYYY');

	const prevMonthLastDate = moment(currentDate)
		.subtract(1, 'months')
		.endOf('month')
		.format('D');

	const prevMonthLastDay = moment(currentDate)
		.subtract(1, 'months')
		.endOf('month')
		.format('d');

	let monthDays = document.getElementById('days');
	let days = '';

	if (prevMonthLastDay < 6) {
		const prevStartDate = prevMonthLastDate - prevMonthLastDay;
		for (let i = prevStartDate; i <= prevMonthLastDate; i++) {
			days += `<div class="dates prev-date">${i}</div>`;
		}
	}

	const currentMonthLastDate = moment(currentDate).endOf('month').format('DD');
	console.log(currentMonthLastDate);

	for (let i = 1; i <= currentMonthLastDate; i++) {
		let date = `${i}-${moment(currentDate).format('MM-YYYY')}`;
		if (
			i == moment(currentDate).format('DD') &&
			currentDate == moment().format('DD-MMMM-YYYY')
		) {
			days += `<div class="dates today" id="${date}" onclick="showModal(\'${date}\')">
      ${
				i +
				`<div class="note-desc"> <abbr title = "${
					localStorage.getItem(date) ?? ''
				}">${localStorage.getItem(date) ?? ''}</abbr></div>`
			}
      </div>`;
		} else {
			days += `<div class="dates" id="${date}" onclick = "showModal(\'${date}\')">
      ${
				i +
				`<div class="note-desc"> <abbr title = "${
					localStorage.getItem(date) ?? ''
				}">${localStorage.getItem(date) ?? ''}</abbr></div>`
			}
              </div>`;
		}
	}

	const currentMonthLastDay = moment(currentDate).endOf('month').format('d');

	for (let i = 1; i <= 6 - currentMonthLastDay; i++) {
		days += `<div class="dates next-date">${i}</div>`;
	}
	monthDays.innerHTML = days;
};

window.onload = function initiate() {
	renderCalendar(currentDate);
};

document.getElementById('prev').addEventListener('click', () => {
	renderCalendar(
		moment(currentDate).subtract(1, 'months').format('DD-MMMM-YYYY')
	);
});

document.getElementById('next').addEventListener('click', () => {
	renderCalendar(moment(currentDate).add(1, 'months').format('DD-MMMM-YYYY'));
});
