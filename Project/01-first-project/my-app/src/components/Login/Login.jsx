import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { compose } from 'redux';

import { login } from '../../Redux/userAuthReducer';
import withRouter from '../common/hoc/withRouter';

import styles from './Login.module.scss';

const Login = (props) => {

   const {
      register,
      handleSubmit,
      reset,
      setError,
      formState: { errors, isValid },
   } = useForm({
      mode: 'onBlur',
   });

   const onSubmit = data => {
      const { email, password, rememberMe } = data;
      props.login(email, password, rememberMe, setError);
      reset();
   };

   if (props.isAuth) { return <Navigate replace to="/news" />; }


   return (
      <div className={styles.wrapper}>
         <form className={styles.flex__wrapper} onSubmit={handleSubmit(onSubmit)}>
            <h3>Login Here</h3>

            <label >
               Username
               <input type="email" className={styles.email} placeholder="Email" {...register('email', {
                  required: true,
               })} />
            </label>
            <div className={styles.error}>
               {errors.email?.message}
            </div>

            <label >
               Password
               <input type="password" className={styles.password} placeholder="Password" {...register('password', {
                  required: true,
               })} />
            </label>
            <div className={styles.error}>
               {errors?.password && 'Error'}
            </div>

            <label >
               <input type="checkbox" placeholder="Remember me" {...register('rememberMe')} className={styles.rememberMe} />
               Remember me
            </label>

            <input type="submit" value="Log In" className={styles.btn} disabled={!isValid} />
         </form>
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      isAuth: state.userAuth.isAuth,
   };
};

export default compose(
   connect(mapStateToProps, { login }),
   withRouter,
)(Login);
