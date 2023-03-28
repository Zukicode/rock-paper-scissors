//Styles
import styles from './Rules.module.scss'

//Icon
import { closeModal } from 'features/slice/modalSlice'
import close from 'images/icon-close.svg'
import rules from 'images/image-rules.svg'
import { useDispatch } from 'react-redux'

export const Rules = () => {
	const dispatch = useDispatch()

	const handleClick = () => dispatch(closeModal())

	return (
		<div className={styles.opacity}>
			<div className={styles.rules}>
				<div className={styles.header}>
					<h1>Rules</h1>
					<button onClick={handleClick} className={styles.close}>
						<img src={close} alt='close' />
					</button>
				</div>

				<div className={styles.image}>
					<img src={rules} alt='rules' />
				</div>
			</div>
		</div>
	)
}
