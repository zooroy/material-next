// import useIsAuthenticated from 'hooks/useIsAuthenticated';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

interface RouteGuardProps {
  children: React.ReactNode;
}

interface UrlQuery extends ParsedUrlQuery {
  forwardPath?: string;
}

const pretectedRouterPath = ['/account', '/account/favorites'];

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
  const query = router.query as UrlQuery;

  // useEffect(() => {
  //   if (
  //     router.asPath.startsWith('/admin') &&
  //     process.env.NODE_ENV !== 'development'
  //   ) {
  //     window.location.href = '/admin/index.html';
  //     return;
  //   }
  //   if (isAuthenticated && ['/login', '/register'].includes(router.pathname)) {
  //     if (query.forwardPath) {
  //       if (query.forwardPath === 'BACK') {
  //         router.back();
  //         return;
  //       }
  //       router.push(query.forwardPath);
  //       return;
  //     }
  //     router.push('/');
  //     return;
  //   }
  //   if (!isAuthenticated && pretectedRouterPath.includes(router.pathname)) {
  //     router.push(
  //       {
  //         pathname: '/login',
  //         query: {
  //           backPath: '/',
  //           forwardPath: router.pathname,
  //         },
  //       },
  //       '/login'
  //     );
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isAuthenticated, router.pathname]);

  return <>{children}</>;
};

export default RouteGuard;
