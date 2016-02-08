MyComponents.About = React.createClass({

  render: function() {
    return (
      <div className="card">
        <div className="card-content">
        <img src="components/headshot.jpg" alt="Jacob Resman"></img>
          <ul className="collection">
            <li className="collection-item">Major: BS Computer Science</li>
            <li className="collection-item">Birth Place: Colorado Springs, CO</li>
            <li className="collection-item">Hobbies: Rock Climbing, Espresso, Craft Beer, Skiing, Hiking</li>
            <li className="collection-item"><a href="https://github.com/jtresman">Github</a></li>
          </ul>
        </div>
      </div>
    );
  }

});
