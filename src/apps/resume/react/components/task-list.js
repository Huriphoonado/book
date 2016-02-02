MyComponents.Task = React.createClass({

  render: function() {
    return (
      <div className="row">
        <div className="col s12 m6">
          <div className={this.props.task.cardColor}>
            <div className="card-content white-text">
              <span className="card-title">{this.props.task.name}</span>
              <p>
              Assigned To: {this.props.task.assigned}<br />
              Deadline: {this.props.task.deadline}<br />
              Type: {this.props.task.type}<br />
              Priority: {this.props.task.priority}<br />
              </p>
            </div>
            <div className="card-action">
              <div className="switch">
                <label>
                  In Progress
                  <input disabled checked={this.props.task.checkBoxState} type="checkbox" />
                  <span className="lever"></span>
                  Completed
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },

  testFunc: function() {
    console.log("Callback!")
  }
});

MyComponents.TaskList = React.createClass({
  render: function() {

    var taskElements = this.props.tasks.map(function(t,i){
      return <MyComponents.Task task={t} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
        Currently I have {this.props.tasks.length} tasks assigned to me.
        {taskElements}
        </div>
      </div>
    );
  }
});
