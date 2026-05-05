export type Service = {
  id: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
};

export type CaseStudy = {
  id: string;
  number: string;
  client: string;
  sector: string;
  engagement: string;
  problem: string;
  approach: string;
  outcome: string;
  metric: { value: string; label: string };
};

export type Phase = {
  number: string;
  name: string;
  duration: string;
  description: string;
  artifacts: string[];
};

export type Principle = {
  number: string;
  title: string;
  body: string;
};

export type Founder = {
  name: string;
  role: string;
  bio: string;
  prior: string;
};

export const services: Service[] = [
  {
    id: "ontology-engineering",
    number: "01",
    title: "Ontology Engineering",
    summary:
      "Domain models, class hierarchies, and the relations that hold them together.",
    description:
      "We work with your domain experts to surface the concepts your product actually traffics in — and then formalize them into a hierarchy that survives contact with real data. Useful when retrieval is fuzzy, when labels disagree, or when an LLM keeps flattening distinctions your customers care about.",
    deliverables: [
      "Concept inventory with definitions and edge cases",
      "Class hierarchy in OWL, JSON-LD, or your serialization of choice",
      "Relation set with cardinality and inverse mappings",
      "Disambiguation guide for ambiguous terms",
    ],
  },
  {
    id: "knowledge-graph",
    number: "02",
    title: "Knowledge Graph Architecture",
    summary:
      "Schema, entity resolution, and provenance for graphs that have to be trusted.",
    description:
      "When your application needs to answer who, what, and how-do-you-know, a property graph beats a vector store. We design schemas that hold up under entity resolution at scale, with provenance baked in so every edge can be audited.",
    deliverables: [
      "Property graph schema (Neo4j, TigerGraph, or RDF)",
      "Entity resolution rules with confidence scoring",
      "Provenance and versioning model",
      "Hybrid retrieval blueprint (graph + embeddings)",
    ],
  },
  {
    id: "labeling-audits",
    number: "03",
    title: "Taxonomy & Labeling Audits",
    summary:
      "Finding the noise in your training and eval data before your model does.",
    description:
      "Most label sets accrete by accident. We read your guidelines, sample your data, and produce a candid audit of where annotators disagree, where categories overlap, and where the taxonomy has quietly drifted from the product.",
    deliverables: [
      "Inter-annotator agreement analysis",
      "Collision and overlap report",
      "Revised labeling guidelines",
      "Migration plan for legacy labels",
    ],
  },
  {
    id: "eval-data",
    number: "04",
    title: "Eval Data & Golden Sets",
    summary:
      "Benchmarks tied to the ontology — so passing the eval means something.",
    description:
      "An eval set is only as honest as the taxonomy under it. We design golden sets that probe the distinctions you actually care about, with adversarial cases for the categories your model conflates today.",
    deliverables: [
      "Stratified golden set with rationale per item",
      "Adversarial / contrast set",
      "Scoring rubric tied to ontology nodes",
      "Refresh protocol as the ontology evolves",
    ],
  },
  {
    id: "embedding-cartography",
    number: "05",
    title: "Embedding-Space Cartography",
    summary:
      "Diagnosing how your model carves the world — and where the seams show.",
    description:
      "We run structured probes against your embeddings and the LLMs on top, mapping where the geometry agrees with your ontology and where it doesn't. The output is a diagnosis, not a dashboard: where to fine-tune, where to re-prompt, where to redesign.",
    deliverables: [
      "Cluster analysis against canonical taxonomy",
      "Probe suite with reproducible runs",
      "Map of confusable concept pairs",
      "Prioritized remediation plan",
    ],
  },
];

export const phases: Phase[] = [
  {
    number: "I",
    name: "Discover",
    duration: "Weeks 1–2",
    description:
      "We sit with your domain experts, read your docs, and sample your data. The output is a shared vocabulary and a list of the questions your ontology has to answer.",
    artifacts: [
      "Stakeholder interview synthesis",
      "Existing-artifact audit",
      "Scope memo with success criteria",
    ],
  },
  {
    number: "II",
    name: "Map",
    duration: "Weeks 3–5",
    description:
      "First-pass ontology: classes, relations, key distinctions. We draft, you mark up, we redraft. By the end of this phase the structure is stable enough to start labeling against.",
    artifacts: [
      "Concept inventory v1",
      "Hierarchy diagrams (visual + serialized)",
      "Open-questions register",
    ],
  },
  {
    number: "III",
    name: "Refine",
    duration: "Weeks 6–8",
    description:
      "We pressure-test against real data. Annotators disagree, edge cases surface, and the taxonomy gets sharper. This is the phase where we earn our keep.",
    artifacts: [
      "Inter-annotator agreement report",
      "Edge-case casebook",
      "Frozen v1.0 ontology",
    ],
  },
  {
    number: "IV",
    name: "Operationalize",
    duration: "Weeks 9–10",
    description:
      "We hand off the artifacts your team needs to live with the ontology: serializations, eval sets, governance docs, and a refresh cadence so it doesn't ossify.",
    artifacts: [
      "Production-ready serializations",
      "Golden eval set",
      "Governance and refresh playbook",
    ],
  },
];

