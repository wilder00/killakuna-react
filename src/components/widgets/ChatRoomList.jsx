import ChatRoomItem from './ChatRoomItem'
import './ChatRoomList.css'

const chatRooms = [
  {
    id: 5,
    unreadMessagesAmount: 2,
    contact:{
      id: 5,
      name: "Wilder",
      lastName: "Trujillo",
      nickname: "wilder_trujillo",
      picture: "https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-1/88944699_1301408693400563_7273104546828648448_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=RQoZyaHhOr0AX9lHRAq&_nc_oc=AQl6gFai8Pp3M9k8ccVmqpoM46uWzhi-Vx5T2r0DYh0udG60p3ykmNY-iXnJYj6eAFM&_nc_ht=scontent-lim1-1.xx&oh=00_AT_pSSqSXkEVXc2LMLkT47Up77-dE86XeaszQ9jBlg56yA&oe=63280046",
      statusMessage: "Soy tu padre!" 
    },
    lastMessage:{
      id: 5,
      message: "No me interesa lo que dijiste",
      userSenderId: 5,
      userTargetId: 1,
    },
  },
  {
    id: 6,
    unreadMessagesAmount: 0,
    contact:{
      id: 8,
      name: "Maria",
      lastName: "Ramirez",
      nickname: "mariaramirez123",
      picture: "https://rlv.zcache.com/svc/view?rlvnet=1&realview=113308183427909783&design=1dfb365f-a0e7-442f-b967-7564a1d9d678&size=%5B20.0000%2C20.0000%5D&media=posterpaper_semigloss&max_dim=1024",
      statusMessage: "Holis" 
    },
    lastMessage:{
      id: 5,
      message: "¿Cuando estás aquí?",
      userSenderId: 8,
      userTargetId: 1,
    },
  },
  {
    id: 7,
    unreadMessagesAmount: 2,
    contact:{
      id: 10,
      name: "Lizeth",
      lastName: "Marcas",
      nickname: "LMarcas",
      picture: "https://rlv.zcache.com/svc/view?pid=192678685376693620&rvtype=content&max_dim=246",
      statusMessage: "" 
    },
    lastMessage:{
      id: 5,
      message: "Hola!",
      userSenderId: 1,
      userTargetId: 10,
    },
  },
]


const ChatRoomList = () =>{

  return (
    <div id="chatRoomList">
      {
        chatRooms.map((chatRoom)=>{
          return (
            <ChatRoomItem data={chatRoom} key={chatRoom.id}/>
          )
        })
      }
    </div>
  )
}

export default ChatRoomList