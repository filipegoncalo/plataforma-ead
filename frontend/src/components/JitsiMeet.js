import React, { useState, useEffect } from 'react';
import ProgressComponent from '@material-ui/core/CircularProgress';

function JitsiMeetComponent() {
  const [loading, setLoading] = useState(true);
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "30vh 70vh",
    gridTemplateRows: "100vh",
    gridTemplateAreas: "'menu main main' 'menu main main' 'menu main main'",
  };

  const main = {
    gridArea: 'main',
  }
  
  const menu = {
    gridArea: 'menu',
    background: "#282544",
  }

 function startConference() {
  try {
    const admin=true;
    const domain = 'meet.jit.si/';

    let config={};
    if(admin === true){

        config={
            remoteVideoMenu: {
                disableKick: true
            },
            disableRemoteMute: true
        };
    }

    const options = {
        //nome da sala esse nome é concatenado com o domain na url ex: meet.jit.si/{domain}/{rootname}
        roomName: 'Java I-Unisanta',
        userInfo: {
            //nome do usuario que aparecerá no chat
            email: 'email@jitsiexamplemail.com',
            displayName: 'William'
        },
        configOverwrite:config,

        interfaceConfigOverwrite:{


            DEFAULT_BACKGROUND:"#fff",
            DEFAULT_LOGO_URL:"https://i.pinimg.com/originals/ce/27/87/ce27870499a90e05363c91afe6b04aed.png",
            DEFAULT_LOCAL_DISPLAY_NAME: 'Eu',
            DEFAULT_REMOTE_DISPLAY_NAME: 'William',//nome que aparecerá para os outros usuarios(não inclui o chat)
            PROVIDER_NAME: 'William',//nome do professor
            HIDE_INVITE_MORE_HEADER: true,

            //recursos toolbar
            TOOLBAR_BUTTONS: [
                'microphone', 'camera', 'fullscreen','desktop',
                'chat', 'raisehand','tileview'
            ],

        },
      parentNode: document.getElementById('jitsi-container'),
   };

   const api = new window.JitsiMeetExternalAPI(domain, options);
   api.addEventListener('videoConferenceJoined', () => {
    console.log('Local User Joined');
    setLoading(false);
    api.executeCommand('AULA', 'Filipe');
   });
  } catch (error) {
   console.error('Failed to load Jitsi API', error);
  }
 }

 useEffect(() => {
  // verify the JitsiMeetExternalAPI constructor is added to the global..
  if (window.JitsiMeetExternalAPI) startConference();
  else alert('Jitsi Meet API script not loaded');
 }, []);

 return (
  <div style={containerStyle} >
   {loading && <ProgressComponent />}
   <div
    id="jitsi-container"
    style={main}
   />
   <div
    style={menu}
   />
  </div>
 );
}

export default JitsiMeetComponent;