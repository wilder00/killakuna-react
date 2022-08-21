import PropTypes from 'prop-types'
import './ChatRoomItem.css'

const ChatRoomItem = ({data, ...props})=>{

  return (
    <div>
      chat romm item
    </div>
  )
}

ChatRoomItem.propTypes = {
  data: PropTypes.object.isRequired
}
export default ChatRoomItem