const collections = [
  {
    title: "Sculpted Linen",
    description: "Soft structure, sun-washed tones, and airy silhouettes.",
    price: "$148",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Evening Atelier",
    description: "Satin drapes and jewel hues for slow nights in the city.",
    price: "$220",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Nomad Tailored",
    description: "Workwear refined with hand-stitched detailing.",
    price: "$186",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Resort Bloom",
    description: "Floral prints made for coastal breezes and warm light.",
    price: "$132",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop"
  }
];

const highlights = [
  {
    label: "Artisan",
    title: "Hand-finished seams",
    copy: "Every piece is inspected in our Lisbon studio for a soft, enduring finish."
  },
  {
    label: "Limited",
    title: "Seasonal capsules",
    copy: "We release only three curated drops per year to keep wardrobes intentional."
  },
  {
    label: "Planet",
    title: "Mindful materials",
    copy: "Organic linens, deadstock silk, and recycled trims are our daily staples."
  }
];

export default function Home() {
  return (
    <div>
      <header className="container header">
        <div className="brand">MAISON LIORA</div>
        <nav className="nav">
          <a href="#collection">Collection</a>
          <a href="#studio">Studio</a>
          <a href="#journal">Journal</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="actions">
          <button className="action-btn">Search</button>
          <button className="action-btn primary-btn">Bag (2)</button>
        </div>
      </header>

      <main>
        <section className="container hero">
          <div className="hero-copy">
            <span className="tag">SS25 EDIT</span>
            <h1 style={{ fontFamily: "var(--font-display)" }}>
              An online atelier for modern romantic silhouettes.
            </h1>
            <p>
              Maison Liora curates slow fashion for women who live between coastal
              mornings and midnight gallery openings. Discover tactile fabrics,
              luminous color stories, and refined essentials.
            </p>
            <div className="hero-cta">
              <button className="action-btn primary-btn">Shop new arrivals</button>
              <button className="action-btn">Book a virtual fitting</button>
            </div>
            <div className="hero-meta">
              <span>Free express delivery over $150</span>
              <span>Styled by former Vogue editors</span>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop"
              alt="Model in sculpted dress"
            />
            <div className="hero-card-footer">
              <div>
                <strong>Seren Sculpt Dress</strong>
                <span> in brushed peach</span>
              </div>
              <span>$218</span>
            </div>
          </div>
        </section>

        <section id="collection" className="section">
          <div className="container">
            <div className="section-title">
              <div>
                <h2 style={{ fontFamily: "var(--font-display)" }}>
                  The Atelier Collection
                </h2>
                <p>
                  Capsules inspired by art residencies, soundscapes, and the
                  golden hour of Marseille.
                </p>
              </div>
              <button className="action-btn">View all pieces</button>
            </div>
            <div className="collections">
              {collections.map((item) => (
                <article key={item.title} className="collection-card">
                  <img src={item.image} alt={item.title} />
                  <div>
                    <span className="tag">NEW</span>
                    <h3 style={{ marginTop: "10px" }}>{item.title}</h3>
                    <p style={{ color: "var(--muted)", marginTop: "6px" }}>
                      {item.description}
                    </p>
                  </div>
                  <div className="hero-card-footer">
                    <span className="price">{item.price}</span>
                    <button className="action-btn">Add to bag</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="studio" className="section">
          <div className="container story">
            <div className="story-card">
              <span className="tag">STUDIO NOTES</span>
              <h3 style={{ fontFamily: "var(--font-display)" }}>
                Crafted in small runs for timeless wardrobes.
              </h3>
              <p>
                Our stylists work with a network of family-owned ateliers across
                Portugal and Japan. Each capsule is numbered, signed, and paired
                with a care ritual to keep garments luminous for years.
              </p>
              <button className="action-btn primary-btn">Meet the artisans</button>
            </div>
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop"
                alt="Fashion atelier interior"
              />
            </div>
          </div>
        </section>

        <section id="journal" className="section">
          <div className="container">
            <div className="section-title">
              <div>
                <h2 style={{ fontFamily: "var(--font-display)" }}>
                  The Liora Journal
                </h2>
                <p>
                  Weekly stories from stylists, travel diaries, and wardrobe
                  rituals to inspire your next look.
                </p>
              </div>
              <button className="action-btn">Read the journal</button>
            </div>
            <div className="collections">
              {highlights.map((item) => (
                <article key={item.title} className="collection-card">
                  <span className="tag">{item.label}</span>
                  <h3 style={{ marginTop: "12px" }}>{item.title}</h3>
                  <p style={{ color: "var(--muted)", marginTop: "8px" }}>
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="container footer">
        <div>
          <strong>Maison Liora</strong>
          <p style={{ marginTop: "8px" }}>
            18 Rue Saint-Paul, Paris · hello@maisonliora.com
          </p>
        </div>
        <div className="footer-links">
          <a href="#">Instagram</a>
          <a href="#">Pinterest</a>
          <a href="#">Lookbook</a>
        </div>
      </footer>
    </div>
  );
}
