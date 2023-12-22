---
title: A propos
templateEngineOverride: njk, md
musicians:
  - name: Yves
    img: tete-yves-151x160.jpg
    instrument: Bugle
  - name: Frédéric
    img: tete-frederic-150x150.jpg
    instrument: Trompette
  - name: Jean
    img: tete-jean-150x150.jpg
    instrument: Trombonne
  - name: Josselin
    img: tete-josselin-150x150.png
    instrument: Batterie
  - name: Benjamin
    img: tete-benjamin-146x150.png
    instrument: Guitare
  - name: Gilbert
    img: tete-gilbert-150x150.jpg
    instrument: Soubassophone
eleventyNavigation:
  key: A propos
  order: 2
---

L'orchestre **Dixie Time** est un groupe de six musiciens amateurs qui jouent dans le style "jazz Nouvelle-Orleans".

{% import "partials/macros.njk" as macros %}
{{ macros.musicianList(musicians) }}

Nous sommes disponibles pour des représentations publiques et privées. Vous pouvez [nous contacter](/nous-contacter/) pour toute demande d'informations.

Voici quelques photos issues d'évènements auxquels nous avons participés.

{{ macros.figure("tessy-sur-vire.jpg", "Les six musiciens en train de jouer en extérieur à Tessy-Sur-Vire", "Tessy-sur-Vire - 10 septembre 2016") }}

{{ macros.figure("villedieu.jpg", "Frédéric au premier plan, Jean au second et Josselin au fond, en train de jouer", "Villedieu - 6 avril 2018") }}

{{ macros.figure("la_cahute_2.jpg", "Le groupe, vu de devant, en train de jouer en extérieur sur le sable, sous une tonnelle", "La Cahute - 21 septembre 2021") }}

{{ macros.figure("la_cahute_1.jpg", "Le groupe, vu de côté, en train de jouer en extérieur devant La Cahute, sur le sable et au milieu du public installé autour de tables", "La Cahute - 21 septembre 2021") }}
