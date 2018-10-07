import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar.js";
import { Parallax } from 'react-spring'

// http://ap.imagensbrasil.org/images/site-background.jpg

class Main extends Component {
  render() {
    return (
      <div className='container'>
				<h2>hello world</h2>
				<NavBar />

        <Parallax>
          <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#805E73' }}>

          </Parallax.Layer>

        </Parallax>
     </div>


    //     <Parallax ref={ref => (this.parallax = ref)} pages={3}>
    //     <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} > </Parallax.Layer>
		//  </Parallax><
		)
	}
}

ReactDOM.render(<Main />, document.getElementById("app"));

module.hot.accept();
