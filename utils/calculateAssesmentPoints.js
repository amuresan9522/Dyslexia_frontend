import _ from 'lodash'
import { getResourcesByPoints } from './getResourcesByPoints';

export const pointingSystem = {
    height: {
        name: 'Absolutely',
        points: 3,
        min: 19,
        max: 24
    },
    medium: {
        name: 'Somewhat',
        points: 2,
        min: 14,
        max: 19
    },
    low: {
        name: 'Rarery or never',
        points: 1,
        min: 8,
        max: 14
    }
}

export const calculateAssesmentPoints = async (event) => {
    const answersArray = [
        event.target[0].value,
        event.target[1].value,
        event.target[2].value,
        event.target[3].value,
        event.target[4].value,
        event.target[5].value,
        event.target[6].value,
        event.target[7].value
    ];
    
    const answersAsPoints = answersArray.map((value) => {
        switch (value) {
            case pointingSystem.height.name:
                return pointingSystem.height.points
                break
            case pointingSystem.medium.name:
                return pointingSystem.medium.points
                break
            case pointingSystem.low.name:
                return pointingSystem.low.points
                break
        }
    })

    const formResult = _.sum(answersAsPoints)

    return await {
        resources: getResourcesByPoints(formResult),
        points: formResult
    } 
}