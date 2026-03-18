
export function time(timeFrom: string, timeTo: string) {
    const hourFrom = Number(timeFrom.slice(0, 2))
    const minuteFrom = Number(timeFrom.slice(3))
    
    const hourTo = Number(timeTo.slice(0, 2))
    const minuteTo = Number(timeTo.slice(3))

    let hour;
    let minute;

    let to = hourTo*60 + minuteTo
    let from = hourFrom*60 + minuteFrom
    if (from >= to) {
        from = 24*60 - from
        minute = (to + from)%60
        hour =  Math.floor((to + from)/60)
    } else {
        minute = (to - from)%60
        hour =  Math.floor((to - from)/60)
    }

    return hourAndMinute(hour, minute)
}

function hourAndMinute(hour: number, minute: number) {
    let a;
    let b;
    if (hour < 10) {
        a = '0' + hour.toString()
    } else {
        a = hour.toString()
    }

    if (minute < 10) {
        b = '0' + minute.toString()
    } else {
        b = minute.toString()
    }

    return a + ':' + b
}