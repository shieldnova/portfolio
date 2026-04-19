import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border/50 text-center">
      <div className="container mx-auto px-4">
        <p className="text-muted-foreground font-medium">
          © {new Date().getFullYear()} {portfolioData.hero.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
