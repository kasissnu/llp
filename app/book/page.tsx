import { ParallaxBookingBanner } from "../components/ParallaxBookingBanner";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";
import styles from "./book.module.css";

export default function BookPage() {
  return (
    <main className={styles.bookingPage} id="top">
      <SiteNav />

      <section className={styles.bookingHero}>
        <h1>Start with the date, the place, and the people.</h1>
        <p>
          Fill this in with whatever you know right now. We will use it to
          understand your celebration and reply with availability and next
          steps.
        </p>
      </section>

      <section className={styles.formSection}>
        <form
          className={styles.bookingForm}
          action="mailto:hello@leadinglinesphotography.com"
          method="post"
          encType="text/plain"
        >
          <label>
            Your name
            <input name="name" type="text" required />
          </label>
          <label>
            Email address
            <input name="email" type="email" required />
          </label>
          <label>
            Phone number
            <input name="phone" type="tel" required />
          </label>
          <label>
            Event date
            <input name="event-date" type="date" required />
          </label>
          <label>
            Venue / area in Bangalore
            <input name="venue" type="text" placeholder="Example: Indiranagar, Palace Grounds, Whitefield" />
          </label>
          <label>
            Event type
            <select name="event-type" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>Wedding</option>
              <option>Engagement</option>
              <option>Pre-wedding</option>
              <option>Family event</option>
              <option>Other celebration</option>
            </select>
          </label>
          <fieldset>
            <legend>What do you need?</legend>
            <label>
              <input name="service" type="checkbox" value="Photography" />
              Photography
            </label>
            <label>
              <input name="service" type="checkbox" value="Films" />
              Films
            </label>
            <label>
              <input name="service" type="checkbox" value="Photography and films" />
              Photography + films
            </label>
          </fieldset>
          <label>
            Estimated guest count
            <input name="guest-count" type="number" min="1" />
          </label>
          <label>
            Approximate budget
            <input name="budget" type="text" placeholder="Optional" />
          </label>
          <label className={styles.formWide}>
            Tell us about the celebration
            <textarea
              name="message"
              rows={6}
              placeholder="Rituals, number of events, timings, what matters most to you..."
              required
            />
          </label>
          <button type="submit">Send booking enquiry</button>
        </form>
      </section>

      <ParallaxBookingBanner
        eyebrow="We are listening"
        title="Share the details you know. We will help with the rest."
        body="Dates, venues, rituals, guest count, or just the feeling you want remembered."
        href="#top"
        label="Return to booking form"
      />

      <SiteFooter
        headline="Tell us what matters most, and we will shape the photography and films around that story."
        tone="book"
      />
    </main>
  );
}
