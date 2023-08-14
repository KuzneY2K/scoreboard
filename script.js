const teamOneButton = document.getElementsByClassName('team-one-button')[0]
const teamTwoButton = document.getElementsByClassName('team-two-button')[0]
const teamOneButton2 = document.getElementsByClassName('team-one-button-plus3')[0]
const teamTwoButton2 = document.getElementsByClassName('team-two-button-plus3')[0]
const teamOneScoreOutput = document.getElementsByClassName('team-one-score')[0]
const teamTwoScoreOutput = document.getElementsByClassName('team-two-score')[0]
const resetButton = document.getElementsByClassName('reset-button')[0]

// Default Score Values

let teamOneScore = Number(0)
let teamTwoScore = Number(0)

document.addEventListener('DOMContentLoaded', function () {
    teamOneScoreOutput.innerHTML = Number(0)
    teamTwoScoreOutput.innerHTML = Number(0)
})

// Click events

teamOneButton.addEventListener('click', function () {
    console.log('Team one score logged +1.')
    teamOneScore += Number(1)
    teamOneScoreOutput.innerHTML = teamOneScore
    if (teamOneScore >= 21) {
        alert('Team one is the winner.')
        resetScores()
        gameOver()
    } else if (teamOneScore > teamTwoScore) {
        teamOneScoreOutput.classList.add('lead')
        teamTwoScoreOutput.classList.remove('lead')
    } else {
        teamOneScoreOutput.classList.remove('lead')
        teamTwoScoreOutput.classList.add('lead')
    }
})

teamTwoButton.addEventListener('click', function () {
    console.log('Team two score logged +1.')
    teamTwoScore += Number(1)
    teamTwoScoreOutput.innerHTML = teamTwoScore
    if (teamTwoScore >= 21) {
        alert('Team two is the winner.')
        resetScores()
    } else if (teamTwoScore > teamOneScore) {
        teamTwoScoreOutput.classList.add('lead')
        teamOneScoreOutput.classList.remove('lead')
    } else {
        teamTwoScoreOutput.classList.remove('lead')
        teamOneScoreOutput.classList.add('lead')
    }
})

teamOneButton2.addEventListener('click', function () {
    console.log('Team one score logged +1.')
    teamOneScore += Number(3)
    teamOneScoreOutput.innerHTML = teamOneScore
    if (teamOneScore >= 21) {
        alert('Team one is the winner.')
        resetScores()
    } else if (teamOneScore > teamTwoScore) {
        teamOneScoreOutput.classList.add('lead')
        teamTwoScoreOutput.classList.remove('lead')
    } else {
        teamOneScoreOutput.classList.remove('lead')
        teamTwoScoreOutput.classList.add('lead')
    }
})

teamTwoButton2.addEventListener('click', function () {
    console.log('Team two score logged +1.')
    teamTwoScore += Number(3)
    teamTwoScoreOutput.innerHTML = teamTwoScore
    if (teamTwoScore >= 21) {
        alert('Team two is the winner.')
        resetScores()
    } else if (teamTwoScore > teamOneScore) {
        teamTwoScoreOutput.classList.add('lead')
        teamOneScoreOutput.classList.remove('lead')
    } else {
        teamTwoScoreOutput.classList.remove('lead')
        teamOneScoreOutput.classList.add('lead')
    }
})

// Reset

resetButton.addEventListener('click', function () {
    resetScores()
})

function resetScores() {
    alert('Resetting score....')
    teamOneScore = Number(0)
    teamTwoScore = Number(0)
    teamOneScoreOutput.innerHTML = teamOneScore
    teamTwoScoreOutput.innerHTML = teamTwoScore
}