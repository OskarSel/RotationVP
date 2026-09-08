# Rotacja — frontend platformy do nauki siatkówki

Kompletny, klikalny frontend (bez backendu) zbudowany w czystym HTML5 / CSS3 / JavaScript. Zero frameworków, zero bundlera — działa od razu po otwarciu w przeglądarce.

## Jak uruchomić lokalnie

Nie trzeba niczego instalować.

1. Rozpakuj archiwum.
2. Otwórz `index.html` bezpośrednio w przeglądarce

   **albo** (zalecane, żeby uniknąć ograniczeń przeglądarki przy otwieraniu plików przez `file://`) uruchom prosty lokalny serwer w folderze projektu, np.:

   ```bash
   python3 -m http.server 8000
   ```

   i wejdź na `http://localhost:8000`.

## Struktura projektu

```
index.html         Strona główna
learn.html          Lista rozdziałów
chapter.html        Ścieżka lekcji w rozdziale (?chapter=N)
lesson.html         Odtwarzacz lekcji (?chapter=N&lesson=M)
dashboard.html       Panel postępu
profile.html        Profil użytkownika
login.html / register.html   Logowanie / rejestracja (bez backendu)

css/
  main.css          Design tokens, reset, typografia, layout
  components.css    Komponenty (navbar, karty, przyciski, quiz, ścieżka lekcji...)
  responsive.css    Breakpointy (mobile-first)

js/
  data.js           Struktura danych rozdziałów/lekcji (8 × 10, placeholdery)
  storage.js        Warstwa nad localStorage — jedyne miejsce, które go dotyka
  navigation.js     Menu mobilne + aktywny link + breadcrumb
  lessons.js        Renderowanie siatki rozdziałów, ścieżki lekcji, quizu
  progress.js       Dashboard i profil (statystyki, XP, osiągnięcia)
  app.js            Punkt wejścia — odpala odpowiednią funkcję wg <body data-page="...">

assets/
  images/ icons/ animations/   Puste foldery, gotowe na przyszłe materiały
```

## Co jest gotowe

- Pełna nawigacja między wszystkimi podstronami, w tym generowane linki `chapter.html?chapter=N` i `lesson.html?chapter=N&lesson=M`.
- System postępu w `localStorage`: ukończone lekcje, XP, poziom, seria dni, ostatnia lekcja.
- Logika odblokowywania: rozdział 2 odblokowuje się dopiero po ukończeniu wszystkich lekcji rozdziału 1, itd. Lekcje w rozdziale odblokowują się sekwencyjnie.
- Interfejs quizu z zaznaczaniem odpowiedzi i przyciskiem „Sprawdź” (logika jest uproszczona — jedno przykładowe pytanie na lekcję).
- Tryb ciemny (opcjonalny, przełącznik w Profilu).
- Responsywność mobile-first (telefon → tablet → desktop → duży monitor).

## Co jest celowo placeholderem

- Treści lekcji („Lekcja 1”, „Rozdział 1”, opisy) — do podmiany, gdy powstanie prawdziwy program nauczania.
- Obszar animacji 2D/3D — pokazuje ramkę z podpisem „Miejsce na animację”.
- Logowanie/rejestracja — formularze bez prawdziwej autoryzacji; przekierowują do dashboardu.

## Dalszy rozwój

`storage.js` jest napisany tak, żeby można było podmienić `localStorage` na Firebase/Supabase bez zmiany kodu w `lessons.js` czy `progress.js` — wystarczy przepisać metody `ProgressStore` (docelowo na `async`) i zaktualizować wywołania na `await`.
