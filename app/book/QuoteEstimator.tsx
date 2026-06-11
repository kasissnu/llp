"use client";

import { useMemo, useState } from "react";
import styles from "./book.module.css";

type EventName =
  | "Engagement"
  | "Haldi"
  | "Mehendi"
  | "Sangeet"
  | "Cocktail"
  | "Wedding"
  | "Reception"
  | "Pre-wedding shoot"
  | "Post-wedding shoot"
  | "Other";
type DurationKey = "2-4" | "4-6" | "full-day";
type PresetKey = "basic" | "premium" | "luxury" | "custom";
type BuilderSection = "events" | "selectedEvents" | "deliverables" | "upgrades" | "travel";
type TeamCategory = "photographers" | "videographers";
type DeliverableKey =
  | "Edited photos"
  | "Online gallery"
  | "Full-length video"
  | "Wedding teaser"
  | "Cinematic wedding film"
  | "Premium album"
  | "Instagram reels";
type UpgradeKey =
  | "Drone coverage"
  | "Same-day edit"
  | "Parent albums"
  | "Pre-wedding shoot"
  | "LED wall / live screen"
  | "Family interview film";

type TeamRole =
  | "traditionalPhotographers"
  | "candidPhotographers"
  | "traditionalVideographers"
  | "cinematographers"
  | "droneOperators"
  | "reelCreators";

type EventConfig = {
  date: string;
  duration: DurationKey;
  location: string;
  preset: PresetKey;
  team: Record<TeamRole, number>;
  time: string;
};

type LineItem = {
  amount: number;
  label: string;
};

const formatInr = new Intl.NumberFormat("en-IN", {
  currency: "INR",
  maximumFractionDigits: 0,
  style: "currency",
});

const events: EventName[] = [
  "Engagement",
  "Haldi",
  "Mehendi",
  "Sangeet",
  "Cocktail",
  "Wedding",
  "Reception",
  "Pre-wedding shoot",
  "Post-wedding shoot",
  "Other",
];

const durationOptions: Array<{ label: string; value: DurationKey }> = [
  { label: "Up to 4 hours", value: "2-4" },
  { label: "Up to 6 hours", value: "4-6" },
  { label: "Full day", value: "full-day" },
];

const roleRates: Record<TeamRole, Record<DurationKey, number>> = {
  traditionalPhotographers: { "2-4": 8000, "4-6": 12000, "full-day": 15000 },
  candidPhotographers: { "2-4": 12000, "4-6": 18000, "full-day": 25000 },
  traditionalVideographers: { "2-4": 8000, "4-6": 12000, "full-day": 15000 },
  cinematographers: { "2-4": 15000, "4-6": 22000, "full-day": 30000 },
  droneOperators: { "2-4": 15000, "4-6": 20000, "full-day": 25000 },
  reelCreators: { "2-4": 8000, "4-6": 12000, "full-day": 18000 },
};

const presets: Record<PresetKey, { label: string; team: Record<TeamRole, number> }> = {
  basic: {
    label: "Basic documentation",
    team: {
      traditionalPhotographers: 1,
      candidPhotographers: 0,
      traditionalVideographers: 1,
      cinematographers: 0,
      droneOperators: 0,
      reelCreators: 0,
    },
  },
  premium: {
    label: "Premium storytelling",
    team: {
      traditionalPhotographers: 1,
      candidPhotographers: 1,
      traditionalVideographers: 1,
      cinematographers: 1,
      droneOperators: 0,
      reelCreators: 0,
    },
  },
  luxury: {
    label: "Luxury cinematic",
    team: {
      traditionalPhotographers: 1,
      candidPhotographers: 1,
      traditionalVideographers: 1,
      cinematographers: 1,
      droneOperators: 1,
      reelCreators: 1,
    },
  },
  custom: {
    label: "Custom team",
    team: {
      traditionalPhotographers: 1,
      candidPhotographers: 1,
      traditionalVideographers: 1,
      cinematographers: 0,
      droneOperators: 0,
      reelCreators: 0,
    },
  },
};

