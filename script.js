// Funktion för att beräkna notan och dela upp den
Funktion splitTheNota():
    // Läs in användarens input
    Läs in "Ange notans totala summa: " -> summa
    Läs in "Ange antal vänner: " -> antalVänner

    // Fråga användaren om de vill dela notan jämnt eller använda en fast summa per person
    Skriv "Vill du dela notan jämnt (J) eller använda en fast summa per person (F)?"
    Läs in "Ditt val: " -> val

    Om val == "J" eller val == "j":
        // Beräkna belopp per vän om notan delas jämnt
        beloppPerVan = summa / antalVänner

        // Skriv ut resultatet
        Skriv "Notan är totalt: " + summa
        Skriv "Varje vän ska betala: " + beloppPerVan
    Annars om val == "F" eller val == "f":
        // Läs in användarens input för den fasta summan per person
        Läs in "Ange den fasta summan per person: " -> fastSummaPerPerson

        // Skriv ut resultatet
        Skriv "Notan är totalt: " + summa
        Skriv "Varje vän ska betala: " + fastSummaPerPerson
    Annars:
        // Felaktigt val, avsluta programmet
        Skriv "Felaktigt val. Avslutar programmet."
        Avsluta
    Slut Om
Slut Funktion

// Anropa funktionen för att utföra uppdelningen
splitTheNota()




//Andra delen altså VG
// Skapa en lista av tillåtna ord
ordbok = ["EYE", "LYE", "LIE", "LID"]

Funktion ärKorrektOrd(ord):
    // Kontrollera om ordet finns i ordboken
    Returnera om ord är i ordbok annars falskt
Slut Funktion

Funktion ärEnBokstavsByte(ord1, ord2):
    // Kontrollera om orden skiljer sig bara med en bokstav
    antalSkillnader = 0

    för varje index, bokstav i ord1:
        om bokstav != ord2[index]:
            antalSkillnader++
        
        // Om antalet skillnader överstiger 1, returnera falskt
        om antalSkillnader > 1:
            Returnera falskt
    
    // Om antalet skillnader är exakt 1, returnera sant
    Returnera sant
Slut Funktion

Funktion lösaDoublets(startord, slutord):
    om inte (ärKorrektOrd(startord) och ärKorrektOrd(slutord)):
        Skriv "Felaktiga start- eller slutord. Avslutar programmet."
        Avsluta
    Slut Om

    om längden av startord är inte lika med längden av slutord:
        Skriv "Start- och slutord måste ha samma längd. Avslutar programmet."
        Avsluta
    Slut Om

    // Skapa en lista för att hålla reda på de bildade orden
    bildadeOrd = [startord]

    så länge inte sista ordet i bildadeOrd är lika med slutord:
        // Läs in nästa gissning från användaren
        nästaGissning = Läs in "Gissa nästa ord: "

        om inte (ärKorrektOrd(nästaGissning) och ärEnBokstavsByte(sista ordet i bildadeOrd, nästaGissning)):
            Skriv "Felaktig gissning. Försök igen."
            fortsätt  // Gå tillbaka och be användaren gissa igen
        Slut Om

        // Lägg till nästa gissning i listan över bildade ord
        Lägg till nästaGissning i bildadeOrd

    // Skriv ut resultatet
    Skriv "Grattis! Du har löst pusslet. Här är ordföljden: " + bildadeOrd
Slut Funktion

// Anropa funktionen för att lösa pusslet med de angivna start- och slutorden
lösaDoublets("EYE", "LID")




