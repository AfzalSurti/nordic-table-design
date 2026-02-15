import { useLang } from "@/context/LanguageContext";
import { cateringPackages } from "@/data/restaurant";
import ScrollReveal from "@/components/ScrollReveal";
import { Check, Calendar } from "lucide-react";
import { useState } from "react";

export default function Catering() {
  const { t, bi, lang } = useLang();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedGuests, setSelectedGuests] = useState("");

  const handleQuickBook = (guestRange: string) => {
    setSelectedGuests(guestRange);
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="catering" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="section-title text-center mb-3">{t.catering.title}</h2>
          <p className="section-subtitle text-center mx-auto mb-6">{t.catering.subtitle}</p>
          
          {/* Date picker form */}
          <div className="max-w-2xl mx-auto mb-14 glass-card p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">{bi({ sv: "Datum", en: "Date" })}</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-secondary border border-border/50 rounded-md px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t.catering.guests}</label>
                <select
                  value={selectedGuests}
                  onChange={(e) => setSelectedGuests(e.target.value)}
                  className="w-full bg-secondary border border-border/50 rounded-md px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">{bi({ sv: "Välj", en: "Select" })}</option>
                  <option value="10-25">10-25</option>
                  <option value="25-50">25-50</option>
                  <option value="50+">50+</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                  className="gold-button text-sm w-full flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  {bi({ sv: "Boka nu", en: "Book Now" })}
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {cateringPackages.map((pkg, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div className="glass-card p-7 flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-serif text-xl font-semibold mb-1">{bi(pkg.name)}</h3>
                <p className="text-muted-foreground text-sm mb-4">{pkg.guests} {t.catering.guests}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-xs text-muted-foreground">{t.catering.from}</span>
                  <span className="font-serif text-3xl font-bold gold-gradient-text">{pkg.priceFrom}</span>
                  <span className="text-muted-foreground text-sm">{t.catering.perPerson}</span>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.features[lang].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleQuickBook(pkg.guests)}
                  className="outline-button text-sm w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  {t.catering.request}
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
