// CV content. Edit here; markup and scripts read from this object.
window.CV = {
  talks: [
    // place: key into PLACES; place null => online / location not listed on the CV
    { year: 2025, place: null, kind: "Invited talk", title: "Can AI Improvise on the Oud? A Brief Journey through Two Experiments in Generating Arab Music (in Arabic)", venue: "Arab Music Researchers Group, Music and Artificial Intelligence series, with Fadi Al-Ghawanmeh and Omar Abbad" },
    { year: 2025, place: "baltimore", kind: "Invited talk", title: "Hearing Humanitarianism", venue: "Musicology colloquium, Peabody Institute of Johns Hopkins University" },
    { year: 2025, place: null, kind: "Invited talk", title: "Can AI Play the Oud? Experimenting with Music AI Models for Arab Traditions", venue: "Online panel, Society for Arab Music Research and Arab World-ICTMD Working Group, with Fadi Al-Ghawanmeh" },
    { year: 2024, place: null, kind: "Paper", title: "Beyond the Humanitarian Mandate: Critical Approaches to Music and Humanitarianism in Jordan", venue: "Society for Ethnomusicology 69th Annual Meeting" },
    { year: 2024, place: "cairo", kind: "Paper", title: "The Humanitarian Sector and Its Impact on Knowledge Production in Arab Music: The Case of Jordan (in Arabic)", venue: "32nd Arab Music Festival and Conference" },
    { year: 2024, place: "cairo", kind: "Paper", title: "Using Generative AI in the Music Classroom: Concepts, Methods, and Future Collaborations (in Arabic)", venue: "Fourth International Conference on Music and Society in the 21st Century, Helwan University, with Fadi Al-Ghawanmeh" },
    { year: 2024, place: "chicago", kind: "Workshop", title: "AI Ecstasy? Towards Generative AI Tools for Arab Music", venue: "American Musicological Society 104th Annual Meeting, with Fadi Al-Ghawanmeh and Alexander Refsum Jensenius" },
    { year: 2022, place: "lisbon", kind: "Paper", title: "On the Musical Legibility of Suffering", venue: "46th International Council for Traditional Music World Conference, NOVA University Lisbon" },
    { year: 2022, place: "graz", kind: "Roundtable", title: "Listening to Jordan’s ‘Unified’ Call to Prayer: Transnationalism, Displacement, and the Islamic Public Sphere", venue: "Pre-conference symposium, XXXVII European Seminar in Ethnomusicology, University of Music and Performing Arts Graz" },
    { year: 2022, place: "athens", kind: "Roundtable", title: "Music Infrastructures Across Borders: Digital media, mobile technologies, and music among Syrians in Greece and Jordan", venue: "21st Quinquennial Congress of the International Musicological Society, National and Kapodistrian University of Athens" },
    { year: 2022, place: "hanover", kind: "Workshop", title: "The Aurality of Displacement: Listening to Diaspora and Humanitarianism in Jordan", venue: "Twelfth International Doctoral Workshop in Ethnomusicology, Hanover University of Music, Drama & Media" },
    { year: 2021, place: "berkeley", kind: "Invited talk", title: "Music and the Humanitarian Imagination", venue: "Center for Middle Eastern Studies, UC Berkeley" },
    { year: 2021, place: null, kind: "Invited talk", title: "Soundscapes and Displaced Subjectivities in Amman, Jordan", venue: "Music and Syrian Migration Study Group" },
    { year: 2021, place: "amman", kind: "Invited talk", title: "A Troubled Unison: The Unified Call to Prayer in Jordan", venue: "American Center of Research, Amman" },
    { year: 2021, place: null, kind: "Paper", title: "The Call to Prayer and the Sonic Materiality of Displacement in Amman, Jordan", venue: "Society for Ethnomusicology 66th Annual Meeting" },
    { year: 2021, place: "santiago", kind: "Paper", title: "Predicting and Critiquing Machine Virtuosity: Mawwal Accompaniment as Case Study", venue: "International Computer Music Conference, with Al-Ghawanmeh, Menacer, and Smaïli" },
    { year: 2020, place: "copenhagen", kind: "Paper", title: "‘Nice But Not Necessary’: Music and Humanitarian Norms in Jordan", venue: "Music and Cultural Diplomacy in the Middle East, University of Copenhagen" },
    { year: 2019, place: "merced", kind: "Paper", title: "Humanitarianism and the Ethics of Style: Rethinking Music in Jordan", venue: "Northern California Chapter of the Society for Ethnomusicology, UC Merced" },
    { year: 2019, place: "cairo", kind: "Paper", title: "Rethinking Jordanian Music: Perspectives on the Politics of Style", venue: "ICTM Music in the Arab World Study Group Meeting" },
    { year: 2018, place: "berkeley", kind: "Panel", title: "Fellowships and Grant Applications", venue: "Graduate Student Colloquium, Department of Music, UC Berkeley" },
    { year: 2018, place: "cairo", kind: "Paper", title: "Between Description of Egypt and Music Performance Today: Renewal and Preservation at ‘Makan’ (in Arabic)", venue: "Research and Creativity Convention, American University in Cairo" },
    { year: 2017, place: "madaba", kind: "Invited lecture", title: "An Ethnomusicology of Arab Music", venue: "American University of Madaba" },
    { year: 2011, place: "chicago", kind: "Paper", title: "Beating Up the Beat: Music on Jersey Shore", venue: "Conference on Jersey Shore Studies, University of Chicago" }
  ],

  places: {
    amman:      { name: "Amman, Jordan",        lat: 31.95, lng: 35.93 },
    madaba:     { name: "Madaba, Jordan",       lat: 31.72, lng: 35.79 },
    cairo:      { name: "Cairo, Egypt",         lat: 30.04, lng: 31.24 },
    lisbon:     { name: "Lisbon, Portugal",     lat: 38.72, lng: -9.14 },
    athens:     { name: "Athens, Greece",       lat: 37.98, lng: 23.73 },
    hanover:    { name: "Hanover, Germany",     lat: 52.37, lng: 9.74 },
    graz:       { name: "Graz, Austria",        lat: 47.07, lng: 15.44 },
    copenhagen: { name: "Copenhagen, Denmark",  lat: 55.68, lng: 12.57 },
    santiago:   { name: "Santiago, Chile",      lat: -33.45, lng: -70.67 },
    baltimore:  { name: "Baltimore, MD",        lat: 39.29, lng: -76.61 },
    chicago:    { name: "Chicago, IL",          lat: 41.88, lng: -87.63 },
    berkeley:   { name: "Berkeley, CA",         lat: 37.87, lng: -122.27 },
    merced:     { name: "Merced, CA",           lat: 37.30, lng: -120.48 },
    orlando:    { name: "Orlando, FL",          lat: 28.54, lng: -81.38, home: true }
  },

  timeline: [
    { year: "2013", text: "B.A. in Music with Departmental Honors, University of Chicago", type: "study", note: "Leonard B. Meyer Prize for Undergraduate Musical Scholarship" },
    { year: "2014–15", text: "FLAS Academic Year Fellowship (Arabic)", type: "fellowship" },
    { year: "2016", text: "M.A. in Ethnomusicology, UC Berkeley", type: "study", note: "Critical Language Scholarship, Arabic in Oman" },
    { year: "2017–18", text: "Center for Arabic Study Abroad Fellow, American University in Cairo", type: "fellowship" },
    { year: "2019–20", text: "Fulbright-Hays Doctoral Dissertation Research Abroad Fellowship", type: "fellowship", note: "Followed by the CAORC Pre-Doctoral Fellowship in Amman, 2020–21" },
    { year: "2022", text: "Charles Seeger Prize, Society for Ethnomusicology", type: "award" },
    { year: "2023", text: "Ph.D. in Ethnomusicology, UC Berkeley", type: "study" },
    { year: "2023–25", text: "Robert A. Oden Jr. Postdoctoral Fellow for Innovation in the Liberal Arts and Music, Carleton College", type: "job", note: "2025: Elizabeth May (Slater) Prize, SEM Education Section" },
    { year: "2025", text: "Lecturer in Ethnomusicology, University of Central Florida", type: "job", note: "Research group on AI and Modern Technologies in Arabic Music, University of Jordan" },
    { year: "2026", text: "“Sounded Difference and Displacement in Jordan’s ‘Unified’ Call to Prayer,” Ethnomusicology 70(2)", type: "pub" },
    { year: "2027", text: "Fulbright U.S. Scholar Fellowship to Jordan (postponed from summer 2026)", type: "fellowship" }
  ],

  publications: {
    articles: [
      { year: "2026", text: "“Sounded Difference and Displacement in Jordan’s ‘Unified’ Call to Prayer.” <em>Ethnomusicology</em> 70(2)." },
      { year: "2025", text: "Scott, Melissa J., and Fadi Al-Ghawanmeh. “Generative AI for the Music Classroom: Selected Key Topics and Supporting Tools.” Editors Forum on Ethnomusicology and AI. <em>Ethnomusicology Forum</em> 34(2): 283–288." },
      { year: "2021", text: "Al-Ghawanmeh, Fadi, Melissa J. Scott, Mohamed Amine Menacer, and Kamel Smaïli. “Predicting and Critiquing Machine Virtuosity: Mawwal Accompaniment as Case Study.” <em>International Computer Music Conference Proceedings</em>. Santiago, Chile." },
      { year: "2022", text: "Review of <em>The Politics of Art: Dissent and Cultural Diplomacy in Lebanon, Palestine, and Jordan</em> by Hanan Toukan. H-AMCA, H-Net Reviews." }
    ],
    inProgress: [
      { text: "<em>The Aurality of Displacement: Hearing Humanitarianism and Migration in Jordan.</em> Book manuscript." },
      { text: "“Humanitarian Governmentality in Jordan’s Music Programs: The Norms and Nuances of Musical ‘Aid.’” To be submitted to the <em>Journal of the American Musicological Society</em>." },
      { text: "Scott, Melissa J., Carol Frierson-Campbell, and Mohammad Othman Sidiq. “Musical Acts of Cultural Translation in Jordan: On the Compositions of Mohammad Othman Sidiq.”" }
    ],
    media: [
      { year: "2025", text: "Podcast episode with student research assistants, Carleton College’s <em>The Year of Curiosity Podcast</em>." },
      { year: "2021", text: "“Ask a Scholar” with ethnomusicologist Melissa J. Scott. ACOR Jordan. May 24." },
      { year: "2011", text: "“New Europe, Center Stage: Orientalism and Nationalism in the Eurovision Song Contest.” <em>The Midway Review</em> 7(1)." }
    ]
  },

  teaching: [
    {
      school: "University of Central Florida", place: "Orlando, FL", role: "Lecturer in Ethnomusicology", open: true,
      courses: [
        "Ethnographic Methods (grad seminar, Spring 2027)",
        "Playing with Music and AI (undergrad/grad, taught with Fadi Al-Ghawanmeh, Fall 2026)",
        "Enjoyment of Music (Fall 2025, Spring 2026, Fall 2026)",
        "Music in the United States (Fall 2025, Spring 2026, Fall 2026)",
        "Music of the World (Fall 2025, Spring 2026, Fall 2026)"
      ],
      advising: [
        "Committee Member, Ph.D. in Computer Science, Jacob Galajda, “The Impact of Compositional Embeddings in Classical Composer Music Generation” (Spring 2026–)",
        "Committee Chair, MA Project in Music, Joel Huaco, “El Sonido del Pueblo: Chicha and Power” (Fall 2025)",
        "Committee Chair, Undergraduate BA Capstone Project in Music, Maria Iturrizaga, “The Soundscapes of Peru: A Regional Study of Tradition and Identity” (Fall 2025)"
      ]
    },
    {
      school: "Carleton College", place: "Northfield, MN", role: "Robert A. Oden Jr. Postdoctoral Fellow for Innovation in the Liberal Arts and Music",
      courses: [
        "Ethnomusicology and the World’s Music (Spring 2024, Winter 2025)",
        "Music Studies at the Border (Fall 2024)",
        "Popular Music in the Middle East (Fall 2024)",
        "Music and Humanitarianism (Winter 2024)"
      ]
    },
    {
      school: "University of California, Berkeley", place: "Berkeley, CA", role: "Graduate Student Instructor",
      courses: [
        "Music and Digital Media (primary instructor, Fall 2022)",
        "Music in Displacement (instructor of record, Summer 2021)",
        "Basic Musicianship (primary instructor, Fall 2016, Fall 2020)",
        "Music in American Cultures, Prof. T. Carlis Roberts (Spring 2017; Head GSI Fall 2018)",
        "Music of the Middle East, Prof. Benjamin Brinner (Spring 2016; reader Fall 2018)",
        "University Chorus, Prof. Marika Kuzma (Fall 2015)"
      ]
    }
  ],

  grants: [
    ["2026", "Participant, Summer 2026 Digital Humanities Faculty Generative AI Learning Community, University of Central Florida (funded by the National Endowment for the Humanities)"],
    ["2025", "OudGen: An AI Model for a Non-Western Musical Tradition, summer research partnerships with undergraduate students, Humanities Center, Carleton College (~$9k)"],
    ["2025", "OudGen: An AI Model for a Non-Western Musical Tradition, Office of the Provost, Carleton College ($8,050)"],
    ["2025", "Critical Language Scholarship “Refresh” Language Program"],
    ["2022", "Graduate Assembly Professional Development Award, UC Berkeley"],
    ["2019, 2022", "Graduate Division Conference Travel Grant, UC Berkeley"],
    ["2016, ’18, ’20", "Critical Language Scholarship Alumni Development Fund"],
    ["2017, 2020", "Andrew Mellon Conference Grant, CMES at UC Berkeley (2020 returned)"],
    ["2016, ’17, ’19", "Sultan Fund, CMES at UC Berkeley (SWANA music ensemble)"],
    ["2012", "Foreign Language Acquisition Grant (Turkish in Istanbul), University of Chicago"]
  ],

  honors: [
    ["2025", "Elizabeth May (Slater) Prize", "Society for Ethnomusicology Education Section"],
    ["2022", "Charles Seeger Prize", "Society for Ethnomusicology"],
    ["2021", "RMSS Student Paper Prize", "Society for Ethnomusicology"],
    ["2019", "Marnie Dilling Prize", "Northern California Chapter of the Society for Ethnomusicology"],
    ["2013", "Leonard B. Meyer Prize for Undergraduate Musical Scholarship", "Department of Music, University of Chicago"]
  ],

  service: {
    university: [
      "Search Committee member, tenure-track position in Theatre History, School of Performing Arts, UCF (2025–26)",
      "Graduate Curriculum Committee (Music), School of Performing Arts, UCF (2025–26)",
      "Scholarships and Awards Sub-Committee (Music), School of Performing Arts, UCF (2025–26)",
      "Library Liaison, Department of Music, UCF (2025–26)",
      "Representative for the School of Performing Arts, Ad Hoc Committee on AI Pedagogy, College of Arts and Humanities, UCF (2025–26)",
      "Search Committee member, tenure-track position in Ethnomusicology, UC Berkeley (2017)"
    ],
    discipline: [
      "Charles Seeger Prize Committee, Society for Ethnomusicology (2023)",
      "RMSS Student Paper Prize Committee, Society for Ethnomusicology (2022)",
      "Marnie Dilling Prize Committee, Northern California Chapter of the Society for Ethnomusicology (2020)"
    ]
  },

  ensembles: [
    ["St. Olaf Somali Music Ensemble", "oudist", "Northfield, MN", "2024"],
    ["Association Nedjma", "oudist and vocalist", "Nancy, France", "2021–22"],
    ["Awtar Amman", "oudist", "Amman, Jordan", "2017, 2019–20"],
    ["Disoriental", "director and oudist", "UC Berkeley", "2016–17, 2018–19"],
    ["Aswat Women’s Ensemble", "oudist", "Oakland, CA", "2016–17"],
    ["Aswat Ensemble", "oudist", "Oakland, CA", "2014–17"]
  ],

  languages: [
    ["English", "native"],
    ["Arabic", "advanced (Egyptian, Jordanian, Modern Standard)"],
    ["French", "intermediate speaking & writing; advanced reading"],
    ["Ottoman Turkish", "intermediate reading"]
  ],

  memberships: [
    "American Musicological Society",
    "International Council for Traditions of Music and Dance",
    "Middle Eastern Studies Association",
    "Society for Ethnomusicology"
  ]
};
