const SCALEDRONE_APP_ID = "KggmNA4eK4RwJWET";
const ROOM_NAME = "observable-room";
const APP_OPENED_EVENT = "open";
const DATA_RECEIVED_EVENT = "data";

export default function scaledrone({ member, onInit, onMessageReceived }) {
  // INITIALIZE
  this.drone = new window.Scaledrone(SCALEDRONE_APP_ID, { data: member });

  // ON APP FIRST OPENED
  this.drone.on(APP_OPENED_EVENT, error => {
    if (!error) {
      onInit(this.drone.clientId);
    }
  });

  // ON MESSAGE RECEIVED
  const room = this.drone.subscribe(ROOM_NAME);
  room.on(DATA_RECEIVED_EVENT, message => {
    onMessageReceived(message);
  });

  return {
    sendMessage: text => {
      this.drone.publish({
        room: ROOM_NAME,
        message: { text, member, id: this.drone.clientId }
      });
    }
  };
}
