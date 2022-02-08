import EntryForm from '../../Components/EntryForm/EntryForm';
import EntryList from '../../Components/EntryList/EntryList';
import { EntryProvider } from '../../Context/EntryContext';

const Home = () => {
  return (
    <EntryProvider>
      <EntryList />
      <EntryForm />
    </EntryProvider>
  );
};

export default Home;
