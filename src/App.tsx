import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Facilities from '@/pages/Facilities';
import Contact from '@/pages/Contact';
import Location from '@/pages/Location';
import { type PageId } from '@/data';

function App() {
  const [page, setPage] = useState<PageId>('home');

  const handleNavigate = (newPage: PageId) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.title = `Amar Boys Hostel & PG${
      page === 'home' ? '' : ' — ' + page.charAt(0).toUpperCase() + page.slice(1)
    }`;
  }, [page]);

  return (
    <div className="min-h-screen bg-[#F7F3EC] flex flex-col">
      <Navbar currentPage={page} onNavigate={handleNavigate} />
      <main className="flex-1">
        {page === 'home' && <Home onNavigate={handleNavigate} />}
        {page === 'facilities' && <Facilities onNavigate={handleNavigate} />}
        {page === 'contact' && <Contact />}
        {page === 'location' && <Location />}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
