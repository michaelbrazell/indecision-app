console.log('App.js is running');

var app = {
  title: 'Application Title',
  subTitle: 'This is our application subtitle',
  options: ['One', 'Two']
}

var template = (
  <div>
    <h1>{app.title}</h1> 
    {app.subTitle && <p>{app.subTitle}</p>} 
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
  </div>
);

var user = {
  name: 'Mike',
  age: 33,
  location: 'Worcester'
}

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  } 
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);