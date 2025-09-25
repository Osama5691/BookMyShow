import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useExitModal() {
  const [showExitModal, setShowExitModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = (e) => {
      e.preventDefault();
      setShowExitModal(true);
      window.history.pushState(null, null, window.location.pathname);
    };

    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleConfirmExit = (redirectTo = "/") => {
    setShowExitModal(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(redirectTo);
    }, 2000);
  };

  return { showExitModal, setShowExitModal, handleConfirmExit, loading };
}
