import {ADD_COURSE, REMOVE_COURSE} from "./actionTypes";

const initialState : CourseState = {
    courses: [
        {
            id: 1,
            body: "Basics of the React Course",
            name: "React Basics"
        },
        {
            id: 2,
            body: "Basics of Angular Course",
            name: "Angular Basics"
        },
        {
            id: 3,
            body: "Basics of Java Course",
            name: "Java Basics"
        },
        {
            id: 4,
            body: "Basics of Python Course",
            name: "Python Basics"
        }
    ]
}

const reducer = (
    state: CourseState = initialState,
    action: CourseAction
): CourseState => {
    switch (action.type) {
        case ADD_COURSE:
            const newCourse: ICourse = {
                id: Math.random(),
                body: action.course.body,
                name: action.course.name,
            }
            return {
                ...state,
                courses: state.courses.concat(newCourse),
            }
        case REMOVE_COURSE:
            const updateCourses: ICourse[] = state.courses.filter(
                course => course.id !== action.course.id
            )
            return {
                ...state,
                courses: updateCourses,
            }
    }
    return state;
}

export default reducer;