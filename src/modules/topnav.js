import { $container, createElement } from "./../index";

function renderNav() {
    var nav = createElement('div','topnav-container',null,'done_outline','To-Do List')
    $container.appendChild(nav)
}

export {renderNav}