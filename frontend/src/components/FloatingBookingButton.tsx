import { useState, useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { Calendar } from "lucide-react";

export default function FloatingBookingButton() {
  const { t } = useLang();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 400px and hide near booking form
      const bookingElement = document.getElementById("booking");
      if (!bookingElement) {
        setIsVisible(window.scrollY > 400);
        return;
      }
      
      const bookingRect = bookingElement.getBoundingClientRect();
      setIsVisible(window.scrollY > 400 && bookingRect.top > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className={`
        fixed bottom-6 right-6 z-50
        md:hidden
        flex items-center gap-2
        bg-primary text-primary-foreground
        px-5 py-3 rounded-full
        shadow-lg hover:shadow-xl
        transition-all duration-300 transform
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"}
        active:scale-95
      `}
      aria-label={t.nav.book}
      title={t.nav.book}
    >
      <Calendar className="w-5 h-5" />
      <span className="font-medium text-sm">{t.nav.book}</span>
    </button>
  );
}
