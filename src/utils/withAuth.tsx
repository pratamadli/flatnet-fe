import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from './AuthContext';

const withAuth = (WrappedComponent: React.ComponentType, requiredRole: string) => {
  return (props: any) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push('/login');
      } else if (user.role !== requiredRole) {
        router.push('/unauthorized'); // Create an unauthorized page to handle this case
      }
    }, [user]);

    if (!user || user.role !== requiredRole) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;