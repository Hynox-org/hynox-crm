import { useEffect } from "react";

export function useResponsiveSidebar(
  setSidebarOpen: (open: boolean) => void,
  setSubLayerOpen: (open: boolean) => void
) {
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 800) {
        //  Mobile: Close everything
        setSidebarOpen(false);
        setSubLayerOpen(false);
      } else if (width <= 1200) {
        //  Tablet: Keep sidebar open, close sublayer
        setSidebarOpen(true);
        setSubLayerOpen(false);
      } else {
        //  Desktop: Open both
        setSidebarOpen(true);
        setSubLayerOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setSidebarOpen, setSubLayerOpen]);
}
