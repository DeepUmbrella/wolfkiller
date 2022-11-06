import "./FullPageLoading.scss";

import React, { useState } from "react";

const FullPageLoading = () => {
  const [loading, setLoading] = useState(false);
  return <div className="full-page-loading">FullPageLoading</div>;
};

export { FullPageLoading };
