import Course from '../../../src/js/school/Course';
import Student from '../../../src/js/school/Student';
// naam:

describe('calculateGrade', () => {
    it('should throw an error for students without completed courses', () => {
        let student = new Student(1);
        let course = new Course(101);
        course.completed = false;
        student.addCourse(course);
        expect(() => {
            student.calculateGrade();
        }).toThrow();
    })
    it('should calculate the correct grade for students', () => {
        let student = new Student(2);
        let course = new Course(102);
        course.completed = true;
        course.grade = 12;
        student.addCourse(course);
        expect(student.calculateGrade()).toBe(12);
    })
})








