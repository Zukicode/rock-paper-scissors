//Styles
import styles from './Game.module.scss'

//Components
import { Choose } from 'components/Choose/Choose'
import { Result } from 'components/Result/Result'

//Redux
import { useSelector } from 'react-redux'

export const Game = () => {
	const { isEnd } = useSelector(state => state.game)

	return <div className={styles.game}>{!isEnd ? <Choose /> : <Result />}</div>
}
