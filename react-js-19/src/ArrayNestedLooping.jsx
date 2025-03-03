import Divider from './Divider';

function ArrayNestedLooping() {
    const array = [
        {
            id: "b-25771",
            name: "Muhammad Ali Khalil",
            department: "Computer Science",
            subject: [
                {
                    sub1: "Capstone Project 2",
                    sub2: "Enterprise Resource Planning System",
                    sub3: "Information Security",
                    sub4: "Software Re-Engineering",
                    sub5: "----------"
                },
                {
                    sub1: "Business Process Engineering",
                    sub2: "Capstone Project 1",
                    sub3: "Formal Method In Software Engineering",
                    sub4: "Software Construction",
                    sub5: "Web Engineering"
                }
            ]
        },
        {
            id: "b-24981",
            name: "Muhammad Asad",
            department: "Computer Science",
            subject: [
                {
                    sub1: "Capstone Project 2",
                    sub2: "Enterprise Resource Planning System",
                    sub3: "Information Security",
                    sub4: "Software Re-Engineering",
                    sub5: "----------"
                },
                {
                    sub1: "Business Process Engineering",
                    sub2: "Capstone Project 1",
                    sub3: "Formal Method In Software Engineering",
                    sub4: "Software Construction",
                    sub5: "Web Engineering"
                }
            ]
        }
    ]

    return (
        <div>
            <div>
                {
                    array.map((student) => (
                        <ul key={student.id}>
                            <li>{student.id}</li>
                            <li>{student.name}</li>
                            <li>{student.department}</li>
                            <li>Subjects:
                                {
                                    student.subject.map((subj, index) => (
                                        <ul key={index}>
                                            <li>{subj.sub1}</li>
                                            <li>{subj.sub2}</li>
                                            <li>{subj.sub3}</li>
                                            <li>{subj.sub4}</li>
                                            <li>{subj.sub5}</li>
                                        </ul>
                                    ))
                                }
                            </li>
                        </ul>
                    ))
                }
            </div>
            <Divider />
        </div>
    );
}

export default ArrayNestedLooping;