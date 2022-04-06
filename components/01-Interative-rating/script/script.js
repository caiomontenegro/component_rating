let evaluation = null
let selected = false
let number = null


function grading(rating) {
    if(selected === false ) {
        number = rating
    }
    selected = true
    console.log(number)
    let confirm = document.querySelector('div.confirm-js')
    let button = document.getElementById(rating)
    evaluation = rating
    confirm.innerHTML = `You selected ${evaluation} out of 5`
    button.style.backgroundColor = '#fb7413'
    button.style.color = 'white'
    if (number !== evaluation) {
        let old = document.getElementById(number)
        old.style.backgroundColor = '#344250'
        old.style.color = '#7c8798'
        console.log('desliga o anterior')
        number = rating
        console.log(number)
    }
}

function confirm() {
    let rating = document.querySelector('div.rating')
    let ratingDone = document.querySelector('div.rating--done')
    if(evaluation === null) {
        alert('Please enter your rating before submitting your review.')
    } else {
        rating.style.display = 'none'
        ratingDone.style.display = 'flex'
    }
}