function swapDOMElements(element1, element2){
    const temp = document.createElement('div');
    element1.parentNode.insertBefore(temp, element1);
    element2.parentNode.insertBefore(element1, element2);
    temp.parentNode.insertBefore(element2, temp);
    temp.parentNode.removeChild(temp);
}

function isElementBefore(element1, element2) {
    if (element1 && element2 && element1 !== element2) {
        const parent = element1.parentNode;

        if (parent === element2.parentNode) {
            
            const children = Array.from(parent.children);

            const index1 = children.indexOf(element1);
            const index2 = children.indexOf(element2);

            if (index1 !== -1 && index2 !== -1) {
                
                return index1 < index2;
            }
        }
    }
    return false; 
}
