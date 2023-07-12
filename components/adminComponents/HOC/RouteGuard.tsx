import { useEffect } from 'react';
// import useIsAuthenticated from 'hooks/useIsAuthenticated';
import { useRouter } from 'next/router';
// import { Defaults } from 'shared/constants/enums';

interface RouteGuardProps {
  children: React.ReactNode;
}

/**
 * Route Guard
 * --
 *
 * By default these are the goals of the route guard:
 * - Reroute to login if user is not logged in and tries to access an
 * restricted page.
 * - Reroute away from login to previous page when already logged in.
 *
 * TODO
 * - add protection for specific routes
 * @param props.children - the portion of the application that requires a route guard, passed in as a react child
 * @returns
 */
const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const router = useRouter();
  // const isAuthenticated = useIsAuthenticated();

  // useEffect(() => {
  //   if (isAuthenticated && router.pathname === '/login') {
  //     router.push(Defaults.DEFAULT_HOME_ROUTE);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isAuthenticated, router.pathname]);

  return <>{children}</>;
};

export default RouteGuard;
