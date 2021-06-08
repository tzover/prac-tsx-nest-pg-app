import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity()
export class Text {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  text: string
}
