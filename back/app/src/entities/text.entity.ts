import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Text {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  text: string
}
