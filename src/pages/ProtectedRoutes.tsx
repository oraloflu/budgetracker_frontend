import { Navigate } from 'react-router-dom';
type Props = {
  children?: React.ReactNode;
};
export default function ProtectedRoutes({ children }: Props): JSX.Element {
  const bool = true;
  if (!bool) {
    return <Navigate to="/landing" />;
  }
  return <>{children}</>;
}
