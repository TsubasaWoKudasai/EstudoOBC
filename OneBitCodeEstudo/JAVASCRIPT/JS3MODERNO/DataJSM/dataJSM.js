const dayjs = require ("dayjs")

function bday(date) {
    const bday = dayjs(date)
    const today = dayjs ()

    const ageInYears = today.diff(bday, 'year')
    const nextBday = bday.add(ageInYears + 1, 'year')
    const daysToNextBday = nextBday.diff (today, 'day')
    
    console.log (` idade : ${ageInYears} `)
    console.log (`Proximo aniversario : ${nextBday.format("DD/MM/YYYY")}`)
    console.log (`Dias ate completar ${ageInYears + 1} anos : ${daysToNextBday}`)
}

bday ("1995-09-02")
