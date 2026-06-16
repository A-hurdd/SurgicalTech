# Surgical Instrument Study

A simple mobile-friendly study website for surgical instruments. It uses plain HTML, CSS, JavaScript, and `instruments.json` as the editable database.

## Run locally

You can open `index.html` directly in a browser. For the best editing workflow, serve the folder with a small local server so changes to `instruments.json` are loaded immediately:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000>. If you double-click `index.html`, the page still works by using the embedded starter copy of the JSON database as a fallback.

## Edit the database

Add or update records in `instruments.json`. Each instrument supports:

- `id`
- `name`
- `category`
- `subcategory`
- `used_for`
- `recognize_by`
- `common_procedures`
- `similar_to`
- `do_not_confuse_with`
- `difficulty`
- `learned`
- `image_url`
- `notes`
