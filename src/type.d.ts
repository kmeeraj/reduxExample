enum ISyllabusType {
    ANNUAL="annual",
    HALFYEARLY="halfyearly",
    QUATERLY="quaterly"
}

interface ICourse {
    id: number
    name: string
    body: string
}

interface ISyllabus {
    words: ICourse[]
    type: ISyllabusType
}

type CourseAction = {
    type: string
    course: ICourse
}

type SyllabusAction = {
    type: string
    syllabus: ISyllabus
}

type CourseState = {
    courses: ICourse[]
}

type SyllabusState = {
    syllabuses: ISyllabus[]
}

type DispatchType = (args: ArticleAction) => ArticleAction