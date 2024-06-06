import { useDispatch } from 'react-redux';
import css from './Form.module.css'
import { addContact } from '../../redux/operations';


export const Form = () => {
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({name: document.getElementById("nameContact").value, number: document.getElementById("numberContact").value}))
    document.getElementById("nameContact").value = '';
    document.getElementById("numberContact").value = '';
   };
    return (
        <>
        <form name="form" onSubmit={onSubmit} className={css.contactForm}>
      <label htmlFor='nameContact'>Name</label> 
        <input className={css.input} id="nameContact" type="text" name="name"  pattern="^[a-zA-Zа-яА-Я]*$" required placeholder="Name"></input>
        <label htmlFor='numberContact'>Number phone</label> 
        <input className={css.input} id="numberContact" type="tel" name="number" pattern="\+?\d{1,4}?[ .\\-\\s]?\(?\d{1,3}?\)?[ .\\-\\s]?\d{1,4}[ .\\-\\s]?\d{1,4}[ .\\-\\s]?\d{1,9}" required placeholder="Number"></input>
        <button className={css.button} type="submit">Add contact</button>
      </form>
        </>
    )
};
