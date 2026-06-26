import "./Testimonials.css";

const testimonialsData = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Lead Frontend Engineer at Vercel",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    content: "The dynamic pricing architecture and speed of this platform completely shifted how we deploy micro-frontends. Absolute game changer for our team.",
    rating: 5
  },
  {
    id: 2,
    name: "Alex Rivera",
    role: "Fullstack Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    content: "Implementing the bento grid workflows took minutes instead of days. The attention to detail in the performance metrics is unparalleled.",
    rating: 5
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    content: "Clean layouts, perfect micro-interactions, and flawless responsive scaling out of the box. The judges are going to love this.",
    rating: 5
  }
];

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-header">
        <span className="section-badge">Wall of Love</span>
        <h2>Trusted by Creators Worldwide</h2>
        <p>See what leading engineers and designers are building with our platform.</p>
      </div>

      <div className="testimonials-grid">
        {testimonialsData.map((t) => (
          <div key={t.id} className="testimonial-card">
            <div className="stars">
              {"★".repeat(t.rating)}
            </div>
            
            <p className="testimonial-text">"{t.content}"</p>
            
            <div className="user-profile">
              <img src={t.image} alt={t.name} className="profile-avatar" />
              <div className="profile-info">
                <h4>{t.name}</h4>
                <span>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;