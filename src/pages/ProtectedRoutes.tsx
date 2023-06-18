import React from 'react';
import { Navigate } from 'react-router-dom';
interface Props {
  children?: React.ReactNode;
}
export default function ProtectedRoutes({ children }: Props): JSX.Element {
  const bool = true;
  if (!bool) {
    return <Navigate to="/landing" />;
  }
  return <>{children}</>;
}
