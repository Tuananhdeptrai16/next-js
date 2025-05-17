'use client'
import { useHasMounted } from "@/utils/cusomHook";
import { AppBar } from "@mui/material";
import React from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'; 
const AppFooter = () => {
  const hasMounted  = useHasMounted()
  if(!hasMounted) return(<></>)
      
  return (
    <div>
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0, background : "#f2f2f2" }}>
        <AudioPlayer
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
          volume={0.5}
          style={{
            boxShadow : 'unset'
          }}
        />
      </AppBar>
    </div>
  );
};

export default AppFooter;
