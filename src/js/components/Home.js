import { select, templates, settings, classNames } from '../settings.js';
import {utils} from '../utils.js';

class Home {
  constructor(element){
    const thisHome = this;

    thisHome.render(element);
  }
  render(){
    const thisHome = this;

    const generatedHTML = templates.homePage();
    thisHome.element = utils.createDOMFromHTML(generatedHTML);
    thisHome.dom = {};
    thisHome.dom.wrapper = document.querySelector(select.containerOf.homePage);
    thisHome.dom.wrapper.appendChild(thisHome.element);

    console.log(generatedHTML);
  }
}
export default Home;