import { Header } from './components/header';
import { Main } from './components/main';
import './styles/app.scss';

const state = {
    main: {
      title: "Plans & Pricing",
      text: 'Whether your time-saving automation needs are large or small, we’re here to help you scale.',
      month: 'MONTHLY',
      year: 'YEARLY'
    }
}

function App() {
  return (
    <>
      <Header/>
      <Main title={state.main.title} text={state.main.text} month={state.main.month} year={state.main.year}/>
    </>
  );
}

export default App;
