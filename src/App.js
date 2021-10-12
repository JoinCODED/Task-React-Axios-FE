import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ChatRoom from './components/ChatRoom';
import ChatRoomsList from './components/ChatRoomsList';
import { Route, Switch } from 'react-router';
import axios from 'axios';

function App() {

  const [rooms, setRooms] = useState([])

  useEffect (() => {
    fetchRooms();
  }, []);
  

  const fetchRooms = async ()  => {
    try {
      const response = await axios.get(
        "https://coded-task-axios-be.herokuapp.com/rooms"
      );
      setRooms(response.data);
    } catch (error) {
      console.log(error);
    }

  }


  const createRoom = async (newRoom) => {
  try {

  }  catch (error) {
    console.log(error);
  }
}
    // to do : call BE to create a room
    
  

  const deleteRoom = (id) => {
    // to do : call BE to delete a room
  }

  return (
    <div className="__main">
      <div className="main__chatbody">
        <Switch>
          <Route path="/room/:roomSlug">
            <ChatRoom rooms={rooms} />
          </Route>
          <Route exact path="/">
            <center>
              <ChatRoomsList rooms={rooms} />
            </center>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
