import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import TaskItem from "./TaskItem";

function TasksPanel(props) {
  return (  <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title"><i className="fa fa-clock-o fa-fw"></i> Tasks Panel</h3>
              </div>
              <div className="panel-body">
                <div className="list-group">
                  {
                    props.tasks.map((t, i) => {
                      return <TaskItem key={i} task={t} />;
                    })
                  }
                </div>
                <div className="text-right">
                  <a href="#">View All Activity <i className="fa fa-arrow-circle-right"></i></a>
                </div>
              </div>
          </div>
        );
}

// propTypes for the prop that was connected from redux
TasksPanel.propTypes = {
  tasks: PropTypes.array
};

// connect the redux state to this.props of this component
const mapStateToProps = state => ({
  tasks: state.tasks
});

// make a container component and connect the main component to redux store
const TasksPanelContainer = connect(mapStateToProps)(TasksPanel);
export default TasksPanelContainer;
