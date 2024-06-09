import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistarForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <h2 className={css.h2}>Register to Phonebook</h2>
      <label className={css.label}>
        Username
        <input className={css.input} type="text" name="name" required/>
      </label>
      <label className={css.label}>
        Email
        <input className={css.input} type="email" name="email" required/>
      </label>
      <label className={css.label}>
        Password
        <input className={css.input} type="password" name="password" required/>
      </label>
      <button className={css.button} type="submit">Register</button>
    </form>
  );
};
