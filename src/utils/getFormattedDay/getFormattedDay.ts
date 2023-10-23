/* returns abbreviated version of day in forecast by it`s date string */
export default function getFormattedDay(language: string, date: string): string {
    /* getting current day as an index */
    const currentDate = new Date(date);
    const currentDay = currentDate.getDay();

    /* defining arrays with abbreviations on both languages */
    const daysOfWeekEN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const daysOfWeekUK = ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

    /* returning desired abbreviation by language */
    if(language === "en") {
        return daysOfWeekEN[currentDay]
    }

    if(language === "uk") {
        return daysOfWeekUK[currentDay]
    }

    return ""
}