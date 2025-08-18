import React from 'react';
import { useData } from '../Context/DataContext';

export const Header = () => {
  const { data } = useData();

  return <div>Hello</div>;
};
