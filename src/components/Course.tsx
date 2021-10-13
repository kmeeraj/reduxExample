import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import {useCallback} from "react";
import {Button} from "@blueprintjs/core";

type Props = {
    course: ICourse;
    removeCourse: any;
}

export const Course = ({course, removeCourse} : Props) => {
    const dispatch: Dispatch<CourseAction> = useDispatch();
    const deleteCourse = useCallback(
        (course: ICourse)=> dispatch(removeCourse(course)),
        [dispatch, removeCourse]
    );
    return (
        <div className="Article">
            <div>
                <h1>{course.name}</h1>
                <p>{course.body}</p>
            </div>
            <Button onClick={() => deleteCourse(course)}>Delete</Button>
        </div>
    )
}