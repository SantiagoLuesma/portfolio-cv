import { v4 as uuidv4 } from 'uuid';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'CRUD Tasks',
    desc:
      'CRUD de proyectos y tareas, creado con la librería React de JavaScript.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Weather App',
    desc:
      'Aplicación del tiempo utilizando HTML, CSS y JavaScript, utilizando una API pública para extraer los datos.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Calculadora',
    desc: 'Calculadora creada con HTML, CSS Y JavaScript Vanilla.',
    img: CoinTrackerImg,
  },
];

export default projects;
