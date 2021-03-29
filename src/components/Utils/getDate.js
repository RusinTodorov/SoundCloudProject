let DateDiff = {

    inMinutes: function (d1, d2) {
        let t2 = d2.getTime();
        let t1 = d1.getTime();

        return parseInt((t2 - t1) / (60 * 1000));
    },

    inHours: function (d1, d2) {
        let t2 = d2.getTime();
        let t1 = d1.getTime();

        return parseInt((t2 - t1) / (3600 * 1000));
    },

    inDays: function (d1, d2) {
        let t2 = d2.getTime();
        let t1 = d1.getTime();

        return parseInt((t2 - t1) / (24 * 3600 * 1000));
    },

    inWeeks: function (d1, d2) {
        let t2 = d2.getTime();
        let t1 = d1.getTime();

        return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7));
    },

    inMonths: function (d1, d2) {
        let d1Y = d1.getFullYear();
        let d2Y = d2.getFullYear();
        let d1M = d1.getMonth();
        let d2M = d2.getMonth();

        return (d2M + 12 * d2Y) - (d1M + 12 * d1Y);
    },

    inYears: function (d1, d2) {
        return d2.getFullYear() - d1.getFullYear();
    }
}

// var dString = "March, 28, 2021 17:25:00";

// var d1 = new Date(dString);
// var d2 = new Date();

// console.log("Number of minutes since " + dString + ": " + DateDiff.inMinutes(d1, d2));
// console.log("Number of hours since " + dString + ": " + DateDiff.inHours(d1, d2));
// console.log("Number of days since " + dString + ": " + DateDiff.inDays(d1, d2));
// console.log("Number of weeks since " + dString + ": " + DateDiff.inWeeks(d1, d2));
// console.log("Number of months since " + dString + ": " + DateDiff.inMonths(d1, d2));
// console.log("Number of years since " + dString + ": " + DateDiff.inYears(d1, d2));

export function calculateDate(dateString) {
    var d1 = new Date(dateString);
    var d2 = new Date();

    let inMinutes = DateDiff.inMinutes(d1, d2);
    let inHours = DateDiff.inHours(d1, d2);
    let inDays = DateDiff.inDays(d1, d2);
    let inWeeks = DateDiff.inWeeks(d1, d2);
    let inMonths = DateDiff.inMonths(d1, d2);
    let inYears = DateDiff.inYears(d1, d2);

    if (inMinutes < 60) {
        return inMinutes + (inMinutes === 1 ? ' minute ago' : ' minutes ago')
    } else if (inHours < 24) {
        return inHours + (inHours === 1 ? ' hour ago' : ' hours ago')
    } else if (inDays < 8) {
        return inDays + (inDays === 1 ? ' day ago' : ' days ago')
    } else if (inWeeks < 5) {
        return inWeeks + (inWeeks === 1 ? ' week ago' : ' weeks ago')
    } else if (inMonths < 13) {
        return inMonths + (inMonths === 1 ? ' month ago' : ' months ago')
    } else {
        return inYears + (inYears === 1 ? ' year ago' : ' years ago')
    }
}
