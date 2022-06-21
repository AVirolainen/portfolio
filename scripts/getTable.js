const axios = require("axios");
const cheerio = require("cheerio");
const Constants = require("./constants")

function parseTable(response){
    const html = response.data;
    const htmlToParse = cheerio.load(html);
    let id = 0;
    const res = {};

    htmlToParse(Constants.CLASSES_FOR_PARSE.TABLE)
        .children()
        .each(function () {
            let team = htmlToParse(Constants.CLASSES_FOR_PARSE.TEAM, this)
                .text()
                .replace(/(\r\n|\n|\r|\t)/gm, "")
                .split(" ")
                .filter((item) => item.length > 0)
                .join(" ");

            let games = htmlToParse(Constants.CLASSES_FOR_PARSE.GAMES, this).text();
            let points = htmlToParse(Constants.CLASSES_FOR_PARSE.SCORE, this).text();
            let image = htmlToParse(Constants.CLASSES_FOR_PARSE.TEAM, this).children().find("img").attr("src");

            if (team.length > 0 && parseInt(games, 10) && parseInt(points, 10)) {
                res["id_" + id] = {
                    team,
                    games,
                    points,
                    image,
                };
                id += 1;
            }
        });
    return res;
}

module.exports = axios(Constants.URL).then(response => parseTable(response))
