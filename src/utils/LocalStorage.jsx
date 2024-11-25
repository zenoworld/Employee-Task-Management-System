const employees = [
  {
    "id": "E001",
    "firstName": "Aarav",
    "email": "e1@e.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Complete the project report",
        "category": "Work",
        "active": false,
        "date": "2024-11-22",
        "completed": false,
        "failed": false,
        "newtask": true
      },
      {
        "title": "Task 2",
        "description": "Schedule meeting with the team",
        "category": "Management",
        "active": true,
        "date": "2024-11-23",
        "completed": false,
        "failed": false,
        "newtask": false
      },
      {
        "title": "Task 3",
        "description": "Organize files in the drive",
        "category": "Work",
        "active": false,
        "date": "2024-11-20",
        "completed": true,
        "failed": false,
        "newtask": false
      },
      {
        "title": "Task 4",
        "description": "Send emails to clients",
        "category": "Communication",
        "active": false,
        "date": "2024-11-24",
        "completed": false,
        "failed": false,
        "newtask": true
      },
      {
        "title": "Task 5",
        "description": "Prepare slides for presentation",
        "category": "Work",
        "active": true,
        "date": "2024-11-25",
        "completed": false,
        "failed": false,
        "newtask": false
      },
      {
        "title": "Task 6",
        "description": "Fix bug in the app",
        "category": "Development",
        "active": false,
        "date": "2024-11-18",
        "completed": false,
        "failed": true,
        "newtask": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "failed": 1,
      "completed": 1,
      "newtask": 2
    }
  },
  {
    "id": "E002",
    "firstName": "Ishita",
    "email": "e2@e.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Organize team lunch",
        "category": "Team Building",
        "active": true,
        "date": "2024-11-15",
        "completed": false,
        "failed": false,
        "newtask": false
      },
      {
        "title": "Task 2",
        "description": "Send emails to clients",
        "category": "Communication",
        "active": true,
        "date": "2024-11-29",
        "completed": false,
        "failed": false,
        "newtask": false
      },
      {
        "title": "Task 3",
        "description": "Prepare training materials",
        "category": "Training",
        "active": false,
        "date": "2024-11-26",
        "completed": true,
        "failed": false,
        "newtask": false
      },
      {
        "title": "Task 4",
        "description": "Prepare slides for presentation",
        "category": "Work",
        "active": false,
        "date": "2024-11-25",
        "completed": false,
        "failed": false,
        "newtask": true
      },
      {
        "title": "Task 5",
        "description": "Schedule meeting with the team",
        "category": "Management",
        "active": true,
        "date": "2024-11-23",
        "completed": false,
        "failed": false,
        "newtask": false
      }
    ],
    "taskNumbers": {
      "active": 3,
      "failed": 0,
      "completed": 1,
      "newtask": 1
    }
  },
  {
    "id": "E003",
    "firstName": "Dev",
    "email": "e3@e.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Prepare training materials",
        "category": "Training",
        "active": true,
        "date": "2024-11-26",
        "completed": false,
        "failed": false,
        "newtask": false
      },
      {
        "title": "Task 2",
        "description": "Send emails to clients",
        "category": "Communication",
        "active": false,
        "date": "2024-11-24",
        "completed": false,
        "failed": false,
        "newtask": true
      },
      {
        "title": "Task 3",
        "description": "Update website content",
        "category": "Content",
        "active": false,
        "date": "2024-11-19",
        "completed": true,
        "failed": false,
        "newtask": false
      },
      {
        "title": "Task 4",
        "description": "Complete the project report",
        "category": "Work",
        "active": true,
        "date": "2024-11-22",
        "completed": false,
        "failed": false,
        "newtask": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "failed": 0,
      "completed": 1,
      "newtask": 1
    }
  },
  {
    "id": "E004",
    "firstName": "Riya",
    "email": "e4@e.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Conduct user survey",
        "category": "Research",
        "active": false,
        "date": "2024-11-27",
        "completed": false,
        "failed": false,
        "newtask": true
      },
      {
        "title": "Task 2",
        "description": "Prepare slides for presentation",
        "category": "Work",
        "active": true,
        "date": "2024-11-25",
        "completed": false,
        "failed": false,
        "newtask": false
      },
      {
        "title": "Task 3",
        "description": "Organize files in the drive",
        "category": "Work",
        "active": false,
        "date": "2024-11-20",
        "completed": true,
        "failed": false,
        "newtask": false
      },
      {
        "title": "Task 4",
        "description": "Send emails to clients",
        "category": "Communication",
        "active": false,
        "date": "2024-11-24",
        "completed": false,
        "failed": false,
        "newtask": true
      },
      {
        "title": "Task 5",
        "description": "Schedule meeting with the team",
        "category": "Management",
        "active": true,
        "date": "2024-11-23",
        "completed": false,
        "failed": false,
        "newtask": false
      },
      {
        "title": "Task 6",
        "description": "Complete the project report",
        "category": "Work",
        "active": false,
        "date": "2024-11-22",
        "completed": false,
        "failed": true,
        "newtask": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "failed": 1,
      "completed": 1,
      "newtask": 2
    }
  },
  {
    "id": "E005",
    "firstName": "Kunal",
    "email": "e5@e.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Update website content",
        "category": "Content",
        "active": false,
        "date": "2024-11-19",
        "completed": true,
        "failed": false,
        "newtask": false
      },
      {
        "title": "Task 2",
        "description": "Complete the project report",
        "category": "Work",
        "active": false,
        "date": "2024-11-22",
        "completed": false,
        "failed": false,
        "newtask": true
      },
      {
        "title": "Task 3",
        "description": "Prepare training materials",
        "category": "Training",
        "active": true,
        "date": "2024-11-26",
        "completed": false,
        "failed": false,
        "newtask": false
      },
      {
        "title": "Task 4",
        "description": "Send emails to clients",
        "category": "Communication",
        "active": false,
        "date": "2024-11-24",
        "completed": false,
        "failed": false,
        "newtask": true
      },
      {
        "title": "Task 5",
        "description": "Fix bug in the app",
        "category": "Development",
        "active": false,
        "date": "2024-11-18",
        "completed": false,
        "failed": true,
        "newtask": false
      }
    ],
    "taskNumbers": {
      "active":1,
      "failed": 1,
      "completed": 1,
      "newtask": 2
    }
  }
];




const admin = [
  {
    "id": "A001",
    "email": "admin@example.com",
    "password": "123"
  },
]


export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}
// localStorage.clear()
// setLocalStorage()
export const getLocalStorage = () => {
  const employeeData = JSON.parse(localStorage.getItem('employees'));
  const adminData = JSON.parse(localStorage.getItem('admin'));
  return { employeeData, adminData }
}