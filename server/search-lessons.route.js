"use strict";
exports.__esModule = true;
exports.searchLessons = void 0;
var db_data_1 = require("./db-data");
var timers_1 = require("timers");
function searchLessons(req, res) {
    var queryParams = req.query;
    var courseId = queryParams.courseId, filter = String(queryParams.filter) || '', sortOrder = queryParams.sortOrder, pageNumber = parseInt(String(queryParams.pageNumber), 10) || 0, pageSize = parseInt(String(queryParams.pageSize), 10);
    var lessons = Object.values(db_data_1.LESSONS).filter(function (lesson) { return lesson.courseId === Number(courseId); }).sort(function (l1, l2) { return l1.id - l2.id; });
    if (filter) {
        lessons = lessons.filter(function (lesson) { return lesson.description.trim().toLowerCase().search(filter.toLowerCase()) >= 0; });
    }
    if (sortOrder === 'desc') {
        lessons = lessons.reverse();
    }
    var initialPos = pageNumber * pageSize;
    var lessonsPage = lessons.slice(initialPos, initialPos + pageSize);
    timers_1.setTimeout(function () {
        res.status(200).json({ payload: lessonsPage });
    }, 1000);
}
exports.searchLessons = searchLessons;
