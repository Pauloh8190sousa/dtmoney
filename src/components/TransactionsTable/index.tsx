import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){

    useEffect(() => {
        api.get("transactions")
        .then(response => console.log(response.data));
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Site</td>
                        <td className="entrada">R$ 1200,00</td>
                        <td>Desenvolvimento</td>
                        <td>24/06/2020</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de Site</td>
                        <td className="retirada">-R$ 200,00</td>
                        <td>Desenvolvimento</td>
                        <td>24/06/2020</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}