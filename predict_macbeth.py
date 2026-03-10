"""
Minimal script to predict English GCSE questions on Macbeth using Claude.
"""

import anthropic

SYSTEM_PROMPT = """You are an expert English GCSE examiner with deep knowledge of
AQA, Edexcel, and OCR exam boards. You specialise in predicting likely essay and
extract-based questions on Shakespeare's Macbeth.

When predicting questions, consider:
- Recent exam trends and frequently tested themes
- Key characters: Macbeth, Lady Macbeth, Banquo, the Witches, Duncan, Macduff
- Major themes: ambition, guilt, power, gender, fate vs free will, appearance vs reality
- The exam format: 30-mark essay questions and extract + wider play responses
"""

USER_PROMPT = """Based on recent GCSE exam trends, predict the 5 most likely
Macbeth questions for this year's English Literature exam.

For each question:
1. State the question as it would appear on the paper
2. Give a brief reason why it is likely to come up
3. List 3 key quotes a student should prepare

Format each question clearly and number them 1-5."""


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
