import React, { Component } from "react";
import { useForm } from "react-hook-form";
import { FormValues } from "../types/types";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


export default function AddUpdateForm () {
  const schema = yup.object().shape({
    name: yup.string().required(),
  });

  const { register, handleSubmit, formState: { errors }} = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    console.log('ez');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" {...register("name")} />
      {errors.name && <span>{errors.name.message}</span>}

      <button type="submit">Submit</button>
    </form>
  );

}