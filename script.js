let sdate = document.getElementById('sdate').nextElementSibling
let edate = document.getElementById('edate').nextElementSibling

let faculty = document.getElementById('faculty')
let teacher = document.getElementById('teacher')
let group = document.getElementById('group')

let buttonsBlock = sdate.parentNode.parentNode.parentNode.parentNode.lastChild

let facultyValue = localStorage.getItem('faculty_value') || null
let teacherValue = localStorage.getItem('teacher_value') || null
let groupValue = localStorage.getItem('group_value') || null

buttonsBlock.style.display = 'flex'
buttonsBlock.style.justifyContent = 'space-between'

const setDateperiod = () => {
    let currentDate = new Date
    let [currentYear, currentMonth, currentDay] = [currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()]
    let nextDate = new Date(currentYear, currentMonth, currentDay + 30)
    let [nextYear, nextMonth, nextDay] = [nextDate.getFullYear(), nextDate.getMonth(), nextDate.getDate()]

    sdate.value = `${currentDay}.${currentMonth + 1}.${currentYear}`
    edate.value = `${nextDay}.${nextMonth + 1}.${nextYear}`
}

const saveFieldValues = () => {
    if (faculty.value !== '0') {
        localStorage.setItem('faculty_value', faculty.value)
        facultyValue = faculty.value
    }
    if (teacher.value !== '') {
        localStorage.setItem('teacher_value', teacher.value)
        teacherValue = teacher.value
        return
    }
    if (group.value !== '') {
        localStorage.setItem('group_value', group.value)
        groupValue = group.value
    }
}

const autoComplete = (e) => {
    e.preventDefault()

    if(faculty.value === '0' && facultyValue) faculty.value = facultyValue
    if(teacher.value === '' && teacherValue) teacher.value = teacherValue
    if(group.value === '' && groupValue) group.value = groupValue
    setDateperiod()

    saveFieldValues()
}

let autoCompleteButton = document.createElement('button')
autoCompleteButton.textContent = 'Автоматично на місяць'
autoCompleteButton.className = 'btn btn-primary'
autoCompleteButton.addEventListener('click', autoComplete)
buttonsBlock.prepend(autoCompleteButton)
