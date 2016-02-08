MyComponents.Skill = React.createClass({

  render: function(skill) {
    return (
      <div className="card">
        <div className="card-content">
         {this.props.skill.name} <p> Years {this.props.skill.years}</p>
        </div>
      </div>
    );
  }
});

MyComponents.SkillList = React.createClass({
  render: function() {

    var skillElements = this.props.skills.map(function(s,i){
      return <MyComponents.Skill skill={s}/>
    });
    

    return (
      <div className="card">
        <div className="card-content">
        
        {skillElements}

        </div>
      </div>
    );
  }
});
