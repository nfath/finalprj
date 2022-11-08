
const TransactionComponent = ({ dataHistory }) => {
  return (
    <div>
      {
        dataHistory.map((history) => (
            <div key = {history.hash} className="transaction-container">
            <p>Transaction Hash: {history.hash}</p>
            <p>Status: {history.status}</p>
            <p>TimeStamp: {history.timestamp}</p>
            <p>From: {history.from}</p>
            <p>To: {history.to}</p>
            <p>Value: {history.value}</p>
            <p>Gas Used: {history.gasUsed}</p>
            </div>
        ))
      }
    </div>
  );
};

export default TransactionComponent;