const deliverables: Array<{ amount: number; label: DeliverableKey }> = [
  { label: "Edited photos", amount: 0 },
  { label: "Online gallery", amount: 0 },
  { label: "Full-length video", amount: 20000 },
  { label: "Wedding teaser", amount: 15000 },
  { label: "Cinematic wedding film", amount: 35000 },
  { label: "Premium album", amount: 25000 },
  { label: "Instagram reels", amount: 15000 },
];

const upgrades: Array<{ amount: number; label: UpgradeKey }> = [
  { label: "Drone coverage", amount: 20000 },
  { label: "Same-day edit", amount: 45000 },
  { label: "Parent albums", amount: 20000 },
  { label: "Pre-wedding shoot", amount: 50000 },
  { label: "LED wall / live screen", amount: 35000 },
  { label: "Family interview film", amount: 20000 },
];

const teamCategories: Array<{ label: string; value: TeamCategory }> = [
  { label: "Photographers", value: "photographers" },
  { label: "Videographers", value: "videographers" },
];

const defaultConfig: EventConfig = {
  date: "",
  duration: "4-6",
  location: "",
  preset: "premium",
  team: presets.premium.team,
  time: "",
};

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function cloneTeam(team: Record<TeamRole, number>) {
  return { ...team };
}

function createDefaultConfig(): EventConfig {
  return {
    ...defaultConfig,
    team: cloneTeam(defaultConfig.team),
  };
}

