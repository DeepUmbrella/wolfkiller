import { profile } from "@api";
import { UserInfo } from "@vtypes";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

export const useUser = () => {
  const [userData, setUserData] = useState<UserInfo>();

  const queryResponse = useQuery("profile", profile, {
    refetchOnWindowFocus: false,
  });

  const { data } = queryResponse;
  useEffect(() => {
    setUserData(data?.data?.user_info);
  }, [data]);

  return [userData, setUserData] as const;
};
