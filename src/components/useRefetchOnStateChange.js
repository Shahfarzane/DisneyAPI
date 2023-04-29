// hooks/useRefetchOnStateChange.js
import { useEffect } from "react";

const useRefetchOnStateChange = (fetchFunction, trigger) => {
  useEffect(() => {
    fetchFunction();
  }, [fetchFunction, trigger]);
};

export default useRefetchOnStateChange;
