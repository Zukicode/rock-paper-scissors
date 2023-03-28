//Styles
import styles from './Result.module.scss'

//Components
import { Button } from 'components/Button/Button'
import { playAgain } from 'features/slice/chooseSlice'
import { useDispatch, useSelector } from 'react-redux'

export const Result = () => {
	const dispatch = useDispatch()
	const { result, yourPick, botPick } = useSelector(state => state.game)

	const handleClick = () => dispatch(playAgain())

	return (
		<div className={styles.result}>
			<div className={styles.pickSection}>
				<div className={styles.pick}>
					<h1>You Picked</h1>
					<Button type={yourPick} />
				</div>

				<div className={styles.endDesktop}>
					<div className={styles.end}>
						<h1>{result}</h1>
						<button onClick={handleClick}>Play Again</button>
					</div>
				</div>

				<div className={styles.pick}>
					<h1>The House Picked</h1>
					<Button type={botPick} />
				</div>
			</div>

			<div className={styles.endMobile}>
				<div className={styles.end}>
					<h1>{result}</h1>
					<button onClick={handleClick}>Play Again</button>
				</div>
			</div>
		</div>
	)
}
