# Practice projects

Three small exercises connect the chapters to runnable local examples.

## Project 1: Understand retrieval

From the repository, run `python examples/retrieval.py --lang en --query "returns"`. The script searches three sample documents using shared words. It uses neither a language model nor embeddings, making the baseline's limitations visible.

Check a known question, an unknown question, and a German question using `--lang de`. Success means an appropriate match appears or no match is explicitly reported. Then read [Retrieval optimization](32-retrieval-optimization.md).

## Project 2: Retry without duplicate effects

Run `python examples/durable_job.py`. A local SQLite example processes the same operation identifier twice and records only one effect. State and effect deliberately share a single database transaction.

Success means one effect after two calls. Then explain why this does not automatically cover an external API. Read [Recovery](26-durable-state-machines.md). The example uses a temporary database and removes it after the run.

## Project 3: Interpret an evaluation

Run `python examples/evaluate.py`. Eight labeled demonstration cases are scored overall and by language. The data is synthetic and is not a vendor benchmark.

Success means you can explain why the aggregate hides a language difference. Change one case and calculate the result by hand first. Read [Evaluation](34-evaluation-science.md).

## Record your results

Document the task, input, expected outcome, observed outcome, and one next improvement. Do not use personal or confidential data for these exercises. The examples require only the Python standard library.
