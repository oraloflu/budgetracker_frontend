import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { showStats } from '../../features/allTransactions/allTransactionsSlice';

export default function Stats(): JSX.Element {
  const { allTransactions, isLoading } = useAppSelector(
    (store) => store.allTransactions
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(showStats(allTransactions));
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <div></div>;
}
