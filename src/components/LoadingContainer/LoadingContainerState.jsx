import { useState } from "react";

export const LoadingContainerState = () => {
  const [loading, setLoading] = useState(false);
  const updateLoading = (value) => {
    setLoading(value);
  };
  return {
    loading,
    updateLoading,
  };
};
