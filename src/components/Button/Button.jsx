//Styles
import styles from './Button.module.scss'

//Images
import paper from 'images/icon-paper.svg'
import rock from 'images/icon-rock.svg'
import scissors from 'images/icon-scissors.svg'

export const Button = ({ type, handleClick = () => {} }) => {
	const classNameForButton = () => {
		if (type === 'rock') return styles.rock
		else if (type === 'paper') return styles.paper
		else return styles.scissors
	}

	const handleImage = () => {
		if (type === 'rock') return rock
		else if (type === 'paper') return paper
		else return scissors
	}

	return (
		<div onClick={() => handleClick(type)} className={styles.button}>
			<div
				className={`${styles.border} ${type ? classNameForButton() : ''}`}
			></div>
			<div className={styles.image}>
				<img src={handleImage()} alt={type} />
			</div>
		</div>
	)
}
