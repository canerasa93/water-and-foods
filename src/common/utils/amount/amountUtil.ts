// Import Constants
import { locale, defaultSymbol } from '../../constants/amount/amountConstants';

// GET BACKEND FORMATS
export const getFormattedAmount = (amount, currencySymbol?, digit?) => {
  const formattedOutput = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: digit ? digit : 2
  });

  let amountValue = amount;

  amount === null || (amount === undefined && (amountValue = 0));

  return formattedOutput
    ?.format(amountValue || 0)
    .replace(defaultSymbol, currencySymbol ? currencySymbol : defaultSymbol + ' ');
};
