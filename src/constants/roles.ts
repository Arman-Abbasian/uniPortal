export const roleGuard = {
  admin: {
    access: true,
    children: {
      userForm: {
        access: true,
      },
      userList: {
        access: true,
      },
      facultyForm: {
        access: true,
      },
      facultyList: {
        access: true,
      },
      form2: {
        access: false,
      },
    },
  },
  professor: {
    access: true,
    children: {
      courseReserveForm: {
        access: true,
      },
      courseReserveList: {
        access: true,
      },
    },
    student: {
      access: true,
      children: {
        coursePlan: {
          access: true,
        },
        selfPlan: {
          access: true,
        },
      },
    },
  },
}
