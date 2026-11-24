# Make the AI Judge Laugh: the Office Joke Open

[![make.fun](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![Rank](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/samidyt/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232-makefun/rank.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![Reward](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/samidyt/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232-makefun/reward.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)

## Entry

> My boss said we need to think outside the box. I suggested we start by leaving the box at 5pm.

A single-line joke about office life (94 characters). A judge model reads jokes two at a time and keeps the funnier one; the winner survives the most comparisons.

## How it works

`main.ts` writes the joke to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`), with a built-in gate self-check: 1–200 characters, exactly one line, not only whitespace. The output is deterministic across runs.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Bounty

[Make the AI Judge Laugh: the Office Joke Open](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232) — $2, one paid place.
