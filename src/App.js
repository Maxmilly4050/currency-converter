import Header from './components/header';
import CurrencyConverter from './components/converter';
import './output.css';

export default function App() {
  return (
    <div className="App ">
      <Header />
      <main className='flex items-center justify-center h-screen'>
        <CurrencyConverter />
      </main>
    </div>
  );
}
