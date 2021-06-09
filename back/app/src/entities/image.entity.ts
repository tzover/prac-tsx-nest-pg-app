import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Image {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  fieldname: string

  @Column()
  originalname: string

  @Column({ nullable: true })
  encoading: string

  @Column()
  mimetype: string

  @Column({ nullable: true })
  distination: string

  @Column()
  filename: string

  @Column()
  path: string

  @Column({ nullable: true })
  size: string
}
