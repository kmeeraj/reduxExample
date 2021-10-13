import {ADD_COURSE, ADD_SYLLABUS, REMOVE_COURSE, REMOVE_SYLLABUS} from "./actionTypes";

export function addCourse(course: ICourse){
    const action: CourseAction = {
        type: ADD_COURSE,
        course
    }
    return simulateHttpRequest(action);
}

export function removeCourse(course: ICourse){
    const action: CourseAction = {
        type: REMOVE_COURSE,
        course
    }
    return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: CourseAction | SyllabusAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 500)
    }
}

export function addSyllabus(syllabus: ISyllabus){
    const action: SyllabusAction = {
        type: ADD_SYLLABUS,
        syllabus
    }
    return simulateHttpRequest(action);
}

export function removeSyllabus(syllabus: ISyllabus){
    const action: SyllabusAction = {
        type: REMOVE_SYLLABUS,
        syllabus
    }
    return simulateHttpRequest(action);
}