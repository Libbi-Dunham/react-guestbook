import EntryList from '../../Components/EntryList/EntryList';
import { EntryProvider } from '../../Context/EntryContext';

const Home = () => {
  return (
    <EntryProvider>
      <EntryList />
    </EntryProvider>
  );
};

export default Home;
