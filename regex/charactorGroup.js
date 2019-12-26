const {log} = console
const regex = /a[bc]d/

log(regex.test(`ad`))
log(regex.test(`abd`))
log(regex.test(`acd`))
log(regex.test(`abcd`))