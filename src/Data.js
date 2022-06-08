let users = [{ id: 1, name: "Keiser Fermente", password: "123456" }];
let files = [
  {
    createDate: new Date(2415, 3, 9),
    creator: 1,
    fileName: "Main",
    subFolders: [],
    content:
      "This is the Main Directy for Kesier Fermente. Welcome, Dr. Fermente.",
  },
];
let important = [
  {
    id: 1,
    date: new Date(2415, 6, 6),
    type: "news",
    from: "Amelie Armiger",
    title: `Placeholder`,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ipsum vitae dui mattis varius. Fusce et sem vitae metus lacinia rutrum. Donec tellus nunc, feugiat eu magna non, tristique congue ante. em ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ipsum vitae dui mattis varius. Fusce et sem vitae metus lacinia rutrum. Donec tellus nunc, feugiat eu mag em ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ipsum vitae dui mattis varius. Fusce et sem vitae metus lacinia rutrum. Donec tellus nunc, feugiat eu mag em ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ipsum vitae dui mattis varius. Fusce et sem vitae metus lacinia rutrum. Donec tellus nunc, feugiat eu mag em ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ipsum vitae dui mattis varius. Fusce et sem vitae metus lacinia rutrum. Donec tellus nunc, feugiat eu mag ",
  },
  {
    id: 2,
    date: new Date(2415, 6, 5),
    type: "bulletin",
    from: "Security Chief Ted Parkson",
    title: `Placeholder`,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ipsum em ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ipsum vitae dui mattis varius. Fusce et sem vitae metus lacinia rutrum. Donec tellus nunc, feugiat eu magem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ipsum vitae dui mattis varius. Fusce et sem vitae metus lacinia rutrum. Donec tellus nunc, feugiat eu magem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ipsum vitae dui mattis varius. Fusce et sem vitae metus lacinia rutrum. Donec tellus nunc, feugiat eu magvitae dui mattis varius. Fusce et sem vitae metus lacinia rutrum. Donec tellus nunc, feugiat eu magna non, tristique congue ante. ",
  },
  {
    id: 2,
    date: new Date(2415, 6, 4),
    type: "bulletin",
    from: "Security Chief Ted Parkson",
    title: `Placeholder`,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ipsum vitae dui mattis varius. Fusce et sem vitae metus lacinia rutrum. Donec tellus nunc, feugiat eu magna non, tristique congue ante. ",
  },
];

let messages = [
  {
    sentDate: new Date(2515, 3, 9),
    from: "Adin Vicharky",
    to: "Kaiser Fermente",
    title: "Welcome to the Lab",
    message: "Lorem ipsum",
  },
];

let logs = [
  {
    createDate: new Date(2415, 3, 9),
    by: 1,
    title: "First Day",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in finibus justo. Etiam ac elit aliquam, sollicitudin lacus vel, vehicula metus. Vivamus pharetra diam dui, vitae tincidunt massa pulvinar non. Proin at mollis est, eget lobortis odio. Donec porttitor efficitur justo, sed aliquam diam sagittis at. Mauris iaculis mollis fermentum. Nulla dictum, lectus a pharetra dapibus, arcu arcu rhoncus quam, ut interdum magna orci ut augue. Nulla accumsan rutrum ligula, nec tincidunt nisl luctus rhoncus. ",
  },
];

module.exports = {
  users,
  files,
  important,
  messages,
  logs,
};