export const cases: CaseStudy[] = [
  {
    id: "foundation-lab",
    number: "01",
    client: "Series-A Foundation Model Lab",
    sector: "General-purpose pretraining",
    engagement: "Twelve-week ontology rebuild",
    problem:
      "An accreted pretraining taxonomy with 4,200 leaf categories and silent overlaps was producing label collisions that surfaced as reasoning failures downstream.",
    approach:
      "We audited the existing taxonomy against a stratified data sample, collapsed redundant branches, and rebuilt the upper ontology around a small set of orthogonal axes the team could defend.",
    outcome:
      "Cleaner upstream signal, fewer ambiguous training examples, and a labeling guide the data team could actually onboard new annotators against.",
    metric: { value: "−38%", label: "label collisions on internal benchmark" },
  },
  {
    id: "legal-scribe",
    number: "02",
    client: "Vertical AI Scribe (Legal)",
    sector: "LLM-native productivity tool",
    engagement: "Eight-week ontology + eval design",
    problem:
      "Generic embeddings flattened critical legal distinctions (e.g. *indemnification* vs. *hold harmless*), producing retrieval that lawyers wouldn't trust.",
    approach:
      "We built a 1,400-concept legal ontology with attorney input, designed a contrast-pair eval set, and partnered with their ML team on a hybrid graph + embedding retrieval pattern.",
    outcome:
      "Retrieval precision that survives lawyerly scrutiny on the cases the founders most cared about. Eval suite now anchors weekly model releases.",
    metric: { value: "+24pts", label: "retrieval precision on internal eval" },
  },
  {
    id: "agentic-saas",
    number: "03",
    client: "Agentic SaaS Company",
    sector: "Agent harness for back-office workflows",
    engagement: "Six-week tool-use ontology",
    problem:
      "The agent kept hallucinating function calls — inventing tools that didn't exist or calling real tools with implausible arguments. The tool catalog had grown faster than its taxonomy.",
    approach:
      "We re-categorized the tool catalog around a small set of action archetypes, rewrote tool descriptions against the new taxonomy, and built a calibration set the team could regress against.",
    outcome:
      "Sharply fewer fabricated calls, cleaner tool-selection traces, and a catalog the product team can extend without retraining the harness.",
    metric: { value: "−61%", label: "hallucinated tool calls in production" },
  },
];

export const principles: Principle[] = [
  {
    number: "I",
    title: "Definitions are deliverables.",
    body: "Most ontology debt is a pile of words nobody bothered to define. We treat the dictionary as the artifact, not a side-effect.",
  },
  {
    number: "II",
    title: "The taxonomy must survive real data.",
    body: "We don't ship structures we haven't pressure-tested against your actual examples — including the ugly ones.",
  },
  {
    number: "III",
    title: "Evals are part of the ontology.",
    body: "An eval set without a taxonomy is theatre. We design them together, or we design neither.",
  },
  {
    number: "IV",
    title: "Hand-off is the work.",
    body: "An ontology your team can't maintain is a liability. We finish when your people can extend it without us.",
  },
];

export const founders: Founder[] = [
  {
    name: "Mira Adessi",
    role: "Partner, Ontology",
    bio: "Computational linguist by training; spent eight years building knowledge graphs for a search company you've heard of and three more leading data structuring at a foundation-model lab.",
    prior: "Ph.D., Computational Linguistics · ex-FAIR · ex-search infra",
  },
  {
    name: "Theo Karras",
    role: "Partner, Engineering",
    bio: "Database internals turned ML eval. Built the entity resolution stack at a public fintech, then ran applied research at a Series-B vertical AI company.",
    prior: "ex-fintech infra · ex-vertical AI applied research",
  },
];
