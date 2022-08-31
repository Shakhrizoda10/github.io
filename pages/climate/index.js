import Layout from "../../shared_components/Layout";

function Climate () {
    return ( 
        <Layout>
          <div>
    <hr className="climHr" />
    <div className="climate">
    <div class="c-heroImageGrid">
	<div class="container-clim">
		<div class="column"></div>
		<div class="column">
			<div class="row"></div>
			<div class="row">
				<div>
					<div class="text">
						<h6>
            The UN Campaign for <br/>
Individual Action
						</h6>
						<p>
            To preserve a livable climate, greenhouse-gas emissions must be reduced by half by 2030 and to net zero by 2050. Bold, fast, and wide-ranging action needs to be taken by governments and businesses. But the transition to a low-carbon world also requires the participation of citizens – especially in advanced economies.
						</p>
					</div>
				</div>
				<div></div>
			</div>
			<div class="row"></div>
		</div>
	</div>
</div>
    </div>

    <div className="flex-clim">
      <div>
        <h3>Energy and transport are key</h3>
        <hr/>
        <img src="https://www.un.org/sites/un2.un.org/files/2021/08/green_energy.jpeg.jpg" />
        <p>Much of our electricity and heat are still powered by coal, oil, and gas. Airplanes and cars also run mostly on fossil fuels. To reduce your carbon footprint, use less energy at home, switch to a wind or solar-energy provider, skip a long-haul flight, and drive less.</p>
        <a href="https://www.un.org/en/climatechange/raising-ambition/renewable-energy" >Learn more about renewable energy</a>
      </div>
      <div>
        <h3>Food matters</h3>
        <hr/>
        <img src="https://www.un.org/sites/un2.un.org/files/2021/08/food-matters.png" />
        <p>The production, processing, transport, consumption, and disposal of food all contribute to greenhouse-gas emissions. To reduce your impact on the climate, buy local and seasonal food, eat more plant-based meals, use up what you have, and compost any leftovers.</p>
        <a href="https://www.un.org/en/actnow/food-hero" >Learn how you can be a food hero</a>
      </div>
      <div>
        <h3>Speak Up!</h3>
        <hr/>
        <img src="https://www.un.org/sites/un2.un.org/files/actnow_newsize.jpg" />
        <p>Climate action is a task for all of us. Concrete steps need to be taken by all sectors of society – first and foremost by governments, businesses and industry. Speak up! Appeal to world leaders, urge your city, your bank and your employer to take urgent action toward net-zero emissions.</p>
        <a href="https://www.unep.org/explore-topics/climate-action/act-now" >Explore ways to speak up</a>
      </div>
    </div>
    </div>
    </Layout>);
}

export default Climate;