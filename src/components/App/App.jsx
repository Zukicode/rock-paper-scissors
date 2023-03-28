//Styles
import styles from './App.module.scss'

//Components
import { Game } from 'components/Game/Game'
import { Header } from 'components/Header/Header'
import { Container } from '../Container/Container'

export const App = () => {
	return (
		<div className={styles.App}>
			<Container>
				<Header />
				<Game />
			</Container>
		</div>
	)
}
