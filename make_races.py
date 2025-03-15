import json
import sys

month_titles_greek = {
    1: "Ιανουάριο",
    2: "Φεβρουάριο",
    3: "Μάρτιο",
    4: "Απρίλιο",
    5: "Μάιο",
    6: "Ιούνιο",
    7: "Ιούλιο",
    8: "Αύγουστο",
    9: "Σεπτέμβριο",
    10: "Οκτώβριο",
    11: "Νοέμβριο",
    12: "Δεκέμβριο"
}

month_titles_greklish = {
    1: "ianouarios",
    2: "febrouarios",
    3: "martios",
    4: "aprilios",
    5: "maios",
    6: "iounios",
    7: "ioulios",
    8: "augoustos",
    9: "septemvrios",
    10: "oktovrios",
    11: "noemvrios",
    12: "dekemvrios"
}

def generate_race_list(month):
    with open('races.json', 'r', encoding='utf-8') as file:
        races = json.load(file)

    month_description = "Καλένταρι αγώνων δρομου και βουνού σε κάθε γωνιά της Ελλάδας. Ημερολόγιο με πληροφορίες και ημερομηνίες για κάθε εκδήλωση."

    title = f"Καλένταρι αγώνων δρομου και βουνού για τον {month_titles_greek[month]} | racelist.gr"
    og_title = title
    twitter_title = title

    races_content = ""
    for race in races:
        race_date = race['Date']
        if race_date.startswith(f'2025-{month:02d}'):
            races_content += f'    <li>\n'
            races_content += f'        <strong>{race["Title"]}</strong> - {race_date} {race["Location"]}<br>\n'
            races_content += f'        <b>Αποστάσεις</b>: {", ".join(race["Distances"])}'
            if "SignupLink" in race and race["SignupLink"]:
                races_content += f' - <a href="{race["SignupLink"]}?utm_src=racelist.gr">Εγγραφή</a>\n'
            races_content += f'    </li>\n'

    html_content = f"""<!DOCTYPE html>
<html lang="el">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="canonical" href="https://racelist.gr/index.html">

    <title>{title}</title>

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="{og_title}">
    <meta property="og:description" content="{month_description}">
    <meta property="og:url" content="https://racelist.gr">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://racelist.gr/racelist-banner.jpg">
    <meta property="og:site_name" content="racelist.gr">
    <meta property="og:locale" content="el_GR">

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{twitter_title}">
    <meta name="twitter:description" content="{month_description}">
    <meta name="twitter:image" content="https://racelist.gr/racelist-banner.jpg">

    <script type="application/ld+json">
        {{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "racelist.gr",
          "url": "https://racelist.gr",
          "description": "{month_description}"
        }}
    </script>

    <link rel="stylesheet" href="/style.css">

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-1YBT2BFVT9"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){{dataLayer.push(arguments);}}
    gtag('js', new Date());

    gtag('config', 'G-1YBT2BFVT9');
    </script>
</head>

<body>
    <header>
        <nav class="navbar">
            <a href="/">Home</a>
            <a href="/faq.html">FAQ</a>
        </nav>
    </header>

    <main class="content">
        <h1>Ερχόμενοι αγώνες για τον {month_titles_greek[month]}</h1>

        <!-- Race List Section -->
        <h2>Ερχόμενοι αγώνες</h2>
        <ul id="race-list" class="racelist">
            {races_content}
        </ul>

        <!-- Email Subscription Form -->
        <h2>Ενημερωθείτε για νέους αγώνες</h2>
        <iframe width="540" height="770" src="https://5c522626.sibforms.com/serve/MUIFANOGXj0DR-zKSPHa6q1z37Z-tauYG4yy-n7ULu9apEpfztwdFzvSvD_DCsWzUhvY0egAnsbaJQ5CfQqkWrUEdQEx9jHCSnhMAd-MWWgu-7OpR2RHnwM3mres1sD7pSC1_TpLpEVluwwpVhn5Nbmi0x2cApjFo4QyyV05eFuRgBn2G7N_HlGGDX6YO86fPZkZH-4LSrkWR7gO" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>
    </main>

    <footer>
        <div class="subfooter">
            <div class="section">
                <ul>
                    <li class="title">About</li>
                    <li><a href="/faq.html">FAQ</a></li>
                    <li><a href="/about.html">Σχετικά με μας</a></li>
                    <li><a href="/arthra/index.html">Άρθρα</a></li>
                </ul>
            </div>
        </div>

        <div class="copy">
            Copyright © <script>document.write(new Date().getFullYear());</script> racelist.gr | Developed with ❤️ by <strong><a href="https://www.techpals.eu/?utm_source=racelist.gr&utm_content=footer&utm_medium=referral">TechPals</a></strong>
        </div>
    </footer>
</body>
</html>
"""
    
    return html_content

if len(sys.argv) > 1:
    month = int(sys.argv[1])
    print(f'Generating kalentari-agwnwn-{month_titles_greklish[month]}-2025.html')
    with open(f'agwnes/kalentari-agwnwn-{month_titles_greklish[month]}-2025.html', 'w', encoding='utf-8') as fd:
        fd.write(generate_race_list(month))

