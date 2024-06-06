import { getError, getIsLoading } from '../redux/selectors';
import './App.css'

import { ContactsSection } from './ContactsSection/ContactSecrion';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


     
  return (
    <>
      <div className='divForm'> 
        <PhoneBook />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactsSection/>
      </div>
    </>
  );
};

