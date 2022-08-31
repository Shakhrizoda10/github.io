import React from "react";
import ReactPlayer from "react-player";

function YouTube () {
  return ( 
    <div className="youTube">
      <h3>United Nations role in population issues</h3>
     <div> <ReactPlayer
        url="https://youtu.be/h2zyDizG8C4"/>
        </div>
     <div>
     <ReactPlayer
        url="https://youtu.be/guG_B7K8EMc"
      />
     </div>
      
    </div>
   );
}

export default YouTube ;