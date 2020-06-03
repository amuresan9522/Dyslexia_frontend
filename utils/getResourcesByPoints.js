import _ from 'lodash';

import { pointingSystem } from './calculateAssesmentPoints';
import { getResources, levels } from '../services/quiz.service';

export const getResourcesByPoints = (points) => {
    return _.inRange(points, pointingSystem.height.min, pointingSystem.height.max +1 )
    ?  getResources(levels.HEIGHT)
    :  _.inRange(points, pointingSystem.medium.min, pointingSystem.medium.max)
    ? getResources(levels.MEDIUM)

    : getResources(levels.LOW)
}