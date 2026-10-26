/* =========================================================
   EVERYTHING ON THE PAGE THAT CHANGES OVER TIME LIVES HERE.
   Add a paper, a news item or a job by adding an entry below —
   no HTML editing needed.
   ========================================================= */

window.CV = {

  NEWS: [
    { date: "May 2026", text: "Presented <b>ADEU</b> at AAMAS 2026 in Paphos, Cyprus. <a href=\"ADEU/\">Project page</a>." },
    { date: "Dec 2025", text: "Joined the ERC project <b>NEURi3D</b>." },
    { date: "Aug 2025", text: "<b>Seldonian Reinforcement Learning for Ad Hoc Teamwork</b> appeared at RLC 2025 (Edmonton, Canada)." },
    { date: "Mar 2024", text: "Started my PhD at the Technical University of Crete." }
  ],

  /* type: "conference" | "journal" | "preprint" | "workshop"
     me:   your name exactly as it appears in `authors` (it is shown in bold)
     links: any label → URL. Use "Project page" for a site in one of your repos, e.g. "ADEU/". */
  PUBLICATIONS: [
    {
      year: 2026,
      title: "A Novel Framework for Uncertainty-Driven Adaptive Exploration",
      authors: "Leonidas Bakopoulos, Georgios Chalkiadakis",
      venue: "Proceedings of the 25th International Conference on Autonomous Agents and Multiagent Systems (AAMAS 2026)",
      short: "AAMAS 2026",
      type: "conference",
      links: {
        "Project page": "ADEU/",
        "Paper": "https://arxiv.org/abs/2509.03219",
        "Code": "https://github.com/leoBakop/ADEU",
        "DOI": "https://doi.org/10.65109/HQII4250"
      }
    },
    {
      year: 2025,
      title: "Seldonian Reinforcement Learning for Ad Hoc Teamwork",
      authors: "Edoardo Zorzi, Alberto Castellini, Leonidas Bakopoulos, Georgios Chalkiadakis, Alessandro Farinelli",
      venue: "Reinforcement Learning Journal, vol. 6, pp. 2082–2100 — Reinforcement Learning Conference (RLC 2025)",
      short: "RLC 2025",
      type: "conference",
      links: {
        "Paper": "https://rlj.cs.umass.edu/2025/papers/Paper223.html",
        "arXiv": "https://arxiv.org/abs/2503.03885",
        "OpenReview": "https://openreview.net/forum?id=9idPDGKmQq"
      }
    }
  ],

  EXPERIENCE: [
    {
      when: "Dec 2025 – Present",
      title: "Researcher, ERC Project NEURi3D",
      where: "Technical University of Crete",
      text: "Research on 3D Transformers and new decision-making algorithms (reinforcement learning, world models) for point clouds."
    }
  ],

  EDUCATION: [
    {
      when: "Mar 2024 – Present",
      title: "PhD Student",
      where: "Technical University of Crete",
      text: "Research in deep reinforcement learning, decision-making under uncertainty and safe exploration."
    },
    {
      when: "Sep 2018 – Mar 2024",
      title: "Bachelor’s & Master’s Degree (integrated 4+1), Electrical & Computer Engineering",
      where: "Technical University of Crete",
      text: "Grade: 8.51 / 10"
    }
  ]
};
