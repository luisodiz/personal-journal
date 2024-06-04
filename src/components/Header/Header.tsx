import {cn} from '@bem-react/classname'

import './Header.scss'

const cnHeader = cn('Header')
const cnLogo = cn('Logo')

const Header = () => {
  return (
    <div className={cnHeader()}>
      <img className={cnLogo()} src="/img/logo.svg" alt="Journal Logo" />
    </div>
  )
}

export default Header
