import { $container, createElement } from "./../index";
import { defaultMenu } from "./menu";

function renderSidebar() {
    var sidebar = createElement('div','sidebar-container',null,null,null)

    defaultMenu.forEach ((menu) => {
        var tempMenu = createElement('button',null,menu.id,menu.icon,menu.text)
        sidebar.appendChild(tempMenu)
    })

    var tempBar = createElement('h2',null,null,null,'Projects')
    sidebar.appendChild(tempBar)

    var tempBar2 = createElement('button',null,'add-new-project','add','Add new Project')
    sidebar.appendChild(tempBar2)

    $container.appendChild(sidebar)
}

export {renderSidebar}