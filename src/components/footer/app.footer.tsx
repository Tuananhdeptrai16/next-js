'use client'
import { useHasMounted } from "@/utils/cusomHook";
import { AppBar, Container } from "@mui/material";
import React from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'; 
const AppFooter = () => {
  const hasMounted  = useHasMounted()
  if(!hasMounted) return(<></>)
  return (
    <div>
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0, background : "#ffff" }}>
        <Container  sx={{  background : "#ffff", display: 'flex', gap : 5 }}>
            <AudioPlayer
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
                volume={0.5}
                style={{
                    boxShadow : 'unset'
                }}
            />
            <div style={{
                display :"flex", 
                justifyContent : 'center',
                flexDirection: 'column' 
            }}>
                <div style={{color : "#333"}}>Eric</div>
                <div style={{color : "#333"}}>Who I am </div>
            </div>
        </Container>
      </AppBar>
    </div>
  );
};

export default AppFooter;
