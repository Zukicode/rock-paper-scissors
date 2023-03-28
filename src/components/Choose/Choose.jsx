//Styles
import styles from './Choose.module.scss'

//Component
import { Button } from 'components/Button/Button'

//Redux
import {
	botSelect,
	validateChoose,
	yourSelect,
} from 'features/slice/chooseSlice'
import { useDispatch } from 'react-redux'

export const Choose = () => {
	const dispatch = useDispatch()

	const yourChoose = type => {
		dispatch(botSelect())
		dispatch(yourSelect(type))
		dispatch(validateChoose())
	}

	return (
		<div className={styles.choose}>
			<div className={styles.chooseStyle}>
				<div className={styles.firstGroup}>
					<Button handleClick={yourChoose} type={'rock'} />
					<div className={styles.line}></div>
					<Button handleClick={yourChoose} type={'paper'} />
				</div>

				<div className={styles.lastGroup}>
					<div className={styles.line2}></div>
					<div className={styles.line3}></div>
					<Button handleClick={yourChoose} type={'scissors'} />
				</div>
			</div>
		</div>
	)
}
