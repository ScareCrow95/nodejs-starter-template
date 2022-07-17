import { sendSocketMessage } from '../../socket/initSocket'
export default async ({ data }) => {
  sendSocketMessage('observer.hello', 'hey')
  return 200
}