export function QuoteEstimator() {
  const [selectedEvents, setSelectedEvents] = useState<EventName[]>(["Wedding"]);
  const [activeEvent, setActiveEvent] = useState<EventName | null>("Wedding");
  const [openSections, setOpenSections] = useState<BuilderSection[]>([
    "events",
    "selectedEvents",
    "deliverables",
    "upgrades",
    "travel",
  ]);
  const [eventConfigs, setEventConfigs] = useState<Record<string, EventConfig>>({
    Wedding: createDefaultConfig(),
  });
  const [selectedDeliverables, setSelectedDeliverables] = useState<DeliverableKey[]>([
    "Edited photos",
    "Online gallery",
    "Wedding teaser",
  ]);
  const [selectedUpgrades, setSelectedUpgrades] = useState<UpgradeKey[]>([]);
  const [outsideBaseCity, setOutsideBaseCity] = useState("No");
  const orderedSelectedEvents = events.filter((eventName) => selectedEvents.includes(eventName));

  function toggleEvent(eventName: EventName) {
    if (selectedEvents.includes(eventName)) {
      if (selectedEvents.length === 1) return;

      const nextEvents = events.filter((item) => item !== eventName && selectedEvents.includes(item));

      setSelectedEvents(nextEvents);
      if (activeEvent === eventName) {
        setActiveEvent(null);
      }
      return;
    }

    setSelectedEvents((current) => events.filter((item) => item === eventName || current.includes(item)));
    setEventConfigs((current) => ({
      ...current,
      [eventName]: current[eventName] ?? createDefaultConfig(),
    }));
    setActiveEvent(eventName);
  }

  function updateEventConfig(eventName: EventName, changes: Partial<EventConfig>) {
    setEventConfigs((current) => ({
      ...current,
      [eventName]: {
        ...(current[eventName] ?? createDefaultConfig()),
        ...changes,
      },
    }));
  }

  function toggleListItem<T extends string>(item: T, setter: (value: (current: T[]) => T[]) => void) {
    setter((current) => (current.includes(item) ? current.filter((value) => value !== item) : [...current, item]));
  }

  function toggleActiveEvent(eventName: EventName) {
    setActiveEvent((current) => (current === eventName ? null : eventName));
  }

  function toggleSection(section: BuilderSection) {
    setOpenSections((current) =>
      current.includes(section) ? current.filter((item) => item !== section) : [...current, section],
    );
  }

  function isSectionOpen(section: BuilderSection) {
    return openSections.includes(section);
  }

  function getTeamCategoryCount(team: Record<TeamRole, number>, category: TeamCategory) {
    if (category === "photographers") {
      return team.traditionalPhotographers + team.candidPhotographers;
    }

    return team.traditionalVideographers + team.cinematographers;
  }

  function updateTeamCategory(eventName: EventName, category: TeamCategory, delta: number) {
    const config = eventConfigs[eventName] ?? createDefaultConfig();
    const nextCount = Math.max(0, getTeamCategoryCount(config.team, category) + delta);

    if (category === "photographers") {
      updateEventConfig(eventName, {
        preset: "custom",
        team: {
          ...config.team,
          traditionalPhotographers: nextCount > 0 ? 1 : 0,
          candidPhotographers: Math.max(0, nextCount - 1),
        },
      });
      return;
    }

    updateEventConfig(eventName, {
      preset: "custom",
      team: {
        ...config.team,
        traditionalVideographers: nextCount > 0 ? 1 : 0,
        cinematographers: Math.max(0, nextCount - 1),
      },
    });
  }

  const quote = useMemo(() => {
    const eventItems = orderedSelectedEvents.map((eventName) => {
      const config = eventConfigs[eventName] ?? createDefaultConfig();
      const amount = (Object.keys(config.team) as TeamRole[]).reduce((sum, role) => {
        return sum + config.team[role] * roleRates[role][config.duration];
      }, 0);

      return {
        amount,
        label: `${eventName} - ${presets[config.preset].label}`,
      };
    });

    const deliverableItems = deliverables
      .filter((item) => selectedDeliverables.includes(item.label) && item.amount > 0)
      .map(({ amount, label }) => ({ amount, label }));
    const upgradeItems = upgrades
      .filter((item) => selectedUpgrades.includes(item.label))
      .map(({ amount, label }) => ({ amount, label }));
    const logisticsItems: LineItem[] =
      outsideBaseCity === "Yes" ? [{ amount: 25000, label: "Travel and logistics allowance" }] : [];
    const lineItems = [...eventItems, ...deliverableItems, ...upgradeItems, ...logisticsItems];
    const total = lineItems.reduce((sum, item) => sum + item.amount, 0);

    return { eventItems, lineItems, total };
  }, [eventConfigs, orderedSelectedEvents, outsideBaseCity, selectedDeliverables, selectedUpgrades]);

  const selectedEventSummary = orderedSelectedEvents.join(", ");
  const selectedDeliverableSummary = selectedDeliverables.join(", ") || "None";
  const selectedUpgradeSummary = selectedUpgrades.join(", ") || "None";
  const lineItemSummary = quote.lineItems.map((item) => `${item.label}: ${formatInr.format(item.amount)}`).join("; ");

  return (
    <section className={styles.quoteEstimator} aria-labelledby="quote-estimate-title">
      <div className={styles.quoteHeader}>
        <div>
          <span>Wedding quote builder</span>
          <h2 id="quote-estimate-title">Build event-wise coverage</h2>
        </div>
        <p>
          Select the events, adjust the team for each one, add deliverables, and get an indicative
          quote before sending the enquiry.
        </p>
      </div>

      <div className={styles.quoteControls}>
        <section className={styles.quoteAccordionSection}>
          <button
            aria-expanded={isSectionOpen("events")}
            className={styles.quoteAccordionHeader}
            onClick={() => toggleSection("events")}
            type="button"
          >
            <span>1. Select events</span>
            <small>{orderedSelectedEvents.length} selected</small>
            <span aria-hidden="true" className={styles.quoteChevron} />
          </button>
          {isSectionOpen("events") ? (
            <div className={styles.quoteAccordionPanel}>
              <div className={styles.quoteEventGrid}>
                {events.map((eventName) => (
                  <label className={styles.quotePill} key={eventName}>
                    <input
                      checked={selectedEvents.includes(eventName)}
                      name="quote-selected-event"
                      onChange={() => toggleEvent(eventName)}
                      type="checkbox"
                      value={eventName}
                    />
                    <span>{eventName}</span>
                  </label>
                ))}
              </div>
            </div>
          ) : null}
        </section>

        <section className={styles.quoteAccordionSection}>
          <button
            aria-expanded={isSectionOpen("selectedEvents")}
            className={styles.quoteAccordionHeader}
            onClick={() => toggleSection("selectedEvents")}
            type="button"
          >
            <span>2. Selected events</span>
            <small>{orderedSelectedEvents.length} selected</small>
            <span aria-hidden="true" className={styles.quoteChevron} />
          </button>
          {isSectionOpen("selectedEvents") ? (
            <div className={`${styles.quoteAccordionPanel} ${styles.eventBuilderList}`}>
              {orderedSelectedEvents.map((eventName) => {
                const config = eventConfigs[eventName] ?? createDefaultConfig();
                const slug = slugify(eventName);
                const isActive = activeEvent === eventName;
                const eventAmount = quote.eventItems.find((item) => item.label.startsWith(eventName))?.amount ?? 0;
                const durationLabel = durationOptions.find((option) => option.value === config.duration)?.label;

                return (
                  <section
                    className={`${styles.eventBuilder} ${isActive ? styles.eventBuilderOpen : ""}`}
                    key={eventName}
                  >
                    <button
                      aria-controls={`quote-${slug}-panel`}
                      aria-expanded={isActive}
                      className={styles.eventBuilderHeader}
                      onClick={() => toggleActiveEvent(eventName)}
                      type="button"
                    >
                      <span className={styles.eventBuilderSummary}>
                        <span>{eventName}</span>
                        <small>{durationLabel}</small>
                      </span>
                      <strong>{formatInr.format(eventAmount)}</strong>
                      <span aria-hidden="true" className={styles.quoteChevron} />
                    </button>

                    {isActive ? (
                      <div className={styles.eventBuilderPanel} id={`quote-${slug}-panel`}>
                        <div className={styles.quoteMetaGrid}>
                          <label>
                            Date
                            <input
                              name={`quote-${slug}-date`}
                              onChange={(event) => updateEventConfig(eventName, { date: event.target.value })}
                              type="date"
                              value={config.date}
                            />
                          </label>
                          <label>
                            Time
                            <input
                              name={`quote-${slug}-time`}
                              onChange={(event) => updateEventConfig(eventName, { time: event.target.value })}
                              placeholder="Example: 10 AM - 1 PM"
                              type="text"
                              value={config.time}
                            />
                          </label>
                          <label>
                            Location
                            <input
                              name={`quote-${slug}-location`}
                              onChange={(event) => updateEventConfig(eventName, { location: event.target.value })}
                              placeholder="Venue / home / area"
                              type="text"
                              value={config.location}
                            />
                          </label>
                        </div>

                        <div className={styles.quoteCoverageGrid}>
                          <label>
                            Coverage duration
                            <select
                              name={`quote-${slug}-duration`}
                              onChange={(event) => updateEventConfig(eventName, { duration: event.target.value as DurationKey })}
                              value={config.duration}
                            >
                              {durationOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </label>
                        </div>

                        <fieldset className={styles.quoteOptionGroup}>
                          <legend>Manual team</legend>
                          <div className={styles.teamQuantityGrid}>
                            {teamCategories.map((category) => (
                              <div className={styles.teamQuantity} key={category.value}>
                                <span>{category.label}</span>
                                <div className={styles.teamStepper}>
                                  <button
                                    aria-label={`Remove ${category.label.toLowerCase()} for ${eventName}`}
                                    onClick={() => updateTeamCategory(eventName, category.value, -1)}
                                    type="button"
                                  >
                                    -
                                  </button>
                                  <input
                                    name={`quote-${slug}-${category.value}`}
                                    readOnly
                                    type="text"
                                    value={getTeamCategoryCount(config.team, category.value)}
                                  />
                                  <button
                                    aria-label={`Add ${category.label.toLowerCase()} for ${eventName}`}
                                    onClick={() => updateTeamCategory(eventName, category.value, 1)}
                                    type="button"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </fieldset>
                      </div>
                    ) : null}
                  </section>
                );
              })}
            </div>
          ) : null}
        </section>

        <section className={styles.quoteAccordionSection}>
          <button
            aria-expanded={isSectionOpen("deliverables")}
            className={styles.quoteAccordionHeader}
            onClick={() => toggleSection("deliverables")}
            type="button"
          >
            <span>3. Deliverables</span>
            <small>{selectedDeliverables.length} selected</small>
            <span aria-hidden="true" className={styles.quoteChevron} />
          </button>
          {isSectionOpen("deliverables") ? (
            <div className={styles.quoteAccordionPanel}>
              <div className={styles.quoteAddonGrid}>
                {deliverables.map((item) => (
                  <label className={styles.quoteAddon} key={item.label}>
                    <input
                      checked={selectedDeliverables.includes(item.label)}
                      name="quote-deliverable"
                      onChange={() => toggleListItem(item.label, setSelectedDeliverables)}
                      type="checkbox"
                      value={item.label}
                    />
                    <span>{item.label}</span>
                    <small>{item.amount > 0 ? formatInr.format(item.amount) : "Included"}</small>
                  </label>
                ))}
              </div>
            </div>
          ) : null}
        </section>

        <section className={styles.quoteAccordionSection}>
          <button
            aria-expanded={isSectionOpen("upgrades")}
            className={styles.quoteAccordionHeader}
            onClick={() => toggleSection("upgrades")}
            type="button"
          >
            <span>4. Premium upgrades</span>
            <small>{selectedUpgrades.length} selected</small>
            <span aria-hidden="true" className={styles.quoteChevron} />
          </button>
          {isSectionOpen("upgrades") ? (
            <div className={styles.quoteAccordionPanel}>
              <div className={styles.quoteAddonGrid}>
                {upgrades.map((item) => (
                  <label className={styles.quoteAddon} key={item.label}>
                    <input
                      checked={selectedUpgrades.includes(item.label)}
                      name="quote-upgrade"
                      onChange={() => toggleListItem(item.label, setSelectedUpgrades)}
                      type="checkbox"
                      value={item.label}
                    />
                    <span>{item.label}</span>
                    <small>{formatInr.format(item.amount)}</small>
                  </label>
                ))}
              </div>
            </div>
          ) : null}
        </section>

        <section className={styles.quoteAccordionSection}>
          <button
            aria-expanded={isSectionOpen("travel")}
            className={styles.quoteAccordionHeader}
            onClick={() => toggleSection("travel")}
            type="button"
          >
            <span>5. Travel and logistics</span>
            <small>{outsideBaseCity === "Yes" ? "Outside Bangalore" : "In Bangalore"}</small>
            <span aria-hidden="true" className={styles.quoteChevron} />
          </button>
          {isSectionOpen("travel") ? (
            <div className={styles.quoteAccordionPanel}>
              <div className={styles.quoteChoiceGrid}>
                {["No", "Yes"].map((value) => (
                  <label className={styles.quoteChoice} key={value}>
                    <input
                      checked={outsideBaseCity === value}
                      name="quote-outside-base-city"
                      onChange={() => setOutsideBaseCity(value)}
                      type="radio"
                      value={value}
                    />
                    <span>{value === "Yes" ? "Outside Bangalore" : "In Bangalore"}</span>
                  </label>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      </div>

      <div className={styles.quoteResult} aria-live="polite">
        <div className={styles.quoteResultIntro}>
          <span>Quotation</span>
          <h3>Estimated coverage</h3>
          <p>
            This is an estimated quote. Final price may vary based on exact event timings, travel,
            venue restrictions, and custom requirements.
          </p>
        </div>
        <ul>
          {quote.lineItems.map((item) => (
            <li key={item.label}>
              <span>{item.label}</span>
              <span>{formatInr.format(item.amount)}</span>
            </li>
          ))}
        </ul>
        <div className={styles.quoteResultTotal}>
          <span>Total estimate</span>
          <strong>{formatInr.format(quote.total)}</strong>
        </div>
      </div>

      <input name="quote-selected-events" type="hidden" value={selectedEventSummary} />
      <input name="quote-deliverables" type="hidden" value={selectedDeliverableSummary} />
      <input name="quote-upgrades" type="hidden" value={selectedUpgradeSummary} />
      <input name="quote-travel-logistics" type="hidden" value={outsideBaseCity} />
      <input name="quote-estimate-starting-price" type="hidden" value={formatInr.format(quote.total)} />
      <input name="quote-estimate-line-items" type="hidden" value={lineItemSummary} />
    </section>
  );
}
