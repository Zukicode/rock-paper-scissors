//Styles
import styles from './Header.module.scss'

//Redux
import { useSelector } from 'react-redux'

export const Header = () => {
	const { score } = useSelector(state => state.game)

	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<h1>ROCK</h1>
				<h1>PAPER</h1>
				<h1>SCISSORS</h1>
			</div>

			<div className={styles.score}>
				<p>SCORE</p>
				<h1>{score}</h1>
			</div>
		</div>
	)
}
