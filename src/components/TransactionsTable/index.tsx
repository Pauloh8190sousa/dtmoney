import { Container } from "./styles";

export function TransactionsTable(){
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