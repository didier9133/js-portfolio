import Template from './templates/Template.js';
import './styles/main.scss';
// import './styles/vars.scss'
(async function App() {
  console.log('hola')
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();
