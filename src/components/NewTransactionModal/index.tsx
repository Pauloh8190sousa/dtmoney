import { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import close from "../../assets/close.svg";
import incomeimg from "../../assets/income.svg";
import outcomeimg from "../../assets/outcome.svg";
import { TransactionsContext } from "../../TransactionsContext";


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps){

    const { createTransaction } = useContext(TransactionsContext);

    const [type, setType] = useState("deposit");
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState("");

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        });

        setType("deposit");
        setTitle("");
        setAmount(0);
        setCategory("");
        onRequestClose();
    }

    return (

        <Modal isOpen={isOpen} 
               onRequestClose={onRequestClose}
               overlayClassName="react-modal-overlay"
               className="react-modal-content"
               >
               
            <button 
            type="button" 
            onClick={onRequestClose} 
            className="react-modal-close"
            >
                <img src={close} alt="Fechar model" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                
                <input 
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)} 
                />
                <input 
                    type="number" 
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))} 
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => {setType("deposit")}}
                        isActive={type === "deposit"}
                        activeColor="green"
                    >
                        <img src={incomeimg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => {setType("withdraw")}}
                        isActive={type === "withdraw"}
                        activeColor="red"
                    >
                        <img src={outcomeimg} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>

                </TransactionTypeContainer>

                <input 
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)} 
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}