# Huỳnh Gia Hào — Personal Website (Korean Minimal)

Single-theme personal website with a Korean Minimal visual system. English is primary, Vietnamese toggle is retained.

## Add your photos

Create this folder if it does not exist:

```text
assets/images/
```

Then add:

```text
assets/images/hero.jpg
assets/images/life-01.jpg
assets/images/life-02.jpg
assets/images/life-03.jpg
assets/images/life-04.jpg
assets/images/life-05.jpg
assets/images/life-06.jpg
assets/images/life-07.jpg
assets/images/life-08.jpg
assets/images/life-09.jpg
assets/images/life-10.jpg
assets/images/life-11.jpg
assets/images/life-12.jpg
assets/images/life-13.jpg
assets/images/life-14.jpg
assets/images/life-15.jpg
```

Recommended crops:
- `hero.jpg`: portrait **4:5**, ideally 1600×2000 or similar.
- Portrait-oriented slots: `life-01`, `02`, `04`, `05`, `06`, `08`, `09`, `10`, `12`, `13`, `14` — **4:5** or **3:4** works best.
- Wide slots: `life-03`, `07`, `11`, `15` — **16:9** works best.

All 15 slots are already coded. Just add/replace the image files; no HTML/CSS change is required.

The site uses `object-fit: cover`, so larger photos will automatically crop to the card shape. Keep the subject away from extreme edges.

## Add Instagram / TikTok / Threads

Open `index.html`, search for `pending-social`, replace `href="#"` with the real URL, then remove `class="pending-social"`.

## Run locally

Open `index.html` directly, or use VS Code Live Server.

## Mobile

The layout is responsive. Desktop uses a wide editorial grid; on phones the hero becomes one column and the photo diary changes to a 2-column mobile grid. Wide images (`03`, `07`, `11`, `15`) span both columns in 16:9; portrait images stay 4:5.
