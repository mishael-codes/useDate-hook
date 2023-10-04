import { useState } from 'react';


const useDate = (initialDate = new Date()) => {
  const [date, setDate] = useState(initialDate);

  const addDays = (days) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    setDate(newDate);
  };
  

  const addMonths = (months) => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + months);
    setDate(newDate);
  };

  return {
    date,
    addDays,
    addMonths,
  };
};

export default useDate;
