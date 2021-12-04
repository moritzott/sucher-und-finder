# Sucher & Finder
Eine Webanwendung zur Vermisstensuche bei Katastrophenfällen

## Anlass
Nach der Flutkatastrophe in NRW und RP 2021 habe ich durch Verwandte in Bonn erfahren, dass selbst nach etlichen Tagen die Polizei immer noch nicht wusste, wer von den vermissten Personen in einer Unterkunft untergekommen ist. Bekannte haben dadurch erst sehr spät (wenn überhaupt) erfahren, wo und ob eine vermisste Person Obdach gefunden hat. 
Offensichtlich existierte keine digitale Lösung für dieses Problem (oder sie wurde nicht eingesetzt). Dieses Projekt ist entstanden, um in Zukunft bei ähnlichen (Natur-)Katastrophen eine Anwendung für die Vermisstensuche und Personenregistrierung zu haben.

## Aufbau der Anwendung
Die Anwendung ist zweigeteilt. Es gibt den *Sucher* und den *Finder*. Im *Finder* können sowohl staatliche Unterkünfte als auch private Haushalte Personen registrieren, die bei ihnen Obdach gefunden haben. Im *Sucher* können Polizei etc. schauen, ob vermisste Personen in einer staatlichen oder privaten Unterkunft untergekommen sind. Vermisstenanzeigen können so viel schneller bearbeitet (und bestenfalls aufgelöst werden).

## Technische Umsetzung
* steht noch nicht endgültig fest, aber hier auf Github wird es einen Prototypen mit *Node.js*, *Express.js* und *MongoDB* geben, parallel dazu eine Version mit [*PHP* und *MySQL*/*MariaDB*](https://github.com/moritzott/sucher-und-finder-php) und alternativ auch eine Umsetzung mit [*Python*, dem Mikro-Webframework *Flask* und (wahrscheinlich) *PostgreSQL*](https://github.com/moritzott/sucher-und-finder-flask). Im weiteren Verlauf wird sich zeigen, welche Implementierung besser für den Zweck geeignet ist.
* in diesem Repositorium entstehen erste Umsetzungen mit Node.js, Express.js und MongoDB.

## Stand des Projektes
* Anfang

## Sonstige Info
* es handelt sich um ein Hobbyprojekt, dem ich mich ab und an nach Feierabend widme.
