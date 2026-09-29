"""A lexical retrieval baseline; no model, dependencies, or network calls."""
import argparse
import re

DOCUMENTS = {
    "en": [("returns", "Returns are accepted within 30 days."),
           ("shipping", "Standard shipping takes three working days."),
           ("contact", "Contact support with your order number.")],
    "de": [("rueckgabe", "Eine Rückgabe ist innerhalb von 30 Tagen möglich."),
           ("versand", "Der Versand dauert drei Werktage."),
           ("kontakt", "Kontaktiere den Support mit deiner Bestellnummer.")],
}


def search(query, language="en", limit=3):
    words = set(re.findall(r"\w+", query.casefold()))
    ranked = [(len(words & set(re.findall(r"\w+", body.casefold()))), key, body)
              for key, body in DOCUMENTS[language]]
    return [(key, body, score) for score, key, body in sorted(ranked, reverse=True)
            if score > 0][:limit]


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--lang", choices=DOCUMENTS, default="en")
    parser.add_argument("--query", default="returns")
    args = parser.parse_args()
    hits = search(args.query, args.lang)
    for key, body, score in hits:
        print(f"[{key}] overlap={score}: {body}")
    if not hits:
        print("Kein Treffer." if args.lang == "de" else "No match.")
