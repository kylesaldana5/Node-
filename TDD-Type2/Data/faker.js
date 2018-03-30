const faker = require('faker');

module.exports.generateProgram = () => {
    let program = [];
    for (let i = 0; i < 10; i++) {
        no_of_seats = Math.floor(Math.random() * 10) + 1;
        instructor_name = faker.name.firstName();
        start_date = faker.date.recent();
        end_date = faker.date.between();
        course_category = faker.name.title();

        program.push({
            'no_of_seats': no_of_seats,
            'instructor_name': instructor_name,
            'start_date': start_date.toLocaleDateString(),
            'end_date': end_date.toLocaleDateString(),
            'course_category': course_category
        })
    }
    return program;
}