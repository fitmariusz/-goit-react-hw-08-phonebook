// import { getError, getIsLoading } from '../redux/contacts/selectors';
// import './App.css'

// import { ContactsSection } from './ContactsSection/ContactSecrion';
// import { PhoneBook } from './PhoneBook/PhoneBook';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from '../redux/contacts/operations';


// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(getIsLoading);
//   const error = useSelector(getError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);


     
//   return (
//     <>
//       <div className='divForm'>
//         <PhoneBook />
//         {isLoading && !error && <b>Request in progress...</b>}
//         <ContactsSection/>
//       </div>
//     </>
//   );
// };


import { lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
// import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks/useAuth';
import { Layout } from './Layout';
import {Contacts} from '../pages/Contacts/Contacts'

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
// const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  // const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);
  
  
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts/>} />
          }
        />
      </Route>
    </Routes>
  );
};

