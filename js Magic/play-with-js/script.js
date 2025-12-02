const Buyedcourses =[
    {
        Course:"Cohort-2026",
        Instructor:"Hitesh Chaudhary",
        price:3999,
        Domain:"Full Stack Web Development !"
    },
    {
        Course:"Python GenAI",
        Instructor:"Hitesh Chaudhary & Piyush Agarwal",
        price:399,
        Domain:"Full Stack Generative And Agentic AI !"
    },
    {
        Course:"Web Development",
        Instructor:"Sharaddha Khapra",
        price:5999,
        Domain:"Full Stack Web Development !"
    },
    {
        Course:"SSC & Bank",
        Instructor:"Byjus",
        price:7999,
        Domain:"Compatative Exam !"
    },
    {
        Course:"Pratham-13",
        Instructor:"Career Will",
        price:999,
        Domain:"SSC Foundation Batch !"
    }
]

function CouseDetail(CourseObj){
    return (`
    Course:${CourseObj.Course},
    Instructor:${CourseObj.Instructor},
    Domain:${CourseObj.Domain},
    Price:${CourseObj.price}
    `)
}

console.log(CouseDetail(Buyedcourses[3]));
