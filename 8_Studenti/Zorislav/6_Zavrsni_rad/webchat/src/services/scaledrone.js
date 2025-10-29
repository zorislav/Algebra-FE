const SCALEDRONE_APP_ID = 'KggmNA4eK4RwJWET';
const ROOM_NAME = 'observable-room';
const APP_OPENED_EVENT = 'open';
const DATA_RECEIVED_EVENT = 'data';

export default function scaledrone({ member, onInit, onMessageReceived}){

  // Inicijalizacija
  let drone = null;
  drone = new window.Scaledrone(SCALEDRONE_APP_ID, { data: member });

  // Pri prvom otvaranju
  drone.on(APP_OPENED_EVENT, error => {
    if(!error){
      onInit(drone.clientId);
    }
  })

  // Kad stigne poruka
  const room =  drone.subscribe(ROOM_NAME);
  room.on(DATA_RECEIVED_EVENT, message => {
    onMessageReceived(message);
  })

  return {
    sendMessage: text => {
      drone.publish({
        room: ROOM_NAME,
        message: { text, member, id: drone.clientId }
      })
    }
  }

}