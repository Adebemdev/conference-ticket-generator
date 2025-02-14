import Header from './components/navigation/Header';
import MainLayout from './layouts/MainLayout';
import TicketLayout from './layouts/TicketLayout';
// import { routes } from './utils/routes';

const App = () => {
  return (
    <div className='custom-gradient font-jeju relative flex h-screen flex-col gap-4 p-4'>
      <Header />
      <div className='max-h-[1082px] max-w-screen'>
        <MainLayout>
          <TicketLayout />
        </MainLayout>
      </div>
    </div>
  );
};

export default App;
