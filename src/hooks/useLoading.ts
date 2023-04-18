import { useEffect, useState } from "react";
import { useIsFetching, useIsMutating } from "react-query";

export const useLoading = () => {
  const isMutating = useIsMutating();
  const isFetching = useIsFetching();
  const [loading, setLoading] = useState(isMutating !== 0 || isFetching !== 0);

  useEffect(() => {
    setLoading(isMutating !== 0 || isFetching !== 0);
  }, [isMutating, isFetching]);

  return [loading, setLoading] as const;
};
