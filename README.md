# Surgical Instrument Study

A simple mobile-friendly study website for surgical instruments. It uses plain HTML, CSS, JavaScript, and `instruments.json` as the editable database.

## Run locally

Because the app fetches a JSON file, serve the folder with a small local server:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000>.

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
