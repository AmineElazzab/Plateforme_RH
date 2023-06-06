import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import JWTToken from '~lib/token';
import { useQuery } from '@tanstack/react-query';

const DefaultTimeoutDuration: number = 5 * 60 * 1000; // 5 minutes

const useSessionTimeout = () => {




  const router = useRouter();
  const [lastActivity, setLastActivity] = useState(Date.now());

  useEffect(() => {
    const handleUserActivity = () => {
      setLastActivity(Date.now());
    };

    // window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keypress', handleUserActivity);
    window.addEventListener('touchstart', handleUserActivity);

    return () => {
      // window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keypress', handleUserActivity);
      window.removeEventListener('touchstart', handleUserActivity);
    };
  }, []);

  // useEffect(() => {
  //   const handleSessionTimeout = () => {
  //     if (Date.now() - lastActivity > timeoutDuration) {
  //       JWTToken.removeToken();
  //       router.replace('/auth/login');
  //     }
  //   };

  //   const interval = setInterval(handleSessionTimeout, 1000);

  //   return () => clearInterval(interval);
  // }, [lastActivity, router, timeoutDuration]);
};

export default useSessionTimeout;