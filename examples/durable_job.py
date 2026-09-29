"""Idempotency within ONE SQLite transaction, not across an external API."""
import sqlite3
import tempfile
from pathlib import Path


def apply_once(connection, operation_id, value):
    with connection:
        inserted = connection.execute(
            "INSERT OR IGNORE INTO operations(id) VALUES (?)", (operation_id,)
        ).rowcount
        if inserted:
            connection.execute("INSERT INTO effects(value) VALUES (?)", (value,))
    return bool(inserted)


if __name__ == "__main__":
    with tempfile.TemporaryDirectory() as directory:
        connection = sqlite3.connect(Path(directory) / "demo.sqlite")
        try:
            connection.executescript(
                "CREATE TABLE operations(id TEXT PRIMARY KEY);"
                "CREATE TABLE effects(value TEXT NOT NULL);"
            )
            print("First attempt:", apply_once(connection, "import-001", "document-v1"))
            print("Retry:", apply_once(connection, "import-001", "document-v1"))
            count = connection.execute("SELECT COUNT(*) FROM effects").fetchone()[0]
            print("Stored effects:", count)
            assert count == 1
        finally:
            connection.close()
