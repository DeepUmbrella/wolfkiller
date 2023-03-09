import { ManagementUser } from "@vtypes/user";
import React, { useEffect, useState } from "react";
import { mangementUserList } from "@api";

export const useManagementUser = (): ManagementUser => {
  const [data, setData] = useState({
    manager: false,
    info: {
      level: 1,
      list: [],
    },
  });

  useEffect(() => {
    mangementUserList("6666")
      .then(
        (res) => {
          setData(res.data);
        },
        (err) => {}
      )
      .finally(() => {});
  }, []);

  return data;
};
