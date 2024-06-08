import { getError, getIsLoading } from '../../redux/contacts/selectors';
import './Contacts.css'

import { ContactsSection } from '../../components/ContactsSection/ContactSecrion';
import { PhoneBook } from '../../components/PhoneBook/PhoneBook';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';


export const Contacts = () => {
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

