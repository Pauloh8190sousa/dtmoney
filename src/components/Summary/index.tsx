import { Container } from "./styles";
import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import total from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary(){

    const {transactions} = useTransactions();

    const summary = transactions.reduce((acc, transactions) => {
        if(transactions.type === "deposit"){

            acc.deposit += transactions.amount;
            acc.total += transactions.amount;

        }else{

            acc.withdraw += transactions.amount;
            acc.total -= transactions.amount;

        }

        return acc;

    }, {
        deposit: 0,
        withdraw: 0,
        total: 0
    })


    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={income} alt="Entradas" />
                </header>
                <strong>{new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        }).format(summary.deposit)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcome} alt="Saídas" />
                </header>
                <strong>-{new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        }).format(summary.withdraw)}
                </strong>
            </div>

            <div className="total-background">
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total" />
                </header>
                <strong>{new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        }).format(summary.total)}
                </strong>
            </div>
        </Container>
    );   
}