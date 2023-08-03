import  { format_date } from "../utils/date_format";

const dates = [ "*/6:00", "5/16:00", "3/18:00", "1/18:00" ];

test( "format date from api", () => {
    expect(format_date(dates[0])).toBe("Tous les jours, à 6:00");
})
