import { useEffect, useState } from "react";
import { useIsFetching, useIsMutating } from "react-query";

export const useLoading = () => {
  console.log("run loading hook");
  const isMutating = useIsMutating();
  const isFetching = useIsFetching();
  const [loading, setLoading] = useState(!!(isFetching | isMutating));

  useEffect(() => {
    setLoading(!!(isFetching | isMutating));
  }, [isMutating, isFetching]);
  console.log({ isMutating, isFetching });

  return [isMutating !== 0 || isFetching !== 0, setLoading] as const;
};
