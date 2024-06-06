import { Form } from "components/Form/Form";
import css from './Phonebook.module.css'


export const PhoneBook = () => { 
    return <>
        <h2 className={css.h2}>Phonebook</h2>
        <Form/>
    </>
};