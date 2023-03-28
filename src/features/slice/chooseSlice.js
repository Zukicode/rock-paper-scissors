import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	yourPick: '',
	botPick: '',
	score: 0,
	isEnd: false,
	result: '',
}

export const chooseSlice = createSlice({
	name: 'choose',
	initialState,
	reducers: {
		validateChoose: state => {
			if (state.yourPick === state.botPick) state.result = 'Draw'
			else if (state.yourPick === 'rock' && state.botPick === 'paper')
				state.result = 'You lose'
			else if (state.yourPick === 'rock' && state.botPick === 'scissors') {
				state.result = 'You won'
				state.score = state.score + 1
			} else if (state.yourPick === 'paper' && state.botPick === 'scissors')
				state.result = 'You lose'
			else if (state.yourPick === 'paper' && state.botPick === 'rock') {
				state.result = 'You won'
				state.score = state.score + 1
			} else if (state.yourPick === 'scissors' && state.botPick === 'rock')
				state.result = 'You lose'
			else if (state.yourPick === 'scissors' && state.botPick === 'paper') {
				state.result = 'You won'
				state.score = state.score + 1
			}

			state.isEnd = true
		},
		yourSelect: (state, { payload }) => {
			state.yourPick = payload
		},
		botSelect: state => {
			const randomArr = ['rock', 'paper', 'scissors']
			state.botPick = randomArr[Math.floor(Math.random() * 3)]
		},
		playAgain: state => {
			state.isEnd = false
		},
	},
})

export const {
	botSelect,
	yourSelect,
	validateChoose,
	scoreIncrement,
	playAgain,
} = chooseSlice.actions

export default chooseSlice.reducer
