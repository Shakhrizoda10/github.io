import Layout from "../../shared_components/Layout";
import React from "react";

import YouTube from "../../shared_components/components/youTube";
function Population() {
    return ( 
        <>
         <Layout>
    <hr/>
    <div className="population">
        <div className="bg-pop">
            <div className="bg-pop-2">
            <h2>World population to reach 8 billion on 15 November 2022</h2>
        <p>Amid falling growth rates, global population projected to peak around 10.4 billion in the 2080s.The global population is projected to reach 8 billion on 15 November 2022, and India is projected to surpass China as the world’s most populous country in 2023, according to World Population Prospects 2022, released today on World Population Day.</p>
        </div>
        </div>

        {/* <div className="gradient-pop">
          <div className="growing-pop">
          <h2>
            Our growing population
            </h2>
            <p>In 1950, five years after the founding of the United Nations, world population was estimated at around 2.6 billion people. It reached 5 billion in 1987 and 6 billion in 1999.  In October 2011, the global population was estimated to be 7 billion. A global movement 7 Billion Actions was launched to mark this milestone. The world’s population is expected to increase by 2 billion persons in the next 30 years, from 7.7 billion currently to 9.7 billion in 2050 and could peak at nearly 11 billion around 2100.  

This dramatic growth has been driven largely by increasing numbers of people surviving to reproductive age, and has been accompanied by major changes in fertility rates, increasing urbanization and accelerating migration. These trends will have far-reaching implications for generations to come.

</p>
          </div>
          <div className="growing-img">
            <img src="https://www.un.org/sites/un2.un.org/files/styles/3x2-front-thumbnail/public/2022/08/afghan_girl.jpg?itok=yg0pBTiS" />
          </div>
        </div> */}

        <div>
        <div class="container-2">
  <div class="box">
    <img src="https://www.goodneighbors.org/images/us/mobile/201905/Fs.jpg"/>
    <span>United Nations</span>
  </div>
  <div class="box">
    <img src="https://storage.googleapis.com/afs-prod/media/media:d8c65e5b7a274e9ca3fcbed084d11eb9/3000.jpeg"/>
    <span>role in</span>
  </div>
  <div class="box">
    <img src="https://itwillgetbetter.com/wp-content/uploads/2020/04/inspirational-quotes-for-kids_277898063.jpeg"/>
    <span>population </span>
  </div>
  <div class="box">
    <img src="https://image.cnbcfm.com/api/v1/image/101728246-77735753.jpg?v=1532564478"/>
    <span>issues</span>
  </div>
</div>
        </div>
       
     <YouTube/>
    </div>
  
    </Layout>
        </>
     );
}

export default Population;