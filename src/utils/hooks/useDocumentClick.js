import { useEffect } from "react";

export function useDocumentClick() {
  useEffect(() => {
    console.log("useDocumentClick");

    const handleDocumentClick = (event) => {
      console.log("Clicked Document!");
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);
}
