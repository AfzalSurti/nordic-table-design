import { useLang } from "@/context/LanguageContext";
import { featuredDishes, Dish } from "@/data/restaurant";
import ScrollReveal from "@/components/ScrollReveal";
import ProductDetailDialog from "@/components/ProductDetailDialog";
import { useState } from "react";
import { Eye } from "lucide-react";

import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";
import dish5 from "@/assets/dish-5.jpg";
import dish6 from "@/assets/dish-6.jpg";

const images: Record<string, string> = {
  "dish-1": dish1, "dish-2": dish2, "dish-3": dish3,
  "dish-4": dish4, "dish-5": dish5, "dish-6": dish6,
};

export default function FeaturedDishes() {
  const { t, bi } = useLang();
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDishClick = (dish: Dish) => {
    setSelectedDish(dish);
    setDialogOpen(true);
  };

  return (
    <section id="featured" className="section-padding max-w-7xl mx-auto">
      <ScrollReveal>
        <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">{t.nav.menu}</p>
        <h2 className="section-title mb-3">{t.featured.title}</h2>
        <p className="section-subtitle mb-14">{t.featured.subtitle}</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredDishes.map((dish, i) => (
          <ScrollReveal key={dish.image} delay={i * 100}>
            <div 
              className="glass-card group overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
              onClick={() => handleDishClick(dish)}
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={images[dish.image]}
                  alt={`${bi(dish.name)} - ${bi(dish.description)}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={400}
                  height={400}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white flex flex-col items-center gap-2">
                    <Eye className="w-8 h-8" />
                    <span className="text-sm font-medium">
                      {bi({ sv: "Visa detaljer", en: "View Details" })}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-lg font-semibold">{bi(dish.name)}</h3>
                  <span className="text-primary font-semibold whitespace-nowrap ml-3">{dish.price} {t.featured.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{bi(dish.description)}</p>
                
                {/* Diet badges */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {dish.isVegan && (
                    <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">
                      {bi({ sv: "Vegansk", en: "Vegan" })}
                    </span>
                  )}
                  {dish.isVegetarian && !dish.isVegan && (
                    <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">
                      {bi({ sv: "Vegetarisk", en: "Vegetarian" })}
                    </span>
                  )}
                  {dish.isGlutenFree && (
                    <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">
                      {bi({ sv: "Glutenfri", en: "Gluten-Free" })}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ProductDetailDialog 
        dish={selectedDish} 
        open={dialogOpen} 
        onOpenChange={setDialogOpen} 
      />
    </section>
  );
}
