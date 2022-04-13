let evaluation = null
let selected = false
let number = null


function setGrading(rating) {
    if(selected === false ) {
        number = rating
    }
    selected = true
    let confirm = document.querySelector('.confirm-js')
    let button = document.getElementById(rating)
    evaluation = rating
    confirm.innerHTML = `You selected ${evaluation} out of 5`
    
    button.classList.add('evaluation__set-grade')
    if (number !== evaluation) {
        let old = document.getElementById(number)
        old.classList.remove('evaluation__set-grade')
        number = rating
    }
}

let rating = document.querySelector('.rating-js')
let ratingBlock = document.querySelector('.rating--block-js')
let ratingDone = document.querySelector('.rating--done-js')

function confirm() {
    if(evaluation === null) {
        ratingBlock.style.display = 'flex'
        rating.style.display = 'none'
        return
    }
    rating.style.display = 'none'
    ratingDone.style.display = 'flex'
}

function goBack() {
    rating.style.display = 'flex'
    ratingBlock.style.display = 'none'
}

