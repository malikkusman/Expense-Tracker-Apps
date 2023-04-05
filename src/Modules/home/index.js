import styled from "styled-components";
import Overviewcomponent from "./OverviewComponent";
import TransactionComponent from "./Transactioncomponent";
import { useEffect, useState } from "react";


const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  padding: 10px 22px;
  font-size: 18px;
  width: 360px;
  align-items: center;
  justify-content: space-between;
`;
const Homecomponent = (props) =>{
  const [transactions, updateTransaction] = useState([]);
  const [expense, updateExpense] = useState(0);
  const [income, updateIncome] = useState(0);

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    transactions.map((payload)=>payload.type === "EXPENSE" ? (exp = exp + payload.amount) : (inc = inc + payload.amount),
    );
    updateExpense(exp);
    updateIncome(inc);
  };
  useEffect(() => calculateBalance(), [transactions]);

  const addTransaction = (payload) => {
    const transactionArray = [...transactions];
    transactionArray.push(payload);
    updateTransaction(transactionArray);
  };
  return (
    <Container>
      <Overviewcomponent expense={expense} income={income} addTransaction={addTransaction}/>
      {transactions?.length ? (<TransactionComponent transactions={transactions} />) : ( "" )}
    </Container>
);
}
export default Homecomponent;