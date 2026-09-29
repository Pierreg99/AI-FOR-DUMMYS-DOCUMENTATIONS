"""Synthetic teaching data, not measurements of any real model."""
CASES = [("de", True), ("de", False), ("de", True), ("de", False),
         ("en", True), ("en", True), ("en", True), ("en", True)]


def success_rate(results):
    return sum(results) / len(results) if results else None


if __name__ == "__main__":
    for language in ["all", "de", "en"]:
        results = [ok for lang, ok in CASES if language == "all" or lang == language]
        rate = success_rate(results)
        print(f"{language}: {sum(results)}/{len(results)} = {rate:.0%}")
