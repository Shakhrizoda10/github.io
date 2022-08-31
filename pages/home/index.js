

import Layout from "../../shared_components/Layout";
function Home  ()  {
  const Home = () => {
    return ( 
      <Layout>
  <hr/>
  <div className="header">
      <div className='bg-image-home'>
        <div className="aboutUs">
          <h1>ABOUT US</h1>
          <p>We are voluntary initiative based on CEO commitments to implement universal sustainability principles and to take steps to support UN goals.</p>
          <p>On the ground, companies face unique challenges to operating responsibly and have different opportunities to make a positive impact. Companies with operations and supply chains extending around the world need to understand locations far from headquarters and view sustainability through a local lens.</p>
        </div>
        {/* <div className="bg-image-home-2">
         <p>On the ground, companies face unique challenges to operating responsibly and have different opportunities to make a positive impact. Companies with operations and supply chains extending around the world need to understand locations far from headquarters and view sustainability through a local lens.</p>
         </div> */}
      </div>
      <div className="divs"> 
      <div className="div1">
        <h3>Government Recognition</h3>
      <p>The UN Global Compact enjoys the support of the United Nations General Assembly and has additionally been recognized in a number of other inter-governmental contexts, including by the G8. </p>
      </div>
      <div className="div2" ><h3>The UN Global Compact and the United Nations</h3>
      <p>"Today’s development landscape features an inspiring array of new actors. Powerful domestic forces, spanning all levels of Governments, civil society, academia, the scientific community and the private sector, from micro-enterprises to multinationals, have coalesced to fight poverty. </p>
      </div>
      <div  className="div3"><h3>The Foundation for the Global Compact</h3>
      <p>The United Nations Global Compact is supported by the Foundation for the Global Compact, a U.S.-based non-profit that exists solely to provide vital financial, operational and programmatic assistance to the work of the UN Global Compact.</p>
      </div>
      <div  className="div4"><h3>Our Finances</h3>
      <p>All Global Compact operations, programmes and activities are made possible by contributions from Governments to the UN Global Compact Trust Fund and from business to the Foundation for the Global Compact. Funders play a crucial role in advancing sustainable business models and markets, as the UN Global Compact does not receive funding from the regular budget of the United Nations.</p>
      </div>
      </div>
      {/* <Contact/> */}
   
  </div>
  </Layout>);
}
  }
   

export default Home;