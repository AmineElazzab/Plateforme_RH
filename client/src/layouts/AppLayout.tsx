import { Bars3Icon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import { Slide, ToastContainer } from 'react-toastify';
import useSessionTimeout from '~hooks/session/useSessionTimeout';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

import { Button } from '~components/ui';
import 'react-toastify/dist/ReactToastify.css';

import AnimatedPanelSwitcher from '~components/ui/AnimatedPanelSwitcher/AnimatedPanelSwitcher';
import { PERMISSIONS } from '~lib/static-data/permissions';
import { useCurrentUser } from '~hooks/query-hooks/useCurrentUser';

interface PermsType {
  name: string;
  label: string;
}
interface LayoutProps {
  children: ReactElement;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  useSessionTimeout();
  const { data, refetch } = useCurrentUser();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  // const { data: session } = useSession();

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/auth/login');
    },
  });

  // const token = JWTToken.getToken();

  // useEffect(() => {
  //   // if (status === 'loading') {
  //   //   return;
  //   // }
  //   if (router.pathname !== '/auth/login' && !token) {
  //     router.replace('/auth/login');
  //   }
  // }, [session, router.pathname, status]);

  useEffect(() => {
    if (data) {
      data.permissions?.map((permission: PermsType) => {
        PERMISSIONS[permission.name] = true;
      });
      setIsLoading(false);
    }
  }, [data]);

  if (pathname !== '/auth/login' && !data) {
    refetch();
    return null;
  }

  if (pathname.includes('auth')) {
    return <>{children}</>;
  }
  if (status === 'loading' || isLoading) {
    // Show a loading spinner or placeholder while data is being fetched
    return (
      <div className="w-screen h-screen flex justify-center items-center p-80">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-full h-full animate-spin text-sam-green-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </div>
    );
  }
  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main app body */}
      <div className="md:pl-64 flex flex-col flex-1">
        <TopBar />
        <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
          <Button variant="tertiary" onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>

        <AnimatedPanelSwitcher>{children}</AnimatedPanelSwitcher>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          limit={1}
          transition={Slide}
        />
      </div>
    </>
  );
};

export default Layout;
