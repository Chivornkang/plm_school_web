import { useState } from "react";
import "./Classes.css";

const classesData = [
  {
    id: 1,
    grade: "Grade 1",
    gradeKh: "ថ្នាក់ទី១",
    teacher: "Mrs. Sokha Chea",
    teacherKh: "លោកគ្រូ សុខា ជា",
    students: 28,
    schedule: "Mon – Fri, 7:00 AM – 11:00 AM",
    scheduleKh: "ច័ន្ទ – សុក្រ, ៧:០០ – ១១:០០",
    subjects: ["Khmer", "Math", "Moral Education", "Art"],
    subjectsKh: ["ភាសាខ្មែរ", "គណិតវិទ្យា", "សីលធម៌", "សិល្បៈ"],
    color: "#FF8C00",
    emoji: "🌱",
    room: "Room 101",
    roomKh: "បន្ទប់ ១០១",
  },
  {
    id: 2,
    grade: "Grade 2",
    gradeKh: "ថ្នាក់ទី២",
    teacher: "Mr. Veasna Pov",
    teacherKh: "លោកគ្រូ វាសនា ប៉ូវ",
    students: 30,
    schedule: "Mon – Fri, 7:00 AM – 11:00 AM",
    scheduleKh: "ច័ន្ទ – សុក្រ, ៧:០០ – ១១:០០",
    subjects: ["Khmer", "Math", "Science", "Art"],
    subjectsKh: ["ភាសាខ្មែរ", "គណិតវិទ្យា", "វិទ្យាសាស្ត្រ", "សិល្បៈ"],
    color: "#FFA500",
    emoji: "🌿",
    room: "Room 102",
    roomKh: "បន្ទប់ ១០២",
  },
  {
    id: 3,
    grade: "Grade 3",
    gradeKh: "ថ្នាក់ទី៣",
    teacher: "Mrs. Channary Lim",
    teacherKh: "លោកគ្រូ ចន្ទារី លីម",
    students: 32,
    schedule: "Mon – Fri, 7:00 AM – 11:30 AM",
    scheduleKh: "ច័ន្ទ – សុក្រ, ៧:០០ – ១១:៣០",
    subjects: ["Khmer", "Math", "Science", "Social Studies", "Art"],
    subjectsKh: ["ភាសាខ្មែរ", "គណិតវិទ្យា", "វិទ្យាសាស្ត្រ", "សិក្សាសង្គម", "សិល្បៈ"],
    color: "#FFB700",
    emoji: "🌻",
    room: "Room 201",
    roomKh: "បន្ទប់ ២០១",
  },
  {
    id: 4,
    grade: "Grade 4",
    gradeKh: "ថ្នាក់ទី៤",
    teacher: "Mr. Dara Noun",
    teacherKh: "លោកគ្រូ តារា នួន",
    students: 29,
    schedule: "Mon – Fri, 7:00 AM – 11:30 AM",
    scheduleKh: "ច័ន្ទ – សុក្រ, ៧:០០ – ១១:៣០",
    subjects: ["Khmer", "Math", "Science", "Social Studies", "English", "Art"],
    subjectsKh: ["ភាសាខ្មែរ", "គណិតវិទ្យា", "វិទ្យាសាស្ត្រ", "សិក្សាសង្គម", "អង់គ្លេស", "សិល្បៈ"],
    color: "#E8900A",
    emoji: "🌸",
    room: "Room 202",
    roomKh: "បន្ទប់ ២០២",
  },
  {
    id: 5,
    grade: "Grade 5",
    gradeKh: "ថ្នាក់ទី៥",
    teacher: "Mrs. Sreymom Keo",
    teacherKh: "លោកគ្រូ ស្រីម៉ុម កែវ",
    students: 27,
    schedule: "Mon – Fri, 7:00 AM – 12:00 PM",
    scheduleKh: "ច័ន្ទ – សុក្រ, ៧:០០ – ១២:០០",
    subjects: ["Khmer", "Math", "Science", "Social Studies", "English", "Art", "PE"],
    subjectsKh: ["ភាសាខ្មែរ", "គណិតវិទ្យា", "វិទ្យាសាស្ត្រ", "សិក្សាសង្គម", "អង់គ្លេស", "សិល្បៈ", "កីឡា"],
    color: "#D4780A",
    emoji: "⭐",
    room: "Room 301",
    roomKh: "បន្ទប់ ៣០១",
  },
  {
    id: 6,
    grade: "Grade 6",
    gradeKh: "ថ្នាក់ទី៦",
    teacher: "Mr. Piseth Heng",
    teacherKh: "លោកគ្រូ ពិសិទ្ធ ហេង",
    students: 25,
    schedule: "Mon – Fri, 7:00 AM – 12:00 PM",
    scheduleKh: "ច័ន្ទ – សុក្រ, ៧:០០ – ១២:០០",
    subjects: ["Khmer", "Math", "Science", "Social Studies", "English", "Art", "PE", "Computer"],
    subjectsKh: ["ភាសាខ្មែរ", "គណិតវិទ្យា", "វិទ្យាសាស្ត្រ", "សិក្សាសង្គម", "អង់គ្លេស", "សិល្បៈ", "កីឡា", "កុំព្យូទ័រ"],
    color: "#C46B09",
    emoji: "🏆",
    room: "Room 302",
    roomKh: "បន្ទប់ ៣០២",
  },
];

