import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useLang } from "@/context/LanguageContext";
import { Dish } from "@/data/restaurant";
import { Clock, Flame, LeafyGreen, ShieldAlert, UtensilsCrossed, Wheat } from "lucide-react";

import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";
import dish5 from "@/assets/dish-5.jpg";
import dish6 from "@/assets/dish-6.jpg";

const images: Record<string, string> = {
  "dish-1": dish1,
  "dish-2": dish2,
  "dish-3": dish3,
  "dish-4": dish4,
  "dish-5": dish5,
  "dish-6": dish6,
};

interface ProductDetailDialogProps {
  dish: Dish | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProductDetailDialog({
  dish,
  open,
  onOpenChange,
}: ProductDetailDialogProps) {
  const { bi, lang } = useLang();

  if (!dish) return null;

  const spicyLabels = {
    sv: ["Mild", "Medel", "Stark", "Mycket Stark"],
    en: ["Mild", "Medium", "Hot", "Very Hot"],
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="space-y-6">
          {/* Image */}
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <img
              src={images[dish.image]}
              alt={bi(dish.name)}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title & Price */}
          <div className="space-y-2">
            <DialogTitle className="font-serif text-3xl font-bold">
              {bi(dish.name)}
            </DialogTitle>
            {dish.category && (
              <p className="text-primary text-sm uppercase tracking-wider">
                {bi(dish.category)}
              </p>
            )}
            <p className="text-4xl font-bold text-primary">
              {dish.price} {lang === "sv" ? "kr" : "SEK"}
            </p>
          </div>

          {/* Description */}
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {bi(dish.description)}
            </p>
          </div>

          {/* Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4 border-y">
            {dish.preparationTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">
                    {lang === "sv" ? "Tillagningstid" : "Prep Time"}
                  </p>
                  <p className="font-semibold">{dish.preparationTime} min</p>
                </div>
              </div>
            )}

            {dish.calories && (
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">
                    {lang === "sv" ? "Kalorier" : "Calories"}
                  </p>
                  <p className="font-semibold">{dish.calories} kcal</p>
                </div>
              </div>
            )}

            {dish.servingSize && (
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">
                    {lang === "sv" ? "Portion" : "Serving"}
                  </p>
                  <p className="font-semibold">{bi(dish.servingSize)}</p>
                </div>
              </div>
            )}

            {dish.spicyLevel !== undefined && dish.spicyLevel > 0 && (
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-500" />
                <div>
                  <p className="text-xs text-muted-foreground">
                    {lang === "sv" ? "Styrka" : "Spice Level"}
                  </p>
                  <p className="font-semibold">
                    {spicyLabels[lang][dish.spicyLevel]}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Diet Tags */}
          {(dish.isVegetarian || dish.isVegan || dish.isGlutenFree) && (
            <div className="flex flex-wrap gap-2">
              {dish.isVegan && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  <LeafyGreen className="w-4 h-4" />
                  {lang === "sv" ? "Vegansk" : "Vegan"}
                </span>
              )}
              {dish.isVegetarian && !dish.isVegan && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  <LeafyGreen className="w-4 h-4" />
                  {lang === "sv" ? "Vegetarisk" : "Vegetarian"}
                </span>
              )}
              {dish.isGlutenFree && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  <Wheat className="w-4 h-4" />
                  {lang === "sv" ? "Glutenfri" : "Gluten-Free"}
                </span>
              )}
            </div>
          )}

          {/* Ingredients */}
          {dish.ingredients && (
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <UtensilsCrossed className="w-5 h-5 text-primary" />
                {lang === "sv" ? "Ingredienser" : "Ingredients"}
              </h3>
              <p className="text-muted-foreground">{bi(dish.ingredients)}</p>
            </div>
          )}

          {/* Allergens */}
          {dish.allergens && (
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2 text-amber-900">
                <ShieldAlert className="w-5 h-5" />
                {lang === "sv" ? "Allergener" : "Allergens"}
              </h3>
              <p className="text-amber-800">{bi(dish.allergens)}</p>
            </div>
          )}

          {/* CTA Button */}
          <div className="pt-4">
            <button className="w-full btn btn-primary py-4 text-lg">
              {lang === "sv" ? "Lägg till i beställning" : "Add to Order"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
