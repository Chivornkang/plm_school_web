import './Footer.css'

export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-emblem">P</div>
            <div>
              <div className="footer-name">Pralay Meas Primary School</div>
              <div className="footer-name-km">សាលាបឋមសិក្សាប្រឡាយមាស</div>
              <p className="footer-desc">Nurturing young minds with knowledge, values, and excellence across Cambodia.</p>
            </div>
          </div>

          <div className="footer-links">
            {/* <h4>Navigation / ផ្លូវ</h4> */}
            {[
              ['home', 'Home / ទំព័រដើម'],
              ['about', 'About / អំពីសាលា'],
              ['management', 'Team / ក្រុមការងារ'],
              ['news', 'News / ព័ត៌មាន'],
              ['contact', 'Contact / ទំនាក់ទំនង'],
            ].map(([id, label]) => (
              <button key={id} className="footer-link" onClick={() => navigate(id)}>{label}</button>
            ))}
          </div>

          <div className="footer-contact">
            <h4>Contact / ទំនាក់ទំនង</h4>
            <div className="footer-contact-item">📍 អាសយដ្ឋាន, ប្រឡាយមាស កំពង់លែង​​ កំពង់ឆ្នាំង កម្ពុជា</div>
            <div className="footer-contact-item">📞 +855 031 636 396 3</div>
            <div onClick={() => window.location.href='mailto:pralaymeaspms@email.com'} className="footer-contact-item">📧 pralaymeaspms@email.com</div>
            <div className="footer-contact-item">🕐 Mon–Sat: 7 AM – 5 PM</div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2026 Pralay Meas Primary School. All rights reserved.</span>
          <span className="footer-km">© ២០២៦ សាលាបឋមសិក្សាប្រឡាយមាស</span>
        </div>
      </div>
    </footer>
  )
}
