import ChevronIcon from '../icons/ChevronIcon';
import UserAvatar from '../widgets/UserAvatar';
import './HeaderApp.css'
const HeaderApp = ({title, ...props})=>{

  return (
    <header id="headerApp" {...props}>
      <div className="header-app__lead-icon">
        <ChevronIcon direction="left"/>
      </div>
      <h1 className="header-app__title">{title}</h1>
      <div className="header-app__avatar">
        <UserAvatar 
          width='40'
          height='40'
          imageUrl="https://www.downloadclipart.net/medium/50732-female-user-icon-images.png" 
        />
      </div>
    </header>
  )
}

export default HeaderApp;