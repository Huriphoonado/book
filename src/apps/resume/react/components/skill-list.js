MyComponents.Skill = React.createClass({

  render: function() {
    return (
      <div className="row">
        <div className="col s12 m4">
          <div className="card">
            <div className="card-content">
            {this.props.skill.name}
            <br />
            Years of Experience: {this.props.skill.years}
            </div>
          </div>
        </div>
      </div>
    );
  }

});

MyComponents.SkillList = React.createClass({
  render: function() {

    var skillElements = this.props.skills.map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
          I have many skills including the following {this.props.skills.length}.
          {skillElements}
        </div>
      </div>
    );
  }
});
