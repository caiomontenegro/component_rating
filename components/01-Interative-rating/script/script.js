let evaluation = null


function grading(rating) {
    let confirm = document.querySelector('div.confirm-js')
    evaluation = rating
    confirm.innerHTML = `You selected ${evaluation} out of 5`
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