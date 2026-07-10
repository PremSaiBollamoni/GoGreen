#!/usr/bin/env bash
# Builds a clean, one-commit-per-file local history for the GoGreen
# Agritech Solutions website, in the order the project was actually built.
# Does NOT push anywhere — review with `git log --oneline` afterwards,
# then push manually once approved.
set -euo pipefail

cd "$(dirname "$0")/.."

if [ ! -d .git ]; then
  git init
  git branch -M main
fi

git config user.name "Prem Sai"
git config user.email "premsai200804@gmail.com"

commit() {
  local message="$1"
  local file="$2"
  git add "$file"
  git commit -m "$message"
}

# ---- 1. Project scaffold ----
commit "chore: add .gitignore"                                  .gitignore
commit "chore: add oxlint config"                                .oxlintrc.json
commit "chore: add package.json"                                 package.json
commit "chore: add package-lock.json"                            package-lock.json
commit "chore: configure Vite"                                   vite.config.ts
commit "chore: add root tsconfig"                                tsconfig.json
commit "chore: configure TypeScript for the app"                 tsconfig.app.json
commit "chore: configure TypeScript for Vite node config"        tsconfig.node.json
commit "chore: add index.html entry point"                       index.html
commit "chore: add favicon"                                      public/favicon.png
commit "chore: add shared icon sprite"                           public/icons.svg
commit "chore: add React app entry point"                        src/main.tsx
commit "chore: add commit-history script"                        scripts/commit-history.sh

# ---- 2. Design tokens and global styles ----
commit "feat(styles): add global stylesheet and Tailwind theme"  src/index.css
commit "feat(styles): add design tokens"                         src/styles/globals/tokens.css
commit "feat(styles): add blueprint texture utilities"           src/styles/globals/blueprint.css
commit "feat(lib): add classnames merge helper"                  src/lib/cn.ts

# ---- 3. Brand assets ----
commit "feat(assets): add GoGreen banner logo"                   src/assets/logos/gogreen-banner.png
commit "feat(assets): add GoGreen full logo"                     src/assets/logos/gogreen-full.png
commit "feat(assets): add GoGreen icon logo"                     src/assets/logos/gogreen-icon.png

# ---- 4. Shared content constants ----
commit "feat(constants): add company profile data"               src/constants/company.ts
commit "feat(constants): add company at-a-glance facts"          src/constants/companyFacts.ts
commit "feat(constants): add university ecosystem data"          src/constants/ecosystem.ts
commit "feat(constants): add efficiency and sensor data"         src/constants/efficiency.ts
commit "feat(constants): add export market list"                 src/constants/exportMarkets.ts
commit "feat(constants): add leadership summaries"                src/constants/leadership.ts
commit "feat(constants): add full leadership biographies"        src/constants/leadershipFull.ts
commit "feat(constants): add manufacturing equipment data"       src/constants/manufacturingEquipment.ts
commit "feat(constants): add manufacturing process steps"        src/constants/manufacturingProcess.ts
commit "feat(constants): add product specifications"             src/constants/products.ts
commit "feat(constants): add hero stat data"                     src/constants/stats.ts
commit "feat(constants): add technology pillar data"              src/constants/technologyPillars.ts
commit "feat(constants): add mission, values and timeline data"  src/constants/values.ts

# ---- 5. Reusable UI primitives ----
commit "feat(animations): add scroll-reveal animation wrapper"   src/components/animations/Reveal.tsx
commit "feat(forms): add text and textarea form fields"          src/components/forms/FormField.tsx
commit "feat(ui): add Button primitive"                          src/components/ui/Button.tsx
commit "feat(ui): add Container primitive"                       src/components/ui/Container.tsx
commit "feat(ui): add Eyebrow label primitive"                   src/components/ui/Eyebrow.tsx
commit "feat(ui): add SectionNumeral watermark primitive"        src/components/ui/SectionNumeral.tsx
commit "feat(ui): add StatBlock primitive"                       src/components/ui/StatBlock.tsx

# ---- 6. Layout, page hero, smooth scroll ----
commit "feat(layout): add site Header"                            src/components/layout/Header.tsx
commit "feat(layout): add site Footer"                            src/components/layout/Footer.tsx
commit "feat(common): add shared PageHero"                       src/components/common/PageHero.tsx
commit "feat(common): add PlaceholderPage"                       src/components/common/PlaceholderPage.tsx
commit "feat(common): add ScrollToTop route handler"              src/components/common/ScrollToTop.tsx
commit "feat(context): add Lenis smooth-scroll provider"         src/context/LenisContext.tsx

# ---- 7. Routing ----
commit "feat(routes): add application router"                     src/routes/AppRouter.tsx
commit "feat(app): wire up App with header, footer and router"   src/App.tsx

