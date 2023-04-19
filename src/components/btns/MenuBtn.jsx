import styles from './MenuBtn.module.scss'
import { useStore } from '@nanostores/react'
import { isMenuOpen } from '@store/globalStore'

const MenuBtn = () => {
  const $isMenuOpen = useStore(isMenuOpen)

  return (
    <button className={styles['menu-btn']} onClick={() => isMenuOpen.set(!$isMenuOpen)}>
      <span className={styles['menu-btn_icon']}>
        <span></span>
        <span></span>
      </span>
      <span className={styles['menu-btn_text']}>MENU</span>
    </button>
  )
}

export default MenuBtn