// Import ReactDOM and React
import React from 'react';
import '../../static/layout.css'; // Tell Webpack that .js uses these styles

export default class Footer extends React.Component {
  render() {
    return(
      <div className="wrapper row2">
        <div id="container" className="clear">
          <section id="slider">
        		<s1>Welcome to Recipeazy!</s1>
        		<s2>At Receipeazy, we will help you be the best version of you in the kitchen.</s2>
      	  </section>
          <div id="homepage">
            <section id="services" className="clear">
              <article className="one_third">
                <figure><img src="https://i.ibb.co/0J11ghW/10.png" width="320" height="180" alt=""/>
                  <figcaption>
                    <h2>Butternut Squash Spaghet With Sage and Walnut Pesto</h2>
                    <p>Italian dish.</p>
                  </figcaption>
                </figure>
              </article>
              <article className="one_third_middle">
                <figure><img src="https://i.ibb.co/vwjhhj5/8.png" width="320" height="180" alt=""/>
                  <figcaption>
                    <h2>Tropical Chia Seed Pudding</h2>
                    <p>Dessert dish.</p>
                  </figcaption>
                </figure>
              </article>
              <article className="one_third_last">
                <figure><img src="https://i.ibb.co/w6N2btC/5.png" width="320" height="180" alt=""/>
                  <figcaption>
                    <h2>Miso Cod en Papillote</h2>
                    <p>Japanese dish.</p>
                  </figcaption>
                </figure>
              </article>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
