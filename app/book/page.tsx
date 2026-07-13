import { ParallaxBookingBanner } from "../components/ParallaxBookingBanner";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import { BookingForm } from "./BookingForm";
import styles from "./book.module.css";
import { createPageMetadata } from "../seo";
import { wsMedia } from "../ws-media";

export const metadata = createPageMetadata({
  title: "Book Wedding Photography",
  description:
    "Share your event details for wedding photography and films in Bangalore, then send your enquiry to Leading Lines Photography on WhatsApp.",
  path: "/book",
  keywords: [
    "book wedding photographer Bangalore",
    "wedding enquiry form Bangalore",
    "wedding photography booking Bangalore",
    "Leading Lines Photography booking",
  ],
});

const testimonials = [
  {
    title: "The photographs felt like memory, not performance",
    quote:
      "Leading Lines made the day feel easy. They noticed the rituals, the pauses, the family chaos, and the tiny things we missed while living through it.",
    name: "Aditi & Chris, Indiranagar",
    image: wsMedia.portrait01,
  },
  {
    title: "Calm people with a very sharp eye",
    quote:
      "Nothing felt staged or heavy. They moved through the wedding quietly and somehow came back with everything that mattered.",
    name: "Ananya & Varun, Palace Grounds",
    image: wsMedia.portrait04,
  },
  {
    title: "Our film still feels alive every time we watch it",
    quote:
      "The video has the exact rhythm of our weekend. It is emotional without being overdone, and it feels completely like us.",
    name: "Leah & Arjun, Whitefield",
    image: wsMedia.portrait06,
  },
];

const faqs = [
  {
    question: "What makes candid coverage different from traditional styles?",
    answer:
      "Traditional coverage is often more posed and camera-aware. Our candid approach focuses on timing, emotion, movement, and atmosphere while still making space for important family portraits and formal moments.",
  },
  {
    question: "Do you offer both photography and videography services?",
    answer:
      "Yes. We can shape a combined team for stills and films so the coverage feels calm, coordinated, and planned around your rituals.",
  },
  {
    question: "How experienced are your photographers and videographers?",
    answer:
      "Leading Lines has documented weddings, pre-weddings, family events, and films across Bangalore and beyond. The team is planned around the scale, timing, and style of your celebration.",
  },
  {
    question: "Can we request specific shots or styles?",
    answer:
      "Yes. Share references, family priorities, must-have portraits, rituals, and any visual direction during planning. We will fold those into the coverage without making the day feel stiff.",
  },
  {
    question: "How long does it take to receive our photos and videos?",
    answer: "Photos and videos are delivered within 1 month.",
  },
  {
    question: "Do you provide aerial or drone photography or videography?",
    answer:
      "Drone coverage can be planned when the venue, permissions, weather, and event schedule allow it. Tell us your venue details and we will confirm what is possible.",
  },
  {
    question: "Are there additional fees for travel or destination weddings?",
    answer:
      "Yes, travel and stay are estimated separately when events are outside Bangalore or require a destination team. Share the city, venues, and event schedule and we will include it in the quote.",
  },
  {
    question: "How do we book your photography and videography services?",
    answer:
      "We review your date, events, and priorities, then reply with availability, next questions, and a suggested collection direction.",
  },
];

export default function BookPage() {
  return (
    <main className={styles.bookingPage} id="top">
      <SiteNav />

      <ParallaxBookingBanner
        eyebrow="Wedding enquiry"
        title="Tell us about your event."
        body="Share the date, event name, venue, and any special requirements. We will follow up with the next steps."
        href="#event-details"
        label="Share your event details"
        image={wsMedia.bookingBanner}
      />

      <section className={styles.formSection} id="event-details">
        <BookingForm />
      </section>

      <TestimonialCarousel testimonials={testimonials} />

      <section className={styles.faqSection} aria-label="Frequently asked questions">
        <div className={styles.faqIntro}>
          <p className="section-label">FAQs</p>
          <h2>Before you send the enquiry.</h2>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <SiteFooter
        headline="Tell us what matters most, and we will shape the photography and films around that story."
        tone="book"
      />
    </main>
  );
}
