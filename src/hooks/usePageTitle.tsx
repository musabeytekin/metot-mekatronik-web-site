import { useEffect } from 'react';

/**
 * Custom hook to set the page title dynamically
 * @param title The title to set for the page
 * @param suffix Optional suffix to add after the title
 */
const usePageTitle = (title: string, suffix: string = '| METOT MEKATRONİK') => {
  useEffect(() => {
    // Update the document title when the component mounts or when title changes
    document.title = title ? `${title} ${suffix}` : 'METOT MEKATRONİK';

    // Optional: Restore the original title when the component unmounts
    return () => {
      document.title = 'METOT MEKATRONİK';
    };
  }, [title, suffix]);
};

export default usePageTitle; 