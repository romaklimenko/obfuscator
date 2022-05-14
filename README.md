# Obfuscator

[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

Obfuscator is a simple tool that replaces JSON data with random values but preserves the data structure, types, and relations.

This tool becomes handy if you have a problem with a dataset that you can't share because it contains sensitive information. Obfuscator replaces all values in this dataset with random values (not with hash values), but it will keep the structure and JSON types intact.

For example, you have the following `employees.json` file:

```json
[
  {
    "id": 193,
    "department_id": 10,
    "name": "Joe Sixpack",
    "email": "nospam@spam.dev",
    "phone": "+1-234-567-890",
    "city": "New York",
    "socialSecurityNumber": "555-55-5555",
    "active": true,
    "salary": 10000
  },
  {
    "id": 220,
    "department_id": 12,
    "name": "Jane Plain",
    "email": "me@main.none",
    "city": "New York",
    "phone": "+2-345-678-901",
    "socialSecurityNumber": "777-77-7777",
    "active": false,
    "salary": 150000
  }
]
```
And `departments.json` file in the same directory:
```json
[
  {
    "id": 10,
    "name": "HR"
  },
  {
    "id": 12,
    "name": "Sales"
  }
]
```

If you haven't installed Obfuscator yet, run this command:

```shell
npm install -g data-obfuscator
```

And then, just `cd` to your directory with the JSON files run `obfuscate`. Obfuscator will create a file per every JSON file in the directory. So, for our example, it will make `employees.obfuscated.json`:

```JSON
[
  {
    "id": 961,
    "department_id": 87,
    "name": "J5A CIWZLao",
    "email": "RPYAh6@cqz0.2Cn",
    "phone": "+7-514-949-061",
    "city": "X9A zUS4",
    "socialSecurityNumber": "972-82-8282",
    "active": true,
    "salary": 58635
  },
  {
    "id": 571,
    "department_id": 5,
    "name": "RIz1 X9ve0",
    "email": "1E@LrVW.RBo1",
    "city": "X9A zUS4",
    "phone": "+5-330-447-822",
    "socialSecurityNumber": "137-42-7934",
    "active": false,
    "salary": 243046
  }
]
```

`departments.obfuscated.json`:

```JSON
[
  {
    "id": 87,
    "name": "OL"
  },
  {
    "id": 5,
    "name": "JmzX0"
  }
]
```

And `clues.json`:
```JSON
[
  {
    "before": 10,
    "_after": 87
  },
  {
    "before": "HR",
    "_after": "OL"
  },
  {
    "before": 12,
    "_after": 5
  },
  {
    "before": "Sales",
    "_after": "JmzX0"
  },
  {
    "before": 193,
    "_after": 961
  },
  {
    "before": "Joe Sixpack",
    "_after": "J5A CIWZLao"
  },
  {
    "before": "nospam@spam.dev",
    "_after": "RPYAh6@cqz0.2Cn"
  },
  {
    "before": "+1-234-567-890",
    "_after": "+7-514-949-061"
  },
  {
    "before": "New York",
    "_after": "X9A zUS4"
  },
  {
    "before": "555-55-5555",
    "_after": "972-82-8282"
  },
  {
    "before": 10000,
    "_after": 58635
  },
  {
    "before": 220,
    "_after": 571
  },
  {
    "before": "Jane Plain",
    "_after": "RIz1 X9ve0"
  },
  {
    "before": "me@main.none",
    "_after": "1E@LrVW.RBo1"
  },
  {
    "before": "+2-345-678-901",
    "_after": "+5-330-447-822"
  },
  {
    "before": "777-77-7777",
    "_after": "137-42-7934"
  },
  {
    "before": 150000,
    "_after": 243046
  }
]
```

The `clues.json` links the original values and the newly generated random values. So you can now share the two obfuscated files with your colleague and keep `clues.json` if you need to map the randomly generated values back to the original ones.

However, you still need to be careful with the data: the default implementation of Obfuscator preserves string lengths, spaces, dots, "at signs" (@), and a couple more symbols to keep emails, GUIDs, and text look more natural.
It also doesn't change `null` and boolean values.
