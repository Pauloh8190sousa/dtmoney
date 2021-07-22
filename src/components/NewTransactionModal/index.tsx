import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import close from "../../assets/close.svg";
import incomeimg from "../../assets/income.svg";
import outcomeimg from "../../assets/outcome.svg";


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps){

    const [type, setType] = useState("deposit");

    function handleCreateNewTransaction(event: FormEvent){
        
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
                
                <input placeholder="Título" />
                <input type="number" placeholder="Valor" />

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

                <input placeholder="Categoria" />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}