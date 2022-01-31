import { format, intervalToDuration, parseISO} from "date-fns";

const UI_ELEMENTS = {
    form: document.querySelector('.form'),
    input_response: document.querySelector('.response'),
}

UI_ELEMENTS.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const startDate = e.target.firstElementChild.value;
    const endDate = format(new Date(), "yyyy-MM-dd'T'HH:mm")
    const {years, months, days, hours} = intervalToDuration({start: parseISO(startDate) ,end:  parseISO(endDate) })
    UI_ELEMENTS.input_response.textContent = `Years:${years}  Months:${months}  Days:${days}  Hours:${hours}`
})


