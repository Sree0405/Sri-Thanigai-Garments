"use client";

import { useEffect, useMemo, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/src/lib/utils";
import type { TabItem } from "@/data/tabsData";

interface TabSwitcherProps {
  tabs: TabItem[];
  excludedIndexes?: number[];
}

const TabSwitcher = ({ tabs, excludedIndexes = [] }: TabSwitcherProps) => {
  const filteredTabs = useMemo(
    () => tabs.filter((_, index) => !excludedIndexes.includes(index)),
    [tabs, excludedIndexes]
  );

  const [activeId, setActiveId] = useState<string>(filteredTabs[0]?.id ?? "");

  useEffect(() => {
    if (!filteredTabs.length) {
      setActiveId("");
      return;
    }

    if (!filteredTabs.some((tab) => tab.id === activeId)) {
      setActiveId(filteredTabs[0].id);
    }
  }, [filteredTabs, activeId]);

  const activeIndex = filteredTabs.findIndex((tab) => tab.id === activeId);
  const activeTab = activeIndex >= 0 ? filteredTabs[activeIndex] : null;

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!filteredTabs.length) return;

    const lastIndex = filteredTabs.length - 1;
    let nextIndex = index;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = index >= lastIndex ? 0 : index + 1;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = index <= 0 ? lastIndex : index - 1;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = lastIndex;
        break;
      default:
        return;
    }

    event.preventDefault();
    const next = filteredTabs[nextIndex];
    setActiveId(next.id);

    const nextButton = document.getElementById(`tab-${next.id}`);
    nextButton?.focus();
  };

  if (!activeTab) {
    return (
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container-narrow">
          <p className="text-sm text-muted-foreground">
            No tabs are available to display.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-border/40 bg-background py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="container-narrow">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Design workflow
          </p>
          <h2 className="mt-2 text-2xl font-bold text-gradient-primary sm:text-3xl md:text-4xl">
            Tab-based production stages
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Explore each stage of garment development through a structured,
            data-driven tab experience.
          </p>
        </div>

        {/* Mobile/tablet: accordion */}
        <div className="space-y-3 lg:hidden">
          {filteredTabs.map((tab) => {
            const isActive = tab.id === activeTab.id;
            return (
              <article
                key={tab.id}
                className={cn(
                  "overflow-hidden rounded-xl border bg-card shadow-sm transition",
                  isActive
                    ? "border-primary/30"
                    : "border-border/80"
                )}
              >
                <button
                  type="button"
                  aria-expanded={isActive}
                  aria-controls={`accordion-panel-${tab.id}`}
                  onClick={() => setActiveId(tab.id)}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium",
                    isActive ? "bg-primary/10 text-foreground" : "text-foreground"
                  )}
                >
                  <span>{tab.title}</span>
                  <span className="text-lg leading-none text-muted-foreground">
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key={`mobile-${tab.id}`}
                      id={`accordion-panel-${tab.id}`}
                      role="region"
                      aria-label={tab.title}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="relative h-44 w-full overflow-hidden bg-muted sm:h-52">
                        <Image
                          src={tab.image}
                          alt={tab.title}
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {tab.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>

        {/* Desktop: top tabs + single content panel */}
        <div className="hidden lg:block">
          <div
            role="tablist"
            aria-label="Design workflow tabs"
            aria-orientation="horizontal"
            className="mb-4 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {filteredTabs.map((tab, index) => {
              const isActive = tab.id === activeTab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  role="tab"
                  type="button"
                  tabIndex={isActive ? 0 : -1}
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActiveId(tab.id)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className={cn(
                    "min-w-[12rem] rounded-lg border px-4 py-3 text-left text-sm font-medium transition",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    isActive
                      ? "border-primary/30 bg-primary/10 text-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-primary/20 hover:text-foreground"
                  )}
                >
                  {tab.title}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={activeTab.id}
              role="tabpanel"
              id={`panel-${activeTab.id}`}
              aria-labelledby={`tab-${activeTab.id}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm"
            >
              <div className="relative h-72 w-full overflow-hidden bg-muted">
                <Image
                  src={activeTab.image}
                  alt={activeTab.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground">
                  {activeTab.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {activeTab.description}
                </p>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TabSwitcher;
