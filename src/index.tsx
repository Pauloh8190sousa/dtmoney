import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from "miragejs";

createServer({

  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelancer de Sites",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2021-02-15 9:00:14")
        },
        {
          id: 2,
          title: "Alugel",
          type: "withdraw",
          category: "Casa",
          amount: 1000,
          createdAt: new Date("2021-03-14 11:40:14")
        },
      ],
    });
  },

    routes(){
        this.namespace = "api";

        this.get("/transactions", () => {
          return this.schema.all("transaction");
        })

        this.post("/transactions", (schema, request) => {
            const data = JSON.parse(request.requestBody);

            return schema.create("transaction", data);
        });
    }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);