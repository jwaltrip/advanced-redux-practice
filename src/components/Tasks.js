import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

function Tasks(props) {
  return ( <div className="col-lg-3 col-md-6">
            <div className="panel panel-green">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-3">
                    <i className="fa fa-tasks fa-5x"></i>
                  </div>
                  <div className="col-xs-9 text-right">
                    <div className="huge">{props.tasks}</div>
                    <div>New Tasks!</div>
                  </div>
                </div>
              </div>
              <a href="#">
                <div className="panel-footer">
                  <span className="pull-left">View Details</span>
                  <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                  <div className="clearfix"></div>
                </div>
              </a>
          </div>
        </div>);
}

// propTypes for the prop that was connected from redux
Tasks.propTypes = {
  tasks: PropTypes.number
};

// connect the redux state to this.props of this component
const mapStateToProps = (state) => ({
  tasks: state.newTasks
});

// make a container component and connect the main component to redux store
const TasksContainer = connect(mapStateToProps)(Tasks);
export default TasksContainer;

