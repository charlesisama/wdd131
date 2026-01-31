let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        { section: "001", enrolled: 100, instructor: "Charles Isama"},
        {section: "002", enrolled: 200, instructor: "Tolu Valentine"}
    ]
};

function setCourseInformation(course, id) {
    document.querySelector(id).innerHTML = `${course.code} - ${course.title}`;
}

function outPutSections(course){
    const tbody = document.querySelector("#sections tbody");
    let rows = "";
    for (const section of course.sections){
        rows += `<tr>
        <td>${section.section}</td>
        <td>${section.enrolled}</td>
        <td>${section.instructor}</td>
    </tr>`;
    }

    tbody.innerHTML = rows;
    
}

setCourseInformation(aCourse, "#courseName");
outPutSections(aCourse);



let names = ["Nancy", "Blessing", "Jorge", "Svetlana", "Bob"]
let nameB = names.filter((name) => name.charAt(0) === "B");

let namesLength = names.map(name => name.length
);