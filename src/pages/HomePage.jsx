import HeaderApp from '../components/forLayouts/HeaderApp';
import ChatRoomList from '../components/widgets/ChatRoomList';
import UserList from '../components/widgets/UserList';
import './HomePage.css'



const HomePage = ()=>{

  return (
    <>
      <HeaderApp title="Mi titulo"/>
      <section id="homePage">
        <ChatRoomList/>
      </section>
    </>
  )
}

export default HomePage;