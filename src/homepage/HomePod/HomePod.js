import React from "react";
import { Layout } from 'antd';
const { Content } = Layout;

var HomePage = require('../HomePage/HomePage.css');
export default class Chuan extends React.Component {
    render() {
        return (
            <div>
                <Content style={{ marginTop: 64 }}>   
    <div class="loader">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
   
    <section class="slideshow">

 
      <ul class="navigation">


        <li class="navigation-item active">
          <span class="rotate-holder"></span>
          <span class="background-holder" style="background-image: url(assets/img/img-1.jpeg);"></span>
        </li>

        <li class="navigation-item">
          <span class="rotate-holder"></span>
          <span class="background-holder" style="background-image: url(assets/img/img-2.jpeg);"></span>
        </li>

        <li class="navigation-item">
          <span class="rotate-holder"></span>
          <span class="background-holder" style="background-image: url(assets/img/img-3.jpeg);"></span>
        </li>

        <li class="navigation-item">
          <span class="rotate-holder"></span>
          <span class="background-holder" style="background-image: url(assets/img/img-4.jpeg);"></span>
        </li>

        <li class="navigation-item">
          <span class="rotate-holder"></span>
          <span class="background-holder" style="background-image: url(assets/img/img-5.jpeg);"></span>
        </li>

        <li class="navigation-item">
          <span class="rotate-holder"></span>
          <span class="background-holder" style="background-image: url(assets/img/img-6.jpeg);"></span>
        </li>

        <li class="navigation-item">
          <span class="rotate-holder"></span>
          <span class="background-holder" style="background-image: url(assets/img/img-7.jpeg);"></span>
        </li>

        <li class="navigation-item">
          <span class="rotate-holder"></span>
          <span class="background-holder" style="background-image: url(assets/img/img-8.jpeg);"></span>
        </li>

        <li class="navigation-item">
          <span class="rotate-holder"></span>
          <span class="background-holder" style="background-image: url(assets/img/img-9.jpeg);"></span>
        </li>

      </ul>


      <div class="detail">
      
        <div class="detail-item active">
          <div class="headline">川</div>
          <div class="background" style="background-image: url(assets/img/img-1.jpeg)"></div>
        </div>
        
        <div class="detail-item">
          <div class="headline">魯</div>
          <div class="background" style="background-image: url(assets/img/img-2.jpeg);"></div>
        </div>
        
        <div class="detail-item">
          <div class="headline">Paris</div>
          <div class="background" style="background-image: url(assets/img/img-3.jpeg);"></div>
        </div>
        
        <div class="detail-item">
          <div class="headline">Prague</div>
          <div class="background" style="background-image: url(assets/img/img-4.jpeg);"></div>
        </div>
        
        <div class="detail-item">
          <div class="headline">Moscow</div>
          <div class="background" style="background-image: url(assets/img/img-5.jpeg);"></div>
        </div>
        
        <div class="detail-item">
          <div class="headline">Kyoto</div>
          <div class="background" style="background-image: url(assets/img/img-6.jpeg);"></div> 
        </div>
        
        <div class="detail-item">
          <div class="headline">Sydney</div>
          <div class="background" style="background-image: url(assets/img/img-7.jpeg);"></div>
        </div>
        
        <div class="detail-item">
          <div class="headline">Istanbul</div>
          <div class="background" style="background-image: url(assets/img/img-8.jpeg);"></div>
        </div>
        
        <div class="detail-item">
          <div class="headline">Hong Kong</div>
          <div class="background" style="background-image: url(assets/img/img-9.jpeg);"></div>
        </div>
        
      </div>

    </section>
                </Content>
            </div>
        )
    }
}