
export const MoneyFormatter = ({ amount }) => {
  const formatedCurrency = amount.toLocaleString('pt-br',{minimumFractionDigits: 2});

  return (
    <>{formatedCurrency}</>
  )
};

