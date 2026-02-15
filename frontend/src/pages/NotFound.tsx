import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { info } from "@/data/restaurant";
import { Home, Menu, Phone } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { t, bi } = useLang();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main id="main-content" className="min-h-screen flex flex-col items-center justify-center bg-secondary/30 px-5 py-20">
      <div className="text-center max-w-md">
        <h1 className="font-serif text-6xl md:text-7xl font-bold text-primary mb-4">404</h1>
        <p className="text-2xl font-semibold mb-2">{bi({ sv: "Sidan kunde inte hittas", en: "Page Not Found" })}</p>
        <p className="text-muted-foreground mb-8">{bi({ sv: "Tyvärr existerar denna sida inte. Gå tillbaka till hemmet eller kontakta oss.", en: "Sorry, this page doesn't exist. Return home or contact us." })}</p>

        <div className="flex flex-col gap-3 mb-10">
          <a 
            href="/" 
            className="gold-button inline-flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            {bi({ sv: "Till hemmet", en: "Back to Home" })}
          </a>
          <a 
            href="/#menu" 
            className="outline-button inline-flex items-center justify-center gap-2"
          >
            <Menu className="w-5 h-5" />
            {t.nav.menu}
          </a>
        </div>

        <div className="border-t border-border/30 pt-8">
          <p className="text-sm text-muted-foreground mb-4">{bi({ sv: "Behöver du hjälp?", en: "Need help?" })}</p>
          <a 
            href={`tel:${info.phone}`} 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
          >
            <Phone className="w-4 h-4" />
            {info.phone}
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
