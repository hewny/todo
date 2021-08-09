import { $container, createElement} from "./../index.js";

function renderFooter() {
    var footer = createElement('div','footer',null,null,'Created by Hewny')
    $container.appendChild(footer)
}

export {renderFooter}