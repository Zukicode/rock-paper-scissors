//Styles
import styles from './App.module.scss'

//Components
import { Game } from 'components/Game/Game'
import { Header } from 'components/Header/Header'
import { Rules } from 'components/Rules/Rules'
import { Container } from '../Container/Container'

//Redux
import { showModal } from 'features/slice/modalSlice'
import { useDispatch, useSelector } from 'react-redux'

export const App = () => {
	const dispatch = useDispatch()
	const { isVisible } = useSelector(state => state.modal)

	const handleClick = () => dispatch(showModal())

	return (
		<div className={styles.App}>
			<Container>
				<Header />
				<Game />
				{isVisible && <Rules />}
			</Container>

			<button onClick={handleClick} className={styles.rules}>
				RULES
			</button>
		</div>
	)
}
