import PropTypes from 'prop-types'
import './UserAvatar.css'

const UserAvatar = ({letter,imageUrl, width="60", height="60", ...props}) => {

  return (
    <div className="user-avatar__container" {...props}>
      <div className="user-avatar">
        {letter && !imageUrl
          ? <span className="user-avatar__letter">{letter}</span> 
          : null
        }
        {
          imageUrl
          ? <img className="user-avatar__image" src={imageUrl} width={width} height={height} />
          : null
        }
      </div>
    </div>
  )
}

UserAvatar.propTypes = {
  letter: PropTypes.string,
  imageUrl: PropTypes.string
}

export default UserAvatar