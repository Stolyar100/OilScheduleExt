let sdate = document.getElementById('sdate')
let edate = document.getElementById('edate')
let buttonsBlock = sdate.parentNode.parentNode.parentNode.parentNode.lastChild

buttonsBlock.style.display = 'flex'
buttonsBlock.style.justifyContent = 'space-between'

let autoCompleteButton = document.createElement('button')
autoCompleteButton.textContent = 'Автоматично на місяць'
autoCompleteButton.className = 'btn btn-primary'
buttonsBlock.prepend(autoCompleteButton)
