import {refs} from './refs'
import storage from './storage'
import spinner from '../templates/spinner.hbs'
import eventRender from './eventRender';

const addSpinner = (ref, place) => {
    refs[ref].insertAdjacentHTML(place, spinner())
}

const addClassSpinner = (search, type, clas) => {
    document.querySelector(search).classList[type](clas)
}

export const showHideSpinner = (param) => {
    refs.mainPart.querySelector('.spinner').classList[param]('hidden')
}

const addFirstVisitStyles = () => {
    refs.firstVisit.classList.add("first-visit-container")
    addClassSpinner('.spinner', "add", "first-visit")
    addClassSpinner('div.dot-pulse', "add", "first-visit")
    document.querySelector(".first-visit-container").style = "transition: opacity 2s"
}

if (!storage.getItem("first-visit")) {
    addSpinner("firstVisit", "afterend")
    addFirstVisitStyles()
    setTimeout(() => {
        addSpinner("mainPart", "beforeend")
        eventRender()
        refs.firstVisit.classList.remove("first-visit-container")
        document.querySelector(".spinner.first-visit").outerHTML = ""
      storage.setItem("first-visit", true)
}, 2500)
} else {
    addSpinner("mainPart", "beforeend")
    eventRender()
}

