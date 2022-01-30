import { format, intervalToDuration, parseISO} from "date-fns";

const UI_ELEMENTS = {
    form: document.querySelector('.form'),
    input_response: document.querySelector('.response'),
}

UI_ELEMENTS.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const startDate = e.target.firstElementChild.value;
    const endDate = format(new Date(), "yyyy-MM-dd'T'HH:mm")
    const IntervalDateObject = intervalToDuration({start: parseISO(startDate) ,end:  parseISO(endDate) })
    const result =  `Years:${IntervalDateObject.years}  Months:${IntervalDateObject.months}  Days:${IntervalDateObject.days}  Hours:${IntervalDateObject.hours}`
    UI_ELEMENTS.input_response.textContent = result
   
})


