export const date = () => {
    let d = new Date()
    let res = [addZero(d.getDate()), addZero(d.getMonth() + 1), d.getFullYear()].join('.');
    let time = [addZero(d.getHours()), addZero(d.getMinutes()), addZero(d.getSeconds())].join(':')
    function addZero (value) { if (+value < 10) return '0' + value
        return value
    }
    return `${res} ${time}`
}