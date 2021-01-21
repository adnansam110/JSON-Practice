var search = document.getElementById('search'); 
var matchList = document.getElementById('match-list');

//search the states.JSON and filter

var searchStates = async searchText =>{
    var response = await fetch('../data/states.json');
    var states = await response.json();
    //console.log(states);

    // get matches to current text input

    let matches = states.filter(state => {
        var regx = new RegExp(`^${searchText}`,'gi');
        return state.name.match(regx) || state.abbr.match(regx);
    });

    if (searchText.length === 0){
        matches=[];
        matchList.innerHTML = '';
    }

    outputHtml(matches);
};

function outputHtml(matches){
    if(matches.length>0){
        var html = matches.map(match =>`
            <div class="card card-body mb-1">
                <h4>${match.name} (${match.abbr}) <span class="text-primary">
                ${match.capital}</span></h4>
                <small>Lat: ${match.lat} / Long: ${match.long}</small>
            </div>
        `).join('');

        //console.log(html);
        matchList.innerHTML = html;
    }
}

search.addEventListener('input', () => searchStates(search.value));