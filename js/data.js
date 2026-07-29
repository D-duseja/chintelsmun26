// ============================================================
// CHINTELSMUN'26 — ALL DATA
// Committees, Secretariat, Executive Boards, ROPs & Overviews
// ============================================================

const COMMITTEES = [
  {
    id: 'unsc-ctc',
    abbr: 'UNSC-CTC',
    name: 'United Nations Security Council — Counter-Terrorism Committee',
    type: 'general',
    typeLabel: 'UN Body',
    level: 'Advanced',
    agenda: 'Examining the rising threat of extremist attacks on critical infrastructure in the Sahel and West African corridor, with special emphasis on energy security, maritime trade, cyber-physical threats, unmanned aerial systems (UAS), and regional security coordination.',
    about: 'Established pursuant to Security Council Resolution 1373 (2001) in the wake of the September 11 terrorist attacks, the Counter-Terrorism Committee (CTC) works to bolster the capability of UN Member States to prevent terrorist acts within their borders and across regions. Operating under Chapter VII mandate powers, the CTC conducts country assessments, facilitates technical assistance, and monitors international counter-terrorism compliance.',
    agendaDetail: [
      'Protection of Critical Infrastructure (energy grids, power plants, digital financial switches) against cyber-physical sabotage.',
      'Regulation and counter-measures against the weaponization of Unmanned Aerial Systems (UAS) and commercial drones by non-state actors.',
      'Securing maritime trade routes and coastal supply chains along the Gulf of Guinea and West African corridor.',
      'Enhancing intelligence sharing, border security, and counter-terror financing (CTF) protocols among Sahel states.'
    ],
    rops: {
      format: 'UN Security Council Procedure (GSL + Mod/Unmod Caucuses)',
      motions: 'Motion to Open GSL, Motion for Moderated Caucus, Motion for Unmoderated Caucus, Motion to Introduce Draft Resolution',
      voting: 'Procedural: Simple Majority (9/15). Substantive: 9 affirmative votes with P5 Veto power applicable (USA, UK, France, China, Russia).',
      documentation: 'Draft Security Council Resolutions (requires 1 Mover, 2 Seconders), Presidential Statements (PRST).'
    },
    board: [
      { role: 'Chairperson', name: 'Shwetank Upadhyay' },
      { role: 'Vice-Chairperson', name: 'Chaitanya Rohra' },
    ]
  },
  {
    id: 'ccc',
    abbr: 'CCC',
    name: 'Classified Crisis Committee',
    type: 'crisis',
    typeLabel: 'Crisis',
    level: 'Crisis / Expert',
    agenda: '"Classified" — Details to be revealed at the conference. Prepare for the unexpected.',
    about: 'The Classified Crisis Committee is an intense, fast-paced environment operating in dynamic real-time. Delegates assume high-stakes geopolitical roles—such as heads of state, military commanders, intelligence directors, and diplomats—navigating rapid crisis developments, covert operations, and immediate decision-making. Information is compartmentalized and crisis updates will break dynamically throughout the sessions.',
    agendaDetail: [
      'Top-Secret Scenario: Full intelligence dossier disclosed upon committee session initiation.',
      'Real-Time Crisis Updates: Responding to breaking geopolitical emergencies, cyber warfare, and intelligence leaks.',
      'Strategic Decision-Making: Balancing unilateral portfolio directives with multilateral crisis cabinet actions.',
      'High-Stakes Negotiations: Managing international alliances, covert directives, and rapid military/diplomatic deployments.'
    ],
    rops: {
      format: 'Fast-Paced Crisis Cabinet Rules (Single Speaker List / Open Floor Directive Debates)',
      motions: 'Motion for Timed Crisis Debate, Motion for Unmoderated Caucus, Motion for Emergency Cabinet Voting',
      voting: 'Simple Majority (50% + 1) for Press Releases, Cabinet Directives, and Communiqués.',
      documentation: 'Individual Directives, Joint Directives, Crisis Communiqués, Press Releases, Action Orders.'
    },
    board: [
      { role: 'Chairperson', name: 'Mohak Seth' },
      { role: 'Co-Vice Chairperson', name: 'Amaira Shukla' },
      { role: 'Co-Vice Chairperson', name: 'Aastha Tripathi' },
    ]
  },
  {
    id: 'undp',
    abbr: 'UNDP',
    name: 'United Nations Development Programme',
    type: ['junior', 'general'],
    typeLabel: 'Junior Committee',
    level: 'Beginner Friendly',
    agenda: 'Examining the growing impact of digital inequality on sustainable development, with special emphasis on artificial intelligence accessibility, digital public infrastructure, skill development, cybersecurity preparedness, and technological inclusion in developing and least-developed economies.',
    about: 'The United Nations Development Programme (UNDP) is the UN\'s global development network, advocating for change and connecting countries to knowledge, experience, and resources to help people build a better life. As a designated Junior Committee at ChintelsMUN\'26, UNDP provides a welcoming, encouraging, and structured platform for first-time and early-career MUN delegates to master diplomatic procedures.',
    agendaDetail: [
      'Bridging the Global Digital Divide: Ensuring affordable broadband and hardware access in developing nations.',
      'AI & Future Skills: Promoting equitable artificial intelligence tools, digital literacy, and STEM education for youth.',
      'Digital Public Infrastructure (DPI): Standardizing open-source digital identity, payment systems, and public data systems.',
      'Cybersecurity & Safe Digital Ecosystems: Protecting vulnerable communities and SMMEs from online threats and digital fraud.'
    ],
    rops: {
      format: 'Standard UNGA Rules of Procedure with Guided Mentorship',
      motions: 'Motion to Open GSL, Motion for Moderated Caucus (Topic & Time), Motion to Suspend Meeting (Unmod)',
      voting: 'Simple Majority (50% + 1) for both Procedural and Substantive motions.',
      documentation: 'Working Papers, Draft Resolutions (Mover & Seconder structure explained step-by-step by EB).'
    },
    board: [
      { role: 'Co-Chairperson', name: 'Bhumi Prasad' },
      { role: 'Co-Chairperson', name: 'Hamid Siddiqui' },
    ]
  },
  {
    id: 'aippm',
    abbr: 'AIPPM',
    name: 'All India Political Parties Meet',
    type: 'special',
    typeLabel: 'Special Committee',
    level: 'Intermediate to Advanced',
    agenda: 'Deliberation on the Implementation and Reform of Reservation Policies under Articles 15 and 16 of the Constitution of India, with Special Emphasis on the Constitution (106th Amendment) Act, 2023 (Nari Shakti Vandan Adhiniyam), and its impact on political representation, social equity, and electoral governance.',
    about: 'The All India Political Parties Meet (AIPPM) is a non-conventional, specialized committee bringing together leaders across the Indian political spectrum—representing ruling coalitions, opposition parties, and regional alliances. AIPPM serves as a platform for consensus building, intense legislative debate, and political negotiations on core constitutional and socio-economic policies shaping the Indian Republic.',
    agendaDetail: [
      'Articles 15 & 16 Constitutional Analysis: Reviewing affirmative action, sub-categorization, and the 50% reservation ceiling.',
      'Nari Shakti Vandan Adhiniyam (106th Amendment): Timelines, census dependency, delimitation link, and women representation in Lok Sabha & State Assemblies.',
      'Electoral Governance & Social Equity: Balancing merit, social justice, creamy layer criteria, and regional caste survey dynamics.',
      'Policy Reform Consensus: Formulating legislative recommendations for constitutional amendments and parliamentary bills.'
    ],
    rops: {
      format: 'Lok Sabha / All India Party Assembly Rules (Bilingual: English & Hindi allowed)',
      motions: 'Motion for Moderated Discussion, Point of Information, Motion for Unmoderated Consultation, Motion to Pass All-Party Resolution',
      voting: 'Simple Majority for Resolutions; Consensus-building prioritized for Joint Press Statements.',
      documentation: 'All-Party Accords, Private Member Bills, Joint Policy Declarations, Press Releases.'
    },
    board: [
      { role: 'Moderator', name: 'Prerna Sharma' },
      { role: 'Deputy Moderator', name: 'Shreya Khatnani' },
      { role: 'Scribe', name: 'Samarth Srivastava' },
    ]
  },
  {
    id: 'ukhoc',
    abbr: 'UKHOC',
    name: 'United Kingdom House of Commons',
    type: 'special',
    typeLabel: 'Special Committee',
    level: 'Intermediate',
    agenda: 'Deliberating upon the constitutional future of the United Kingdom in the post-Brexit era, with emphasis on devolution, Scottish independence, and Irish reunification.',
    about: 'The House of Commons is the democratically elected parliamentary chamber of the United Kingdom Parliament at Westminster. In this simulation, Members of Parliament (MPs) represent Her Majesty\'s Government, Her Majesty\'s Most Loyal Opposition, and regional parties (SNP, Plaid Cymru, DUP) to debate key constitutional bills, devolved power-sharing agreements, and economic sovereignty.',
    agendaDetail: [
      'Devolution Agreements: Re-evaluating power distribution between Westminster, Holyrood, the Senedd, and Stormont.',
      'Scottish Independence Referendum Debates: Legal mechanisms, economic viability, currency options, and EU re-entry prospects.',
      'Northern Ireland Protocol & Good Friday Agreement: Maintaining peace, trade borders in the Irish Sea, and Irish reunification questions.',
      'Post-Brexit Economy: Trade agreements, regulatory standards, and national fiscal policy adjustments.'
    ],
    rops: {
      format: 'Westminster Parliamentary Procedure (Speaker Controls Floor, "Hear Hear" & Division Voting)',
      motions: 'Point of Order to Mr. Speaker, Motion to Move to Division, Motion for Prime Minister\'s Questions (PMQs)',
      voting: 'Division Voting ("Aye" vs "No" lobbies); Simple Majority (50% + 1) for Bill Passage.',
      documentation: 'Acts of Parliament, Government Bills, Opposition Amendments, White Papers.'
    },
    board: [
      { role: 'Speaker', name: 'Aishnit Yadav' },
      { role: 'Deputy Speaker', name: 'Eesha Bajpai' },
    ]
  },
  {
    id: 'unga-disec',
    abbr: 'UNGA-DISEC',
    name: 'United Nations General Assembly — Disarmament & International Security',
    type: 'general',
    typeLabel: 'UN Body',
    level: 'Intermediate',
    agenda: 'Deliberating upon the proliferation of unmanned weapons systems and precision-strike capabilities across West Asia, with special emphasis on drone warfare, ballistic and cruise missile proliferation, proxy-assisted arms transfers, threats to maritime security in the Persian Gulf and Red Sea corridor, and the adequacy of existing international arms control and export regulation frameworks.',
    about: 'The First Committee of the UN General Assembly (DISEC) deals with disarmament, global challenges, and threats to peace that affect the international community. DISEC works to establish international regulations on armaments, mitigate international security crises, and promote global stability through treaty frameworks.',
    agendaDetail: [
      'Unmanned Aerial & Naval Systems: Regulating loitering munitions, autonomous combat drones, and drone-swarm warfare.',
      'Proxy Warfare & Arms Transfers: Monitoring illegal small arms, missile technology transfers, and non-state actor supply routes in West Asia.',
      'Maritime Chokepoint Security: Safeguarding commercial navigation through the Strait of Hormuz, Bab-el-Mandeb, and Red Sea.',
      'Arms Control Treaties Review: Strengthening the Arms Trade Treaty (ATT) and Missile Technology Control Regime (MTCR).'
    ],
    rops: {
      format: 'Standard UNGA Rules of Procedure (GSL, Moderated & Unmoderated Caucuses)',
      motions: 'Motion to Set Speaker Time, Motion for Moderated Caucus, Motion to Introduce Draft Resolution, Motion to Vote by Roll Call',
      voting: 'Simple Majority (50% + 1) for procedural; 2/3 Majority for Important Questions on Disarmament.',
      documentation: 'UN General Assembly Resolutions, Working Papers, Amendments.'
    },
    board: [
      { role: 'Chairperson', name: 'Bhuvan Mishra' },
      { role: 'Vice-Chairperson', name: 'Saket Shukla' },
    ]
  },
  {
    id: 'ecosoc',
    abbr: 'ECOSOC',
    name: 'Economic and Social Council',
    type: 'general',
    typeLabel: 'UN Body',
    level: 'Intermediate',
    agenda: 'Addressing the economic repercussions of instability across major maritime and energy corridors in West Asia, with special emphasis on fuel inflation, supply chain disruptions, and energy dependency in emerging economies.',
    about: 'The Economic and Social Council (ECOSOC) is one of the six principal organs of the United Nations, responsible for coordinating economic, social, and environmental policy matters. ECOSOC brings together global economic planners, finance ministers, and multilateral financial institutions (IMF, World Bank) to solve complex trade and development crises.',
    agendaDetail: [
      'Energy Market Stabilization: Combatting crude oil volatility, gas shortages, and global energy inflation spikes.',
      'Global Supply Chain Resilience: Mitigating maritime freight delay costs, port congestion, and shipping insurance premiums.',
      'Support for Emerging Economies: Debt relief mechanisms, emergency liquidity assistance, and food security buffer funds.',
      'Transition to Renewable Infrastructure: Accelerating sustainable energy diversification to reduce geopolitical oil dependence.'
    ],
    rops: {
      format: 'Standard ECOSOC Rules of Procedure',
      motions: 'Motion to Open GSL, Motion for Moderated Caucus, Motion for Panel of Authors, Motion to Pass Resolution',
      voting: 'Simple Majority (50% + 1) for both procedural and substantive decisions.',
      documentation: 'ECOSOC Draft Resolutions, Policy Recommendations to UN General Assembly, Expert Financial Reports.'
    },
    board: [
      { role: 'Chairperson', name: 'Devansh Jaiswal' },
      { role: 'Vice-Chairperson', name: 'Prathmesh Pandey' },
      { role: 'Rapporteur', name: 'Raghav Garg' },
    ]
  },
  {
    id: 'achpr',
    abbr: 'ACHPR',
    name: 'African Commission on Human and Peoples\' Rights',
    type: 'special',
    typeLabel: 'Regional Body',
    level: 'Intermediate to Advanced',
    agenda: 'Deliberating upon reservations and implementation challenges under the Maputo Protocol, with special emphasis on reproductive rights, child marriage, gender-based violence, and the conflict between cultural practices and regional human rights obligations in Africa.',
    about: 'Established under Article 30 of the African Charter on Human and Peoples\' Rights, the ACHPR is a quasi-judicial body charged with protecting and promoting human rights across the African continent. The Commission reviews national periodic reports, interprets regional human rights legal instruments, and investigates systemic human rights abuses.',
    agendaDetail: [
      'Maputo Protocol Compliance: Analyzing national reservations, ratification bottlenecks, and domestic legal alignment.',
      'Eradication of Harmful Traditional Practices: Eradicating child marriage, female genital mutilation (FGM), and gender violence.',
      'Reproductive Rights & Healthcare Infrastructure: Guaranteeing maternal health access, legal protection, and emergency care.',
      'Balancing Customary Law & Human Rights: Harmonizing traditional community customs with continental rights treaties.'
    ],
    rops: {
      format: 'African Union Regional Body Procedure',
      motions: 'Motion for Plenary Discussion, Motion for Regional Working Group Caucus, Motion to Adopt Commission Report',
      voting: 'Consensus preferred; Simple Majority (50% + 1) when formal votes are taken.',
      documentation: 'Commission Resolutions, Concluding Observations, Country Human Rights Directives.'
    },
    board: [
      { role: 'Chairperson', name: 'Bhavy Mehrotra' },
      { role: 'Vice-Chairperson', name: 'Tanmay Jhamtani' },
      { role: 'Rapporteur', name: 'Avika Tuteja' },
    ]
  },
  {
    id: 'pmecs',
    abbr: 'PMECS',
    name: 'Post-Modern Emergency Crisis Simulation',
    type: 'crisis',
    typeLabel: 'Crisis',
    level: 'Advanced / Historical Crisis',
    agenda: 'Deliberation upon the Naxalbari Uprising and its implications for India\'s internal security, agrarian stability, constitutional governance, and national unity. Freeze Date: 18th May, 1967 (Beginning of the Naxalbari Uprising).',
    about: 'PMECS is a historical emergency crisis simulation set during the critical inflection points of 20th century Indian history. Set at the historic Freeze Date of May 18, 1967, delegates roleplay central ministers, state chief ministers, peasant leaders, security agency chiefs, and political ideologues managing the outbreak of the Naxalbari agrarian revolt.',
    agendaDetail: [
      'Land Reforms & Agrarian Distress: Addressing tebhaga rights, feudal land ownership, and rural economic exploitation.',
      'Internal Security Response: Coordinating police deployment, intelligence operations, and law and order measures in West Bengal.',
      'Constitutional Emergency Powers: Debating Article 356 (President\'s Rule), preventive detention laws, and civil rights.',
      'Political Ideology & Insurgency: Containment of radical political movements while pursuing socio-economic reconciliation.'
    ],
    rops: {
      format: 'Historical Cabinet & Crisis Floor Procedure (Freeze Date: May 18, 1967)',
      motions: 'Motion to Move to Crisis Floor, Motion for Emergency Cabinet Session, Motion to Execute Directive',
      voting: 'Simple Majority for Cabinet Decisions; Executive Directives executed by relevant portfolio authority.',
      documentation: 'Cabinet Orders, Executive Directives, Intelligence Briefs, Peace Accords.'
    },
    board: [
      { role: 'Moderator', name: 'Saksham Tuteja' },
      { role: 'Deputy Moderator', name: 'Yamdagni Pandey' },
      { role: 'Crisis Director', name: 'Krishn Singh' },
    ]
  },
  {
    id: 'ipj',
    abbr: 'IPJ',
    name: 'International Press — Journalism',
    type: 'press',
    typeLabel: 'Press Corps',
    level: 'All Levels',
    agenda: 'Awaiting journalists! Cover the conference through the lens of international media. Report, investigate, and narrate the stories emerging from all committee rooms.',
    about: 'The International Press Journalism division simulates global media houses (such as Reuters, BBC, Al Jazeera, The Hindu, CNN). Journalists attend committee sessions across ChintelsMUN\'26, conduct press conferences, interview delegates and EB members, uncover secret deals, and publish daily newsletters and investigative articles.',
    agendaDetail: [
      'Live Press Coverage: Reporting on key debates, draft resolutions, and high-stakes negotiations across all 11 committees.',
      'Press Conferences & Interviews: Questioning delegates on portfolio hypocrisy, alliance shifts, and committee deadlocks.',
      'Investigative Articles: Writing op-eds, news briefs, and breaking news bulletins.',
      'Editorial Excellence: Publishing the official ChintelsMUN\'26 Daily Gazette.'
    ],
    rops: {
      format: 'Press Corps Operational Guidelines (Press Access Passes to all Committee Chambers)',
      motions: 'Motion to Hold Press Conference, Motion for Doorstep Interview, Motion to Submit Article Draft',
      voting: 'Peer-reviewed and evaluated by International Press Executive Board based on journalistic integrity and speed.',
      documentation: 'Press Bulletins, Daily Newsletters, Investigative Articles, Editorial Reviews.'
    },
    board: [
      { role: 'Editor-in-Chief', name: 'Ananyaa Mishra' },
      { role: 'Deputy Editor-in-Chief', name: 'Jeejivisha Tahiliani' },
    ]
  },
  {
    id: 'ipp',
    abbr: 'IPP',
    name: 'International Press — Photography',
    type: 'press',
    typeLabel: 'Press Corps',
    level: 'All Levels',
    agenda: 'Awaiting photographers! Capture the essence of diplomacy, debate, and leadership in action across all committee floors.',
    about: 'The International Press Photography division is tasked with visual storytelling. Photographers capture the raw emotion, intense debates, handshakes, crisis room tension, and memorable moments of ChintelsMUN\'26, producing photo essays, visual stories, and official conference photography archives.',
    agendaDetail: [
      'Photojournalism: Capturing candid diplomatic moments, intense caucuses, and executive board announcements.',
      'Visual Storytelling: Developing photo essays with compelling captions that reflect the spirit of each committee.',
      'Technical Mastery: Utilizing framing, lighting, composition, and event photography best practices.',
      'Official Media Gallery: Curating the official visual memory archive for ChintelsMUN\'26.'
    ],
    rops: {
      format: 'International Press Photojournalism Rules (Silent roaming coverage allowed across all committee floors)',
      motions: 'Motion for Photo Opportunity, Motion to Submit Photo Portfolio',
      voting: 'Evaluated by Head of Photography on technical execution, artistic composition, and narrative impact.',
      documentation: 'Photo Portfolios, Photo Essays, Daily Photo Bulletins.'
    },
    board: [
      { role: 'Head of Photography', name: 'Shashwat S. Sagar' },
    ]
  },
];

const SECRETARIAT = [
  { name: 'Utkarsh Wadhawan', role: 'Secretary General', initials: 'UW' },
  { name: 'Muskaan Rohra', role: 'Director General', initials: 'MR' },
  { name: 'Divyank Awasthi', role: 'Conference President', initials: 'DA' },
  { name: 'Alankrit Awasthi', role: 'Deputy Secretary General', initials: 'AA' },
  { name: 'Atharv Kesharwal', role: 'USG for Logistics', initials: 'AK' },
  { name: 'Vedika Puri', role: 'USG for Delegate Affairs', initials: 'VP' },
  { name: 'Kangana Yadav', role: 'USG for Data Management', initials: 'KY' },
  { name: 'Angad Rohira', role: 'USG for Marketing', initials: 'AR' },
  { name: 'Kaushiki Tripathi', role: 'USG for Public Relations', initials: 'KT' },
  { name: 'Amol Khare', role: 'USG for Conference Management', initials: 'AK' },
];
