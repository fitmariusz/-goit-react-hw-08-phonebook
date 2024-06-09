import { ContactSearch } from 'components/ContactSearch/ContactSearch'
import css from './ContactSection.module.css'
import { ContactList } from 'components/ContactsList/ContactsList'


export const ContactsSection = () => { 
    return <>
      <div className={css.contener}>
        <h2 className={css.h2}>Contact list</h2>
      <ContactSearch/>
      <ContactList/>
      </div>
    </>
};

