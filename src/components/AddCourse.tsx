import { FormEvent, useState} from "react";
import {Button, Card, FormGroup} from "@blueprintjs/core";

type Props = {
    saveCourse: (course: ICourse) => void
}

export const AddCourse =({saveCourse}: Props) => {
    const [course, setCourse] = useState<ICourse>({} as ICourse);
    const handleCourseName = (e: FormEvent<HTMLInputElement>) => {
        setCourse({
            ...course,
            name: e.currentTarget.value,
        })
    }
    const handleCourseBody = (e: FormEvent<HTMLInputElement>) => {
        setCourse({
            ...course,
            body: e.currentTarget.value,
        })
    }
    const addNewCourse = (e: FormEvent) => {
        saveCourse(course);
    }

    return(
        <Card>
            <FormGroup
                helperText="Title"
                label="Title"
                labelFor="text-input"
                labelInfo="(required)"
            >
                <input
                    type="text"
                    id="title"
                    placeholder="Title"
                    onChange={handleCourseName}
                    />
            </FormGroup>
            <FormGroup
                helperText="Content"
                label="Content"
                labelFor="body"
                labelInfo="(required)"
            >
                    <input
                        type="text"
                        id="body"
                        placeholder="Description"
                        onChange={handleCourseBody}
                        />
            </FormGroup>
            <Button onClick={addNewCourse} intent="success" text="Add article" />
        </Card>

    )
}