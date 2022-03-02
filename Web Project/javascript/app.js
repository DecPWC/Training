function changeTheme(){
    let colours = ["red", "green", "blue"];

    while(true)
    {
        for (i = 0; i < colours.length; i++)
        {
            document.body.style.backgroundColor = colours[i];
        }
    }
}

function toggleDescription(){
    let briefCollapse = document.getElementById('briefDescription');
    let fullCollapse = document.getElementById('fullDescription');

    let bsCollapseBrief = new bootstrap.Collapse(briefCollapse);
    let bsCollapseFull = new bootstrap.Collapse(fullCollapse);

    bsCollapseBrief.toggle();
    bsCollapseFull.toggle();
}