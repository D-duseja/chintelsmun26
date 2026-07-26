// ============================================================
// CHINTELSMUN'26 — ALL DATA
// Committees, Secretariat, Executive Boards
// ============================================================

const COMMITTEES = [
  {
    id: 'unsc-ctc',
    abbr: 'UNSC-CTC',
    name: 'United Nations Security Council — Counter-Terrorism Committee',
    type: 'general',
    typeLabel: 'UN Body',
    agenda: 'Examining the rising threat of extremist attacks on critical infrastructure in the Sahel and West African corridor, with special emphasis on energy security, maritime trade, cyber-physical threats, unmanned aerial systems (UAS), and regional security coordination.',
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
    agenda: '"Classified" — Details to be revealed at the conference. Prepare for the unexpected.',
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
    type: 'junior',
    typeLabel: 'Junior Committee',
    agenda: 'Examining the growing impact of digital inequality on sustainable development, with special emphasis on artificial intelligence accessibility, digital public infrastructure, skill development, cybersecurity preparedness, and technological inclusion in developing and least-developed economies.',
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
    agenda: 'Deliberation on the Implementation and Reform of Reservation Policies under Articles 15 and 16 of the Constitution of India, with Special Emphasis on the Constitution (106th Amendment) Act, 2023 (Nari Shakti Vandan Adhiniyam), and its impact on political representation, social equity, and electoral governance.',
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
    agenda: 'Deliberating upon the constitutional future of the United Kingdom in the post-Brexit era, with emphasis on devolution, Scottish independence, and Irish reunification.',
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
    agenda: 'Deliberating upon the proliferation of unmanned weapons systems and precision-strike capabilities across West Asia, with special emphasis on drone warfare, ballistic and cruise missile proliferation, proxy-assisted arms transfers, threats to maritime security in the Persian Gulf and Red Sea corridor, and the adequacy of existing international arms control and export regulation frameworks.',
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
    agenda: 'Addressing the economic repercussions of instability across major maritime and energy corridors in West Asia, with special emphasis on fuel inflation, supply chain disruptions, and energy dependency in emerging economies.',
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
    agenda: 'Deliberating upon reservations and implementation challenges under the Maputo Protocol, with special emphasis on reproductive rights, child marriage, gender-based violence, and the conflict between cultural practices and regional human rights obligations in Africa.',
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
    agenda: 'Deliberation upon the Naxalbari Uprising and its implications for India\'s internal security, agrarian stability, constitutional governance, and national unity. Freeze Date: 18th May, 1967 (Beginning of the Naxalbari Uprising).',
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
    agenda: 'Awaiting journalists! Cover the conference through the lens of international media. Report, investigate, and narrate the stories emerging from all committee rooms.',
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
    agenda: 'Awaiting photographers! Capture the essence of diplomacy, debate, and leadership in action across all committee floors.',
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
