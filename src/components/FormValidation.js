import React from "react";
import classes from './css/FormValidation.module.css'
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

export default function FormValidation({handleOrderSubmited}) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    swal(`Good job, ${data.name}!`, "You've completed your order!", "success");
    handleOrderSubmited()
  };
   
  return (
      <div className={classes.form}>
        <h1>Please Enter Your Delivery Infomation</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* <label htmlFor="name">Name</label> */}
            <input id="name"
                {...register("name", {required: 'Please enter a valid name'})} 
                placeholder='Name'
                />
            {errors.name? <p>{errors.name?.message}</p> : <></> }
            {/* <label htmlFor="email">Email</label> */}
            <input
                id="email"
                {...register("email", {required: 'Please enter a valid email'})}
                placeholder='Email'
                />
            {errors.email? <p>{errors.email?.message}</p> : <></> }

            {/* <label htmlFor="street">Street</label> */}
            <input
                id="street"
                {...register("street", {required: 'Please enter a valid street'})}
                placeholder='Street'
                />
            {errors.street? <p>{errors.street?.message}</p> : <></> }
            {/* <label htmlFor="city">City</label> */}
            <input
                id="city"
                {...register("city", {required: 'Please enter a valid city'})} 
                placeholder='City'
                />
            {errors.city? <p>{errors.city?.message}</p> : <></> }
            {/* <label htmlFor="postal-code">Postal Code</label> */}
            <input
                id="postal-code"
                {...register("postal_code", {required: 'Please enter a valid postal code'})}
                placeholder='Postal Code'
            />
            {errors.postal_code? <p>{errors.postal_code?.message}</p> : <></> }
            <input type="submit" value="Place Order" className="submit" />
        </form>
      </div>
  );
}