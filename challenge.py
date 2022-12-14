import pandas as pd

import sys
import simplejson as json


class Challenge:
    def __init__(self):
        self.name: str = ""
        self.author: str = ""
        self.placeholder: str = ""
        self.input_df: pd.DataFrame = pd.DataFrame([])
        self.expected_df: pd.DataFrame = pd.DataFrame([])

    def show(self):

        print(f"{self.name}")
        print(f"{self.author}")
        print(f"{self.placeholder}")
        print("========================")
        print(f"{self.input_df.to_string()}")
        print("------------------------")
        print(f"{self.expected_df.to_string()}")

    def to_dict(self):

        return {
            "name": self.name,
            "author": self.author,
            "placeholder": self.placeholder,
            "input": self.input_df.to_dict(orient="records"),
            "expected": self.expected_df.to_dict(orient="records"),
        }

    def from_dict(self, data: dict):

        self.name = data.get("name", "")
        self.author = data.get("author", "")
        self.placeholder = data.get("placeholder", "")
        self.input_df = pd.DataFrame.from_dict(data.get("input", []))
        self.expected_df = pd.DataFrame.from_dict(data.get("expected", []))

    def load(self, filename: str):
        with open(filename) as file:
            self.from_dict(json.load(file))

    def save(self, filename: str):
        with open(filename, "w") as file:
            json.dump(self.to_dict(), file, ignore_nan=True)


c = Challenge()