# ---- 8. Home page ----
commit "feat(home): add animated geodesic dome component"        src/features/home/components/GeodesicDome.tsx
commit "feat(home): add Hero section"                             src/features/home/components/Hero.tsx
commit "feat(home): add Who We Are section"                       src/features/home/components/WhoWeAre.tsx
commit "feat(home): add Technology preview section"               src/features/home/components/TechnologySection.tsx
commit "feat(home): add Products preview section"                 src/features/home/components/ProductsPreview.tsx
commit "feat(home): add Manufacturing preview section"            src/features/home/components/ManufacturingPreview.tsx
commit "feat(home): add University Ecosystem section"             src/features/home/components/EcosystemSection.tsx
commit "feat(home): add Exports preview section"                  src/features/home/components/ExportsPreview.tsx
commit "feat(home): add Leadership preview section"               src/features/home/components/LeadershipPreview.tsx
commit "feat(home): add Contact CTA section"                      src/features/home/components/ContactCTA.tsx
commit "feat(home): compose Home page"                            src/features/home/HomePage.tsx

# ---- 9. About page ----
commit "feat(about): add Mission and Values section"              src/features/about/components/MissionValues.tsx
commit "feat(about): add Founding Timeline section"                src/features/about/components/FoundingTimeline.tsx
commit "feat(about): add Ecosystem grid section"                   src/features/about/components/EcosystemGrid.tsx
commit "feat(about): add SDG alignment section"                    src/features/about/components/SdgSection.tsx
commit "feat(about): compose About page"                          src/features/about/AboutPage.tsx

# ---- 10. Technology page ----
commit "feat(technology): add subsystem pillars detail section"   src/features/technology/components/PillarsDetail.tsx
commit "feat(technology): add efficiency stats section"           src/features/technology/components/EfficiencySection.tsx
commit "feat(technology): add sensor suite section"                src/features/technology/components/SensorSuite.tsx
commit "feat(technology): compose Technology page"                src/features/technology/TechnologyPage.tsx

# ---- 11. Products page ----
commit "feat(products): add Product detail section"               src/features/products/components/ProductDetail.tsx
commit "feat(products): compose Products page"                    src/features/products/ProductsPage.tsx

# ---- 12. Manufacturing page ----
commit "feat(manufacturing): add process timeline section"        src/features/manufacturing/components/ProcessTimeline.tsx
commit "feat(manufacturing): add equipment section"                src/features/manufacturing/components/EquipmentSection.tsx
commit "feat(manufacturing): add materials section"                src/features/manufacturing/components/MaterialsSection.tsx
commit "feat(manufacturing): compose Manufacturing page"          src/features/manufacturing/ManufacturingPage.tsx

# ---- 13. Exports page ----
commit "feat(exports): add markets grid section"                   src/features/exports/components/MarketsGrid.tsx
commit "feat(exports): add partner section"                        src/features/exports/components/PartnerSection.tsx
commit "feat(exports): add trade flow section"                     src/features/exports/components/TradeFlow.tsx
commit "feat(exports): compose Exports page"                       src/features/exports/ExportsPage.tsx

# ---- 14. Leadership page ----
commit "feat(leadership): add leadership profiles section"        src/features/leadership/components/LeadershipProfiles.tsx
commit "feat(leadership): compose Leadership page"                 src/features/leadership/LeadershipPage.tsx

# ---- 15. Contact page ----
commit "feat(contact): add enquiry form validation schema"         src/features/contact/schema.ts
commit "feat(contact): add ContactForm component"                  src/features/contact/components/ContactForm.tsx
commit "feat(contact): add ContactInfo component"                  src/features/contact/components/ContactInfo.tsx
commit "feat(contact): add ContactSection"                         src/features/contact/components/ContactSection.tsx
commit "feat(contact): compose Contact page"                       src/features/contact/ContactPage.tsx

# ---- 16. README and docs assets ----
commit "docs: add README hero banner graphic"                      .github/assets/banner.svg
commit "docs: add README color palette graphic"                    .github/assets/palette.svg
commit "docs: add README page pipeline graphic"                    .github/assets/pipeline.svg
commit "docs: add README stat band graphic"                        .github/assets/statband.svg
commit "docs: add README closing CTA graphic"                      .github/assets/cta.svg
commit "docs: add README section chip — the pitch"                 .github/assets/chip-pitch.svg
commit "docs: add README section chip — the signature move"        .github/assets/chip-signature.svg
commit "docs: add README section chip — what's inside"             .github/assets/chip-inside.svg
commit "docs: add README section chip — tech stack"                .github/assets/chip-stack.svg
commit "docs: add README section chip — getting started"           .github/assets/chip-started.svg
commit "docs: add README section chip — project structure"         .github/assets/chip-structure.svg
commit "docs: add README section chip — roadmap"                   .github/assets/chip-roadmap.svg
commit "docs: add README section chip — license"                   .github/assets/chip-license.svg
commit "docs: add project README"                                  README.md

echo ""
echo "Done. Review with: git log --oneline"
