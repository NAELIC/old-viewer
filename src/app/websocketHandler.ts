import { store } from './store'
import { DataMessage } from "@nodetron/types/data";
import { update } from './data';

export default function updateMessage(message: DataMessage) {
    store.dispatch(update(message))
}
