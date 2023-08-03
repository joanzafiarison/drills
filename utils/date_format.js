
function format_date(date){
    const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    let date_parts = date.split("/");
    let result = '';
    if (date_parts[0] >= 1 && date_parts[0] <=7 &&  date_parts[0] !== "*") {
        result = days[date_parts[0] - 1]+", à "+date_parts[1];
    }
    else {
        result = "Tous les jours, à "+date_parts[1];
    }
    
    return result; 
    
}

export {
    format_date
}