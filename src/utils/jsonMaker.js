let questions = [
    "What is the primary function of Docker?", 
    "What command is used to pull an image from the Docker registry?",
    "Which command is used to list all the running containers?",
    "What command is used to stop a running container?",
    "Which command is used to create a new Docker image from a running container?",
    "Which of the following commands can be used to list all Docker containers?"
];

let options = [
    ["Containerizing applications", "Hosting web servers", "Providing a virtualization platform", "Managing databases"],
    ["docker build", "docker run", "docker pull", "docker exec"],
    ["docker ps", "docker rm", "docker images", "docker start"],
    ["docker start", "docker stop", "docker rm", "docker exec"],
    ["docker commit", "docker build", "docker pull", "docker run"],
    ["docker container ls", "docker ps", "docker container ls -a", "docker ps -a"]
];

let correctAnswers = [[0], [2], [0], [1], [0], [2, 3]];

let resp = questions.map((q, i) => {
    return {
        "key": i,
        "question": q,
        "options": options[i],
        "correct_option": correctAnswers[i]
    }
})

console.log(JSON.stringify({data: resp}, null, 4));

/**

{
    "data": [
        {
            "key": 0,
            "question": "What is the primary function of Docker?",
            "options": [
                "Containerizing applications",
                "Hosting web servers",
                "Providing a virtualization platform",
                "Managing databases"
            ],
            "correct_option": [
                0
            ]
        },
        {
            "key": 1,
            "question": "What command is used to pull an image from the Docker registry?",
            "options": [
                "docker build",
                "docker run",
                "docker pull",
                "docker exec"
            ],
            "correct_option": [
                2
            ]
        },
        {
            "key": 2,
            "question": "Which command is used to list all the running containers?",
            "options": [
                "docker ps",
                "docker rm",
                "docker images",
                "docker start"
            ],
            "correct_option": [
                0
            ]
        },
        {
            "key": 3,
            "question": "What command is used to stop a running container?",
            "options": [
                "docker start",
                "docker stop",
                "docker rm",
                "docker exec"
            ],
            "correct_option": [
                1
            ]
        },
        {
            "key": 4,
            "question": "Which command is used to create a new Docker image from a running container?",
            "options": [
                "docker commit",
                "docker build",
                "docker pull",
                "docker run"
            ],
            "correct_option": [
                0
            ]
        },
        {
            "key": 5,
            "question": "Which of the following commands can be used to list all Docker containers?",
            "options": [
                "docker container ls",
                "docker ps",
                "docker container ls -a",
                "docker ps -a"
            ],
            "correct_option": [
                2,
                3
            ]
        }
    ]
}

**/