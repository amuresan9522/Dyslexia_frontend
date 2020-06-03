import React from 'react';
import { getResourcesByPoints } from '../utils/getResourcesByPoints';
import { Button } from '@material-ui/core';

export default class Resources extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {
        this.setState({ data : getResourcesByPoints(this.props.points)})
    }
  render () {
    return (
      <div>
          <ul>
            {this.state.data.map((entity, index) => {
                return (
                    <li key={index}>
                        <a href={entity.resource}>{entity.text}</a>
                    </li>  
                )
            })}
          </ul>
        
      </div>
    );
  }
}
