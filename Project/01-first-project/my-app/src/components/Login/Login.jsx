import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './Login.module.scss';

const Login = (props) => {

   const {
      register,
      handleSubmit,
      reset,
      watch,
      formState: { errors, isValid },
   } = useForm({
      mode: 'onBlur',
   });

   const onSubmit = data => {
      alert(JSON.stringify(data));
      reset();
   };

   console.log(watch('login'));

   return (
      <div className={styles.wrapper}>
         <form className={styles.flex__wrapper} onSubmit={handleSubmit(onSubmit)}>
            <h3>Login Here</h3>

            <label >
               Username
               <input placeholder="Email or Phone" {...register('login', {
                  required: true,
               })} />
            </label>
            <div className={styles.error}>
               {errors?.login && 'Error'}
            </div>

            <label >
               Password
               <input type="password" placeholder="Password" {...register('password', {
                  required: true,
               })} />
            </label>
            <div className={styles.error}>
               {errors?.password && 'Error'}
            </div>

            <input type="submit" value="Log In" className={styles.btn} disabled={!isValid} />
         </form>
      </div>
   );
};

export default Login;