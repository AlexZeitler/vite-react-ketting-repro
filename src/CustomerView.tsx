import React from "react";
import { useResource } from 'react-ketting';

type Customer = {
  customerId: string;
  name: string;
}

export const CustomerView = () => {
  const { loading, error, data } = useResource<Customer>('/customers');
  if (loading) return <p>Loading...</p>;
  if (error) return <div className="error">{error.message}</div>;

  return <div>
    <h1>{data.customerId}</h1>
    <p>{data.name}</p>
  </div>;
}