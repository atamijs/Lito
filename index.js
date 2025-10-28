import LedMarquee from './src/led.js';
import MaterialAlert from './src/material-alert.js';
customElements.define('led-marquee', LedMarquee);
// Register custom element
customElements.define('material-alert', MaterialAlert);

export { LedMarquee, MaterialAlert };