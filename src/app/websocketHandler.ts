import { store } from './store'
import { Data } from "@nodetron/types/internal/data";
import { update as updateBall } from './data/ball';
import { update as updateField } from './data/field';
// import { update as updateRobot } from './data/robot';

// import { Color } from '@nodetron/types/utils/utils';

export default function updateMessage(message: Data) {

  if (message.field) {
    store.dispatch(updateField({
      width: message.field.width,
      length: message.field.length,
      center_radius: message.field.center.radius,
      goal: {
        width: message.field.goal.width,
        depth: message.field.goal.depth,
      },
      penalty: {
        width: message.field.penalty.width,
        depth: message.field.penalty.depth,
      },
    }))
  }

  if (message.ball) {
    store.dispatch(updateBall(message.ball))
  }

  // const blue = message.color === Color.BLUE ? message.robots.allies : message.robots.opponents
  // const yellow = message.color === Color.BLUE ? message.robots.opponents : message.robots.allies

  // // store.dispatch(updateRobot())

}