import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { menuCategories } from "@/data/restaurant";
import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";
import { Leaf, Flame, X } from "lucide-react";

export default function MenuSection() {
  const { t, bi } = useLang();
  const [activeTab, setActiveTab] = useState(menuCategories[0].id);
  const [dietaryFilter, setDietaryFilter] = useState<"all" | "vegetarian" | "spicy">("all");
  const active = menuCategories.find((c) => c.id === activeTab)!;

  const filteredItems = active.items.filter((item) => {
    if (dietaryFilter === "all") return true;
    if (dietaryFilter === "vegetarian") return item.tags?.includes("veg");
    if (dietaryFilter === "spicy") return item.tags?.includes("spicy");
    return true;
  });

  return (
    <section id="menu" className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="section-title text-center mb-3">{t.menu.title}</h2>
          <p className="section-subtitle text-center mx-auto mb-10">{t.menu.subtitle}</p>
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                  activeTab === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                )}
              >
                {bi(cat.name)}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Dietary Filters */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setDietaryFilter("all")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                dietaryFilter === "all"
                  ? "bg-muted text-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              )}
            >
              {bi({ sv: "Alla", en: "All" })}
            </button>
            <button
              onClick={() => setDietaryFilter("vegetarian")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                dietaryFilter === "vegetarian"
                  ? "bg-green-600 text-white"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              )}
            >
              <Leaf className="w-4 h-4" />
              {bi({ sv: "Vegetarisk", en: "Vegetarian" })}
            </button>
            <button
              onClick={() => setDietaryFilter("spicy")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                dietaryFilter === "spicy"
                  ? "bg-red-600 text-white"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              )}
            >
              <Flame className="w-4 h-4" />
              {bi({ sv: "Stark", en: "Spicy" })}
            </button>
          </div>
        </ScrollReveal>

        {/* Items */}
        <div className="space-y-1">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, i) => (
              <ScrollReveal key={`${activeTab}-${i}`} delay={i * 60}>
                <div className="flex justify-between items-start py-5 border-b border-border/30 gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-serif text-lg font-medium">{bi(item.name)}</h3>
                      {item.tags?.map((tag) => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                          {(t.tags as any)[tag] || tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm">{bi(item.description)}</p>
                  </div>
                  <span className="text-primary font-semibold whitespace-nowrap">{item.price} kr</span>
                </div>
              </ScrollReveal>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">{bi({ sv: "Inga rätter matchar ditt filter", en: "No dishes match your filter" })}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
