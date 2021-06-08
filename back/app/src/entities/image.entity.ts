import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity()
export class Image {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  fieldname: string

  @Column()
  originalname: string

  @Column()
  encoading: string

  @Column()
  mimetype: string

  @Column()
  distination: string

  @Column()
  filename: string

  @Column()
  path: string

  @Column()
  size: string
}