export default function Classes() {
  const [lang, setLang] = useState("en");
  const [activeCard, setActiveCard] = useState(null);

  const t = (en, kh) => (lang === "en" ? en : kh);

  return (
    <section className="classes-section">
      {/* Header */}
      <div className="classes-header">
        <div className="classes-header-top">
          <div className="classes-badge">
            <span>🏫</span>
            <span>{t("Our Classrooms", "ថ្នាក់រៀនរបស់យើង")}</span>
          </div>
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === "en" ? "kh" : "en")}
          >
            {lang === "en" ? "ខ្មែរ" : "English"}
          </button>
        </div>

        <h1 className="classes-title">
          {t("Classes & Grades", "ថ្នាក់ និង ថ្នាក់ទី")}
        </h1>
        <p className="classes-subtitle">
          {t(
            "Explore each grade level at Pralay Meas Primary School — dedicated teachers, engaging subjects, and a nurturing environment for every child.",
            "ស្វែងយល់អំពីថ្នាក់នីមួយៗនៅសាលាបឋមសិក្សាប្រឡាយមាស — គ្រូដែលយកចិត្តទុកដាក់ មុខវិជ្ជាគួរឱ្យចាប់អារម្មណ៍ និងបរិយាកាសផ្តល់នូវវប្បធម៌ល្អសម្រាប់កុមារគ្រប់រូប។"
          )}
        </p>

        {/* Stats Row */}
        <div className="classes-stats">
          <div className="stat-item">
            <span className="stat-number">6</span>
            <span className="stat-label">{t("Grade Levels", "ថ្នាក់ទី")}</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">171</span>
            <span className="stat-label">{t("Students", "សិស្ស")}</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">6</span>
            <span className="stat-label">{t("Teachers", "គ្រូ")}</span>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="classes-grid">
        {classesData.map((cls, i) => (
          <div
            key={cls.id}
            className={`class-card ${activeCard === cls.id ? "active" : ""}`}
            style={{ "--card-color": cls.color, "--delay": `${i * 0.08}s` }}
            onClick={() => setActiveCard(activeCard === cls.id ? null : cls.id)}
          >
            {/* Card Top */}
            <div className="card-top">
              <div className="card-emoji">{cls.emoji}</div>
              <div className="card-grade-info">
                <h2 className="card-grade">{t(cls.grade, cls.gradeKh)}</h2>
                <span className="card-room">{t(cls.room, cls.roomKh)}</span>
              </div>
              <div className="card-chevron">
                {activeCard === cls.id ? "▲" : "▼"}
              </div>
            </div>

            {/* Teacher & Students */}
            <div className="card-meta">
              <div className="meta-row">
                <span className="meta-icon">👩‍🏫</span>
                <span>{t(cls.teacher, cls.teacherKh)}</span>
              </div>
              <div className="meta-row">
                <span className="meta-icon">👦</span>
                <span>
                  {cls.students} {t("students", "សិស្ស")}
                </span>
              </div>
              <div className="meta-row">
                <span className="meta-icon">🕖</span>
                <span>{t(cls.schedule, cls.scheduleKh)}</span>
              </div>
            </div>

            {/* Subjects — expand on click */}
            {activeCard === cls.id && (
              <div className="card-subjects">
                <p className="subjects-label">
                  {t("Subjects", "មុខវិជ្ជា")}
                </p>
                <div className="subjects-tags">
                  {(lang === "en" ? cls.subjects : cls.subjectsKh).map(
                    (subj) => (
                      <span key={subj} className="subject-tag">
                        {subj}
                      </span>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Bottom accent bar */}
            <div className="card-accent-bar" />
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="classes-footer">
        <p>
          {t(
            "Click on any class card to view subjects offered.",
            "ចុចលើប័ណ្ណថ្នាក់ណាមួយដើម្បីមើលមុខវិជ្ជាដែលបង្រៀន។"
          )}
        </p>
      </div>
    </section>
  );
}
