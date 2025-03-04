# Bérkalkulátor

## Telepítés

```bash
npm install
```

## Futtatás

```bash
npm run dev
```

## Leírás

A keretprogram egy egyszerű és lecsupaszított alkalmazás Vite-tel létrehozva. A fő `App` komponens egyszerűen csak megjeleníti a `HouseholdSalaryCalculator` komponenst. A `components` mappában található mappaszerkezet az ajánlott eljárás a kód strukturálás szempontjából. Minden mappában található egy `jsx` kiterjesztésű fájl, illetve egy `components` mappa, ahova a logikailag alá tartozó komponensek kerülhetnek.
(Például amennyiben van egy lista komponensünk, a listaelem komponensek kerülhetnének a `components` mappába.)

Az alkalmazás három fő részből áll:

- Családtag kiválasztó fülek
- Bérkalkulátor
- Háztartás összesítő bértáblázat

A fenti három komponens megjelenítéséért felel a `HouseholdSalaryCalculator` komponens.

