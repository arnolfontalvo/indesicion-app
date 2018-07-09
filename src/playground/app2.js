console.log('App.js is running!');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in hands of a computer',
  options: ['one', 'two']
}

// JSX - JavaScript XML
var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle  && <h2>Subtitle: {app.subtitle}</h2>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>
);

var user = {
  name: 'Ary',
  age: '37',
  location: 'Barranquilla - Atlantico'
}

function getLocation(location) {
  if (location) {
    return <p>Loaction: {location}</p>;
  }
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 37) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
