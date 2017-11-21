console.log('App.js is running');

var app = {
  title: 'Application Title',
  subTitle: 'This is our application subtitle'
}

var template = (
  <div>
    <h1>{app.title}</h1> 
    <p>{app.subTitle}</p> 
  </div>
);

var user = {
  name: 'Mike',
  age: 33,
  location: 'Massachusetts'
}

function getLocation(location) {
  if (location) {
    return location;
  } else {
    return 'Unknown Location';
  }
}

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {getLocation(user.location)}</p>
  </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);