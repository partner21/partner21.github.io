function getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split('=');
        if(pair[0] === variable){return decodeURI(pair[1])}
    }
    return(false);
}

function setQueryVariableById(variable, id) {
    const dataOutput = document.getElementById(id).innerHTML = getQueryVariable(variable);
}