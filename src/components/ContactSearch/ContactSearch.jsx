import { useDispatch} from 'react-redux';
import css from './ContactSearch.module.css'
import { filterContact } from '../../redux/contacts/filterSlice';
// import { getFilter } from '../../redux/selectors';

export const ContactSearch = () => {
    const dispatch = useDispatch();
    // const filter = useSelector(getFilter);
    
    const onChange = (e) => {
        console.log(e.target.value);
        dispatch(filterContact(e.target.value))
     };
    return <>
    
       
    <input className={css.input} type="search" name="filter" onChange={onChange} placeholder='Search'></input>
    </>
 };