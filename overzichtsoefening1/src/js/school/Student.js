"use strict";
import Course from './Course';

export default class Student {


    constructor(id) {
        this._id = id;
        this._courses = [];
    }

    addCourse(course) {
        if (!(course instanceof Course)) {
            throw new Error('course is not an instance of the Course class!');
        }
        this._courses.push(course);
    }

    calculateGrade() {
        let completedCourses = this._courses.filter(course => course.completed === true);
        let sum = 0;

        if (completedCourses.length <= 0) {
            throw new Error('no courses in _courses array!');
        }

        completedCourses.forEach(course => sum += course.grade);

        return sum / completedCourses.length;

    }
}
