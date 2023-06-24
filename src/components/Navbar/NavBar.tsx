import styles from './NavBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'

const NavBar: React.FC = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.iconLeft}>
        <FontAwesomeIcon icon={faBars} size="3x" />
      </div>
      <h1 className={styles.title}>Título</h1>
      <div className={styles.iconRight}>
        <FontAwesomeIcon icon={faSearch} size="3x" />
      </div>
    </header>
  )
}

export default NavBar
