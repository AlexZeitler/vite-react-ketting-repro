import React from "react";
import "./App.css";
import { Client } from "ketting";
import { KettingProvider } from "react-ketting";
import { CustomerView } from "./CustomerView";
const client = new Client("http://localhost:5000/");

function App() {
  return (
    <KettingProvider client={client}>
       <CustomerView></CustomerView>
    </KettingProvider>
    );
}

export default App;
