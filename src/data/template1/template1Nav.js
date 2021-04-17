export const navbar = {
    "navbar": {
        "sectionName": "navbar",
        "sectionKeys": ["config", "content"],
        "config": {
            "sectionVisible": true
        },
        "content": [
            {
                "title": "Home",
                "textVisible": true,
                "fieldVisible": true,
                "fieldType": "text",
                "route": "/template1/home",
                "orderNo": 1
            },
            {
                "title": "About",
                "textVisible": true,
                "fieldVisible": true,
                "fieldType": "dropdown",
                "subField": [
                    {"subFieldName": "Vision & Mission", "route": "/template1/vision", "fieldVisible": true},
                    {"subFieldName": "Principal Message", "route": "/template1/principalmessage", "fieldVisible": true},
                    {"subFieldName": "School Strength", "route": "/template1/strength", "fieldVisible": true},
                    {"subFieldName": "School Committee", "route": "/template1/committee", "fieldVisible": true},
                    {"subFieldName": "Teachers", "route": "/template1/teacher", "fieldVisible": true}
                    ],
                "route": null,
                "orderNo": 2
            },
            {
                "title": "Gallery",
                "textVisible": true,
                "fieldVisible": true,
                "fieldType": "text",
                "route": "/template1/gallery",
                "orderNo": 3
            },
            {
                "title": "Facilities",
                "textVisible": true,
                "fieldVisible": true,
                "fieldType": "text",
                "route": "/template1/facility",
                "orderNo": 4
            },
            {
                "title": "News",
                "textVisible": true,
                "fieldVisible": true,
                "fieldType": "text",
                "route": "/template1/news",
                "orderNo": 5
            },
            {
                "title": "Events",
                "textVisible": true,
                "fieldVisible": true,
                "fieldType": "text",
                "route": "/template1/events",
                "orderNo": 6
            },
            {
                "title": "Acadmics",
                "textVisible": true,
                "fieldVisible": true,
                "fieldType": "dropdown",
                "subField": [
                    {"subFieldName": "Fee Structure", "route": "/template1/fee", "fieldVisible": true},
                    {"subFieldName": "Curriculum Overview", "route": "/template1/curicullum", "fieldVisible": true},
                    {"subFieldName": "Teaching Methodology", "route": "/template1/teachingmethodology", "fieldVisible": true},
                    {"subFieldName": "Assessment System", "route": "/template1/assessment", "fieldVisible": true},
                    {"subFieldName": "Academic Calender", "route": "/template1/calender", "fieldVisible": true},
                    {"subFieldName": "Exam Timetable", "route": "/template1/timetable", "fieldVisible": true}, 
                    {"subFieldName": "Rules & Regulation", "route": "/template1/rules", "fieldVisible": true}
                    ],
                "route": null,
                "orderNo": 7
            },
            {
                "title": "Contact",
                "textVisible": true,
                "fieldVisible": true,
                "fieldType": "text",
                "route": "/template1/contact",
                "orderNo": 8
            }
        ]
    }
}