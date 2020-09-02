let sdate = document.getElementById('sdate').nextElementSibling
let edate = document.getElementById('edate').nextElementSibling
let buttonsBlock = sdate.parentNode.parentNode.parentNode.parentNode.lastChild

buttonsBlock.style.display = 'flex'
buttonsBlock.style.justifyContent = 'space-between'

const autoComplete = (e) => {
    e.preventDefault()

    let currentDate = new Date
    let [currentYear, currentMonth, currentDay] = [currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()]
    let nextDate = new Date(currentYear, currentMonth, currentDay + 30)
    let [nextYear, nextMonth, nextDay] = [nextDate.getFullYear(), nextDate.getMonth(), nextDate.getDate()]

    sdate.value = `${currentDay}.${currentMonth + 1}.${currentYear}`
    edate.value = `${nextDay}.${nextMonth + 1}.${nextYear}`
}

let autoCompleteButton = document.createElement('button')
autoCompleteButton.textContent = 'Автоматично на місяць'
autoCompleteButton.className = 'btn btn-primary'
autoCompleteButton.addEventListener('click', autoComplete)
buttonsBlock.prepend(autoCompleteButton)
