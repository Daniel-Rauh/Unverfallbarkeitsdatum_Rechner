const date = document.getElementById("birthdate")
const stichtag = document.getElementById("stichtag")
const zusagedatum = document.getElementById("zusagedatum")
const eintrittsdatum = document.getElementById("eintrittsdatum")
const result = document.getElementById("result")
function calc() {
    let year
    let month
    let day
    let ageComp
    let zusageComp
    let birth = new Date(date.value)
    let stich = new Date(stichtag.value)
    let zusage = new Date(zusagedatum.value)
    let eintritt = new Date(eintrittsdatum.value)
    let timeDiff = stich.getTime() - birth.getTime()
    let age = timeDiff / (1000 * 3600 * 24) / 365
    let timeDiff2 = stich.getTime() - zusage.getTime()
    let zusagedauer = timeDiff2 / (1000 * 3600 * 24) / 365
    let timeDiff3 = stich.getTime() - eintritt.getTime()
    let zugehörigkeit = timeDiff3 / (1000 * 3600 * 24) / 365
    if ((zusage.getFullYear() >= 2018)) {
        if (age < 21 && zusagedauer >= 3) {
            year = birth.getFullYear() + 21
            month = birth.getMonth() + 1
            day = birth.getDate()
        } else if (age < 21 && zusagedauer < 3) {
            ageComp = new Date((birth.getFullYear() + 21), birth.getMonth(), birth.getDate())
            zusageComp = new Date((zusage.getFullYear() + 3), zusage.getMonth(), zusage.getDate())
            if (ageComp > zusageComp) {
                year = birth.getFullYear() + 21
                month = birth.getMonth() + 1
                day = birth.getDate()
            } else {
                year = zusage.getFullYear() + 3
                month = zusage.getMonth() + 1
                day = zusage.getDate()
            }
        }
        else {
            year = zusage.getFullYear() + 3
            month = zusage.getMonth() + 1
            day = zusage.getDate()
        }
    } else if ((zusage.getFullYear() < 2018) && (zusage.getFullYear() >= 2009)) {
        if (age < 25 && zusagedauer >= 5) {
            year = birth.getFullYear() + 25
            month = birth.getMonth() + 1
            day = birth.getDate()
        } else {
            year = zusage.getFullYear() + 5
            month = zusage.getMonth() + 1
            day = zusage.getDate()
        }
    } else if ((zusage.getFullYear() < 2009) && (zusage.getFullYear() >= 2001) && (age >= 30) && (zusagedauer >= 5)) {
        year = zusage.getFullYear() + 5
        month = zusage.getMonth() + 1
        day = zusage.getDate()
    } else if ((zusage.getFullYear() < 2001) && (age >= 35) && (zusagedauer >= 10)) {
        year = zusage.getFullYear() + 10
        month = zusage.getMonth() + 1
        day = zusage.getDate()
    } else if ((zusage.getFullYear() < 2001) && (age >= 35) && (zusagedauer >= 3) && (zugehörigkeit >= 12)) {
        year = zusage.getFullYear() + 10
        month = zusage.getMonth() + 1
        day = zusage.getDate()
    } else if (age < 0) {
        result.innerHTML = `Stichtag muss nach dem Geburtsdatum sein`
        return
    } else if (zusagedauer < 0) {
        result.innerHTML = `Stichtag muss nach dem Zusagedatum sein`
        return
    } else if (zugehörigkeit < 0) {
        result.innerHTML = `Stichtag muss nach dem Eintrittsdatum sein`
        return
    }
    result.innerHTML = `Unverfallbar: ${day}.${month}.${year}`
}