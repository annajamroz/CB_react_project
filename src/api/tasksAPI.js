export async function getTasks() {
  // return axios.get()
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 0,
          text: "zrobić aplikacje w React",
          date: "2013-08-15",
          active: true,
          finishDate: null,
        },
        {
          id: 1,
          text: "Nauczyć się React",
          date: "2013-08-30",
          active: true,
          finishDate: null,
        },
        {
          id: 2,
          text: "Projekt",
          date: "2013-08-30",
          active: true,
          finishDate: null,
        },
        {
          id: 3,
          text: "Fryzjer",
          date: "2013-08-30",
          active: true,
          finishDate: null,
        },
        {
          id: 4,
          text: "Basen",
          date: "2013-08-30",
          active: true,
          finishDate: null,
        },
        {
          id: 5,
          text: "Basen",
          date: "2013-08-30",
          active: true,
          finishDate: null,
        },
      ]);
    }, 300);
  });
}

export async function deleteTasks(id, previousState) {
  // return axios.delete("relative API endpoint path", {id})
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(previousState.filter((task) => task.id !== id));
    }, 300);
  });
}
