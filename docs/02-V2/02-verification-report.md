# Verification Report: TripSquad
*Generated: 2026-05-20*

## Summary
- **Critical issues:** 0
- **Warnings:** 3
- **Info:** 4

## Critical Issues
None identified.

## Warnings

### 1. Splitwise conversion rate claim lacks primary source
- **File(s):** pitch-full.md, pitch-2min.md, pitch-appendix.md
- **Problem:** The "3-5x conversion for organizer personality" claim appears in all three pitch formats and the appendix. It is labeled [Estimate] but treated as a high-confidence anchor for the entire business model. No primary Splitwise data is cited — this is inferred from industry reporting and Splitwise's general model description.
- **Suggested fix:** Either (1) find primary/secondary source for Splitwise conversion rates (investor presentations, interviews, acquisition reporting), or (2) soften the claim to "Splitwise's model suggests organizers convert at significantly higher rates" without the specific 3-5x multiplier, or (3) label it explicitly as [Assumption] rather than [Estimate].

### 2. "50+ AI travel apps" count is approximate
- **File(s):** pitch-full.md, pitch-2min.md, why-now-timing.md, audience-narrative-competitive.md
- **Problem:** "50+ AI trip planning apps" is used as a key fact across all deliverables. The actual count is an estimate from industry observation, not a verified census. The number is directionally correct but could be challenged.
- **Suggested fix:** Either verify with a specific source (TechCrunch roundup, Product Hunt search, App Store category count) or soften to "dozens of AI trip planning apps."

### 3. Market sizing filters are assumption-heavy
- **File(s):** pitch-full.md, audience-narrative-competitive.md
- **Problem:** The bottom-up market sizing chains four assumptions: 40-50% group trips, 30% have identifiable organizer, English-speaking/iOS/age filter, 3+ trips/year filter. Each assumption is reasonable individually, but the compound effect means the final number (3-8M addressable organizers) has wide error bars. The pitch presents this as a range, which is appropriate, but doesn't flag the compounding uncertainty.
- **Suggested fix:** Add a line in the pitch acknowledging: "Each filter is an estimate — the real number could be 2x higher or lower. What matters is the unit economics work even at the low end of the range."

## Info

- **Cross-format consistency verified.** The 2-sentence opener is consistent across pitch-full.md and pitch-2min.md (faithful compression in the 2-min version). Market size figures, business model, and insight are consistent across all formats.
- **Pitch vs. appendix alignment verified.** All 10 Q&A answers in the appendix are consistent with claims in the pitch narratives. Known weaknesses match the Red/Yellow Flags.
- **No traction claimed.** The pitch honestly states "pre-product, idea stage" — no vanity metrics or inflated claims. Honesty check passed.
- **Team credentials flagged in Red Flags.** The pitch acknowledges the gap ("experienced agentic software engineers" lacks specifics) and notes it needs work for external use. This is appropriate self-awareness.

## Verification Checklist
- [x] All quantitative claims labeled
- [x] No internal contradictions found
- [x] Confidence ratings consistent with evidence
- [x] Data gaps declared in all deliverables
- [x] Red/Yellow flags present in all deliverables
- [x] No stale data unmarked (all data noted as knowledge-based, pre-May 2025)
- [x] No duplicate-source false corroboration
- [x] Pitch claims traceable to source data
- [x] Cross-format consistency verified
- [x] Pitch and appendix aligned
- [x] Honesty checks passed (no inflated traction, no top-down TAM, team gap acknowledged)
