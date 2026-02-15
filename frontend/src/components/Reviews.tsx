import { useLang } from "@/context/LanguageContext";
import { reviews } from "@/data/restaurant";
import ScrollReveal from "@/components/ScrollReveal";
import { Star } from "lucide-react";

export default function Reviews() {
  const { t, bi } = useLang();

  // Average rating calculation
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section id="reviews" className="section-padding max-w-6xl mx-auto">
      <ScrollReveal>
        <h2 className="section-title text-center mb-3">{t.reviews.title}</h2>
        <p className="section-subtitle text-center mx-auto mb-3">{t.reviews.subtitle}</p>
        
        {/* Rating Stats */}
        <div className="flex justify-center items-center gap-6 mb-14">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">{avgRating}</div>
            <div className="flex gap-1 justify-center mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < Math.round(Number(avgRating)) ? "text-primary fill-primary" : "text-muted"}`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{reviews.length}+ reviews</p>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((r, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="glass-card p-6">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className={`w-4 h-4 ${s < r.rating ? "text-primary fill-primary" : "text-muted"}`}
                  />
                ))}
              </div>
              <p className="text-foreground/85 text-sm leading-relaxed mb-4">"{bi(r.text)}"</p>
              <p className="text-muted-foreground text-sm font-medium">— {r.name}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
