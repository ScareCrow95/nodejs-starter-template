import { TestModel } from '../../models/test.model'
import generateUUID from '../../utils/generateUUID'
export default async ({ data }) => {
  const testModel = new TestModel({
    _id: generateUUID(),
    data,
  })
  await testModel.save()
  return { _id: testModel._id, data }
}
