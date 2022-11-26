function activitySuccess(response){
    console.log(response);
    let active = response.data;
    document.getElementById(`activityResult`).insertAdjacentHTML(`beforeend`, `<h2>Activity to do: ${active.activity}</h2>`);
}

function activityFailure(error){
    console.log(error);
    document.getElementById(`activityResult`).insertAdjacentHTML(`beforeend`, `<h2>Could not get activity!</h2>`);
}

function clearResult(){
    document.getElementById(`activityResult`).innerHTML = "";
}

function activity(){
    axios.request({
        url : "http://www.boredapi.com/api/activity/",
    }).then(activitySuccess).catch(activityFailure);
}

document.getElementById(`mainButton`).addEventListener(`click`, activity);
document.getElementById(`clearResult`).addEventListener(`click`, clearResult);


