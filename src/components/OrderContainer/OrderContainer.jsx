import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { createOrder } from "../../fetch/orderFetch";
import { InputText, Button, Toast } from "../../shared/libraries/primereact";

import "./OrderContainer.css";

export const OrderContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { updateLoading, clearCart, cartList } = useCartContext();
  const navigate = useNavigate();
  const myToast = useRef(null);

  const showSuccess = () => {
    myToast.current.show({
      severity: "success",
      summary: "OK",
      detail: "Orden creada correctamente",
      life: 3000,
    });
  };

  const onSubmit = async (data) => {
    updateLoading(true);
    const order = { ...data, order: cartList };
    await createOrder(order);
    showSuccess();
    clearCart();
    updateLoading(false);
    navigate("/");
  };

  return (
    <div>
      <Toast ref={myToast} />
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Nombre</label>
        <InputText
          id="name"
          type="text"
          className="p-inputtext-sm"
          placeholder="Nombre"
          {...register("name", { required: true })}
        />
        {errors.name && <p className="required">Nombre es requerido</p>}
        <label htmlFor="email">Email</label>
        <InputText
          id="email"
          type="text"
          className="p-inputtext-sm"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <p>Email es requerido</p>}
        <label htmlFor="address">Dirección</label>
        <InputText
          id="address"
          type="text"
          className="p-inputtext-sm"
          placeholder="Dirección"
          {...register("address", { required: true })}
        />
        {errors.address && <p>Dirección es requerida</p>}
        <Button
          className="p-button-raised p-button-success"
          label="Generar Orden"
          type="submit"
        />
      </form>
    </div>
  );
};
