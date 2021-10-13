import React, {useCallback} from 'react';
import './App.css';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {addCourse, removeCourse} from "./store/actionCreators";
import {AddCourse} from "./components/AddCourse";
import {Course} from "./components/Course";
import {Card, Elevation} from "@blueprintjs/core";

const App = () => {
  const courses : readonly ICourse[] = useSelector(
      (state: CourseState) => state.courses,
      shallowEqual
  );
  const dispatch: Dispatch<any> = useDispatch();
  const saveCourse = useCallback(
      (course: ICourse) => dispatch(addCourse(course)),
      [dispatch]
  )
  return (
      <main>
        <h1>My Courses</h1>
          <Card key='Main Card'  elevation={Elevation.TWO}>
        <AddCourse saveCourse={saveCourse} />
        {courses.map((course: ICourse) => (
            <Card key={course.id} elevation={Elevation.FOUR}>
                <Course
                    key={course.id}
                    course={course}
                    removeCourse={removeCourse}
                />
            </Card>
        ))}
          </Card>
      </main>
  );
}

export default App;
