import { store } from './store'
import { WorldMessage } from "@nodetron/types/world";
import { update } from './data';

export default function updateMessage(message: WorldMessage) {
    store.dispatch(update(message))
}
