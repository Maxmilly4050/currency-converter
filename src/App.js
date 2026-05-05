import Header from './components/header';
import CurrencyConverter from './components/converter';
import Banner from './components/banner';
import './output.css';
import Footer from './components/footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <main className="flex items-start justify-center py-8 bg-gray-100">
        <CurrencyConverter />
      </main>
        <Footer />
    </div>
  );
}
