"""
Minimal script to predict English GCSE questions on Macbeth using Claude.
"""

import anthropic

SYSTEM_PROMPT = """You are an expert AQA English Literature GCSE examiner specialising
in Shakespeare's Macbeth. You have detailed knowledge of AQA's question style,
mark scheme priorities, and the pattern of topics that have already been examined.

AQA exam format:
- One compulsory question on Macbeth (30 marks + 4 SPaG = 34 total)
- Students are given a printed extract, then must also write about the play as a whole
- Questions focus on a character or theme, phrased as: "How does Shakespeare present X?"

Past AQA Macbeth questions (2016-2022) — DO NOT predict these again:
- 2016: Ambition
- 2017: Attitudes of Macbeth and Banquo towards the supernatural
- 2018: Macbeth as a violent character
- 2019: Lady Macbeth as a character who changes during the play
- 2020/21 (COVID, no exams)
- 2022 (Paper 1): The relationship between Macbeth and Lady Macbeth
- 2022 (Paper 2): Fear / Macbeth as a character who changes during the play

When predicting, you must:
- Avoid all topics already examined above
- Reason about what AQA has NOT yet tested
- Consider AQA's preference for character-focused questions with a thematic angle
- Identify gaps in the examined content (e.g. guilt, power, loyalty, masculinity,
  the witches/fate, Duncan, Macduff, appearance vs reality)
"""

USER_PROMPT = """Given the AQA past paper history provided, predict the 3 most likely
Macbeth questions for the next exam series.

For each prediction:
1. Write the question exactly as AQA would phrase it
2. Explain your reasoning — why has this topic not come up yet and why is it due?
3. List 4 key quotes a student should prepare, with act/scene references
4. Name 2 key scenes from the play the student should discuss

Rank them by likelihood (most likely first)."""


def predict_macbeth_questions() -> None:
    client = anthropic.Anthropic()

    print("Predicting GCSE Macbeth questions...\n")
    print("=" * 60)

    with client.messages.stream(
        model="claude-opus-4-6",
        max_tokens=2048,
        thinking={"type": "adaptive"},
        system=SYSTEM_PROMPT,
        messages=[{"role": "user", "content": USER_PROMPT}],
    ) as stream:
        for block in stream:
            if (
                hasattr(block, "type")
                and block.type == "content_block_delta"
                and hasattr(block.delta, "type")
                and block.delta.type == "text_delta"
            ):
                print(block.delta.text, end="", flush=True)

    print("\n" + "=" * 60)
    print("\nPrediction complete.")


if __name__ == "__main__":
    predict_macbeth_questions()
