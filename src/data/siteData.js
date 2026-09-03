/**
 * Bhushan Sovereign — Structured Site Data
 * Single source of truth for site content, editorial entries, and experiments.
 */

export const siteData = {
  meta: {
    name: "BHUSHAN SOVEREIGN",
    tagline: "Building myself, one skill at a time.",
    supportingMessage: "Communication, psychology, discipline, fitness and the digital world — learning, testing and documenting the process.",
    philosophy: "Build yourself before you try to build your world. Bhushan is documenting the process of becoming more capable rather than pretending to already have everything figured out.",
    loop: [
      { step: "01", name: "Learning", desc: "Acquiring first-principles knowledge" },
      { step: "02", name: "Testing", desc: "Subjecting ideas to real-world friction" },
      { step: "03", name: "Experiencing", desc: "Observing direct physiological and psychological feedback" },
      { step: "04", name: "Understanding", desc: "Extracting repeatable principles from results" },
      { step: "05", name: "Documenting", desc: "Recording the honest unvarnished trajectory" },
      { step: "06", name: "Teaching", desc: "Sharing field-tested frameworks for others building themselves" }
    ],
    profile: {
      age: 23,
      role: "COLLEGE STUDENT",
      vocation: "FITNESS TRAINER",
      status: "BUILDING IN PUBLIC",
      location: "India / Global",
      year: "2026"
    },
    socials: [
      { name: "Instagram", url: "https://instagram.com", handle: "@bhushansovereign" },
      { name: "YouTube", url: "https://youtube.com", handle: "Bhushan Sovereign" },
      { name: "LinkedIn", url: "https://linkedin.com", handle: "bhushan-sovereign" }
    ]
  },

  currently: {
    identifier: "21 DAYS",
    context: "An ongoing experiment in communication, discipline and consistency.",
    note: "This is an active experiment, not the identity of the entire brand.",
    learning: [
      { topic: "Digital marketing", detail: "Content systems and distribution architecture" },
      { topic: "AI", detail: "LLM workflows and generative tooling" },
      { topic: "Social media", detail: "High-signal communication on visual platforms" }
    ],
    training: [
      { topic: "Fitness", detail: "Cardiovascular baseline and mobility" },
      { topic: "Strength", detail: "Compound resistance training and power generation" },
      { topic: "Physical development", detail: "Structural balance, joint health, and posture" }
    ]
  },

  areas: [
    {
      id: "communication",
      number: "01",
      title: "Communication",
      tagline: "Learning to express ideas clearly.",
      description: "Speech, writing, and structured delivery. Focusing on eliminating filler, articulating under stress, and conveying complex ideas with precision.",
      practices: ["Daily impromptu recording", "Writing concise technical breakdowns", "Auditory feedback analysis"]
    },
    {
      id: "psychology",
      number: "02",
      title: "Psychology",
      tagline: "Understanding behavior, decisions and the self.",
      description: "Cognitive biases, friction loops, ego defense mechanisms, and human motivation. Analyzing why we sabotage our goals and how to rewire habits.",
      practices: ["Behavioral triggers tracking", "Decision retrospectives", "Stress-response mapping"]
    },
    {
      id: "discipline",
      number: "03",
      title: "Discipline",
      tagline: "Turning intentions into consistent action.",
      description: "Systems over willpower. Structuring environments, removing activation friction, and adhering to strict daily non-negotiables regardless of emotional state.",
      practices: ["The zero-day rule", "Friction reduction audits", "Execution accountability tracking"]
    },
    {
      id: "fitness",
      number: "04",
      title: "Fitness",
      tagline: "Building physical capability.",
      description: "The body as the hardware for cognition and drive. Developing strength, metabolic endurance, and structural resilience through scientific training.",
      practices: ["Periodized hypertrophy & strength", "Zone 2 aerobic conditioning", "Nutritional consistency"]
    },
    {
      id: "digital",
      number: "05",
      title: "Digital",
      tagline: "AI, social media, marketing and content.",
      description: "Leveraging modern computational and media tools. Understanding algorithmic reach, automated workflows, and building a transparent digital presence.",
      practices: ["AI assisted research", "Editorial publishing workflows", "Audience resonance testing"]
    }
  ],

  recentWork: [
    {
      id: "rw-1",
      category: "COMMUNICATION",
      title: "The Signal-to-Noise Filter: Articulating Thoughts Under Pressure",
      description: "Observations from speaking daily and recording without editing to eliminate verbal drift.",
      date: "AUG 2026",
      readTime: "4 MIN",
      slug: "signal-to-noise-filter"
    },
    {
      id: "rw-2",
      category: "DISCIPLINE",
      title: "Friction Engineering: Eliminating Starting Hesitation",
      description: "How redesigning physical and mental triggers reduces reliance on willpower.",
      date: "AUG 2026",
      readTime: "5 MIN",
      slug: "friction-engineering"
    },
    {
      id: "rw-3",
      category: "DIGITAL",
      title: "AI Workflow Integration for Independent Learners",
      description: "Documenting the exact tools and daily prompts used to accelerate skill acquisition.",
      date: "JUL 2026",
      readTime: "6 MIN",
      slug: "ai-workflow-integration"
    }
  ],

  currentExperiment: {
    identifier: "21 DAYS",
    category: "COMMUNICATION × DISCIPLINE",
    headline: "Deliberate Daily Practice & Unfiltered Follow-Through",
    description: "I’m testing whether deliberate daily practice can improve the way I communicate and follow through.",
    hypothesis: "By forcing a daily output in public (speaking or writing) with strict non-negotiable timing, cognitive resistance diminishes by >60% within 3 weeks.",
    metrics: [
      { label: "Daily Output Rate", value: "100%", status: "On Track" },
      { label: "Vocal Hesitation (ms)", value: "-34%", status: "Improving" },
      { label: "Task Initiation Delay", value: "< 2 min", status: "Target Met" }
    ],
    logs: [
      { day: "Day 01", focus: "Baseline recording & vocal pacing audit", result: "Identified high filler word frequency under camera gaze." },
      { day: "Day 07", focus: "Friction removal in daily recording setup", result: "Reduced setup time from 15 minutes to 90 seconds." },
      { day: "Day 14", focus: "Complex concept synthesis without notes", result: "Spontaneous clarity improved noticeably; pauses became deliberate." },
      { day: "Day 21", focus: "Full retrospective & system institutionalization", result: "Transitioning daily protocol into a permanent operating standard." }
    ]
  },

  journal: [
    {
      id: "j-1",
      title: "The Architecture of Follow-Through",
      category: "DISCIPLINE",
      date: "AUG 28, 2026",
      readTime: "4 MIN",
      summary: "Why consistency is primarily an environment design problem rather than a motivation deficit.",
      content: `
        <p class="lead">Most people believe failure to act stems from laziness or lack of commitment. In reality, it is almost always an unexamined friction threshold.</p>
        <p>When the activation energy required to start an activity exceeds your immediate dopamine expectation, the brain automatically pivots to secondary comfort routines. During the first two weeks of tracking my own hesitation loops, I observed that delay occurred before starting, rarely during execution.</p>
        <p>By restructuring the physical layout of my desk, pre-loading my training gear, and establishing an irrevocable 5-second countdown rule, the need for emotional alignment vanished. You do not need to feel inspired to act. You merely need an environment that makes hesitation awkward.</p>
      `,
      related: ["j-2", "j-3"]
    },
    {
      id: "j-2",
      title: "Learning in Public When You Know Very Little",
      category: "COMMUNICATION",
      date: "AUG 19, 2026",
      readTime: "5 MIN",
      summary: "The difference between pretending to be an expert and honestly documenting the climb.",
      content: `
        <p class="lead">The modern internet is saturated with polished personas claiming mastery. Yet the most valuable artifacts are honest field notes written while stumbling.</p>
        <p>As a 23-year-old student and trainer, I have zero interest in positioning myself as a guru. The entire philosophy of this digital headquarters is grounded in honest inquiry: <em>Learning → Testing → Experiencing → Understanding → Documenting → Teaching</em>.</p>
        <p>When you document the learning process rather than manufactured triumph, you grant yourself permission to be imperfect. The feedback you receive is grounded in reality, and the people who connect with your work are walking alongside you, not looking at a pedestal.</p>
      `,
      related: ["j-1", "j-4"]
    },
    {
      id: "j-3",
      title: "Physical Capacity as Cognitive Infrastructure",
      category: "FITNESS",
      date: "AUG 10, 2026",
      readTime: "6 MIN",
      summary: "How strength training and conditioning create the nervous system stability needed for deep intellectual focus.",
      content: `
        <p class="lead">The separation between the mind and physical body is an illusion created by desk-bound culture. Your brain is an organ bathed in the physiological state of your entire system.</p>
        <p>In coaching clients and tracking my own cognitive stamina during rigorous academic and creative cycles, the correlation is unmistakable: individuals with higher VO2 max baselines and consistent resistance training exhibit substantially lower cortisol spikes when confronted with intellectual or emotional stress.</p>
        <p>Fitness is not about vanity or aesthetic validation. It is about building a durable biological engine capable of supporting demanding aspirations without breaking down.</p>
      `,
      related: ["j-1", "j-5"]
    },
    {
      id: "j-4",
      title: "Deconstructing Mental Models of Self-Deception",
      category: "PSYCHOLOGY",
      date: "JUL 27, 2026",
      readTime: "7 MIN",
      summary: "Identifying the subtle rationalizations that prevent us from confronting difficult feedback.",
      content: `
        <p class="lead">The human mind is an expert lawyer, constantly defending the ego against the truth of its current limitations.</p>
        <p>Whenever we postpone a challenging conversation or skip a demanding training block, we rarely tell ourselves we were afraid. Instead, we invent pragmatic justifications: 'Now is not the optimal time,' or 'I need more information first.'</p>
        <p>Tracking these micro-rationalizations in a daily journal strips away the illusion. When you write down your actual reasons versus the stories you tell yourself, the patterns become impossible to ignore.</p>
      `,
      related: ["j-2", "j-5"]
    },
    {
      id: "j-5",
      title: "Digital Leverage for the Solo Builder",
      category: "DIGITAL",
      date: "JUL 14, 2026",
      readTime: "5 MIN",
      summary: "Using automation and open protocols to amplify learning without getting consumed by social feeds.",
      content: `
        <p class="lead">The digital landscape presents an asymmetry: it can be an infinite distraction sink or the highest-leverage learning engine ever devised.</p>
        <p>The distinction lies in consumption versus distillation. By routing information feeds through deliberate filters, analyzing research with local AI tooling, and publishing insights rather than reacting to trends, one person can achieve the research output of an entire small team.</p>
        <p>Own your platform, control your attention, and treat every digital tool as a lever for real-world competence.</p>
      `,
      related: ["j-2", "j-3"]
    }
  ],

  protocols: [
    {
      id: "p-communication",
      title: "Communication Protocol",
      subtitle: "Daily Articulation & Synthesis",
      category: "COMMUNICATION",
      version: "v1.2",
      principles: [
        "State the core thesis in the first 10 seconds.",
        "Remove qualifiers ('I think', 'maybe', 'sort of') when stating facts.",
        "Embrace silence instead of filling pauses with vocal drag.",
        "Match the vocabulary to the listener's mental models, not your ego."
      ],
      steps: [
        { name: "Step 01: The Daily 3-Minute Audio Memo", desc: "Select one concept learned today. Record a 180-second audio explanation without notes. Play back at 1.0x speed and tally filler words." },
        { name: "Step 02: One-Sentence Extraction", desc: "Reduce the recorded concept into a single 25-word sentence with active verbs only." },
        { name: "Step 03: Delivery Stress Test", desc: "Deliver that single sentence clearly to an interlocutor or mirror without looking away." }
      ]
    },
    {
      id: "p-discipline",
      title: "Discipline Protocol",
      subtitle: "The Zero-Day & Friction Elimination",
      category: "DISCIPLINE",
      version: "v2.0",
      principles: [
        "Never have a zero day in your primary anchor discipline.",
        "Design the physical space so the desired action has zero friction.",
        "Separate planning from execution: do not decide what to do in the moment.",
        "Focus on identity consistency rather than emotional motivation."
      ],
      steps: [
        { name: "Step 01: Pre-Commitment Staging", desc: "Every night at 21:30, place tools, gym wear, or study texts directly in the physical line of sight." },
        { name: "Step 02: 5-Second Initiation", desc: "When the scheduled hour strikes, count 5-4-3-2-1 and move your feet before internal dialogue can generate excuses." },
        { name: "Step 03: Minimum Viable Threshold", desc: "If fatigue is severe, perform the 10-minute baseline requirement. Preserving the streak preserves the identity." }
      ]
    },
    {
      id: "p-training",
      title: "Training Protocol",
      subtitle: "Foundational Strength & Metabolic Capacity",
      category: "FITNESS",
      version: "v1.4",
      principles: [
        "Master multi-joint compound movement patterns before isolation.",
        "Track progressive overload quantitatively (load × volume × tempo).",
        "Recovery is not an afterthought; sleep and nutrition dictate adaptation.",
        "Conditioning builds nervous system resilience for all cognitive endeavors."
      ],
      steps: [
        { name: "Step 01: Movement Preparation", desc: "10 minutes devoted to thoracic spine mobility, hip opening, and joint activation." },
        { name: "Step 02: Heavy Compound Anchor", desc: "Focus on one primary lift per session (Squat, Deadlift, Overhead Press, Pull) with strict bar speed." },
        { name: "Step 03: Zone 2 Cardiovascular Flush", desc: "Maintain nasal-only breathing at 60-70% max heart rate for 30 minutes twice weekly." }
      ]
    },
    {
      id: "p-digital",
      title: "Digital Protocol",
      subtitle: "High-Signal Curation & Distribution",
      category: "DIGITAL",
      version: "v1.1",
      principles: [
        "Be a creator and tester, not an algorithmic consumer.",
        "Use AI as an intellectual sparring partner to challenge assumptions.",
        "Build owned digital property rather than renting on ephemeral platforms.",
        "Publish only field-tested observations; never repost unvetted theory."
      ],
      steps: [
        { name: "Step 01: Input Boundary Lockdown", desc: "No algorithmic feed browsing before 12:00 PM. High-density reading only." },
        { name: "Step 02: Daily Synthesis Repository", desc: "Store all insights into an indexed digital notebook with bidirectional tags." },
        { name: "Step 03: Public Output Cadence", desc: "Distill one tested learning into a structured public post or journal entry weekly." }
      ]
    }
  ],

  about: {
    hero: "I’M BHUSHAN.",
    headline: "College student, fitness trainer, and builder in public.",
    manifesto: [
      "I’m a college student and fitness trainer exploring communication, psychology, discipline, physical training and the digital world.",
      "I’m not documenting a finished result.",
      "I’m documenting the process."
    ],
    bioExtended: [
      "At 23, I realized that waiting until you have everything figured out is a recipe for lifelong paralysis. Most people want to present the finished trophy without ever showing the sweat, the hesitation, or the failed attempts.",
      "I work as a fitness trainer while completing my university studies. In the gym, progress is indisputable: the iron never lies to you. If you don't show up, you don't adapt. I am applying that exact same empirical discipline to communication, human psychology, and modern digital capability.",
      "This website is my digital headquarters. It is not an agency portfolio, an influencer storefront, or a brag sheet. It is an honest, living ledger of deliberate human development."
    ],
    principles: [
      { title: "First-Principles Execution", desc: "Strip away conventions and build from undeniable fundamentals." },
      { title: "Empirical Feedback", desc: "Measure results by what actually happens, not what felt good." },
      { title: "Radical Transparency", desc: "Document the errors, adjustments, and lessons with equal fidelity." },
      { title: "Respect for the Craft", desc: "Whether lifting a barbell or writing a sentence, do it with deliberate precision." }
    ]
  }
};
