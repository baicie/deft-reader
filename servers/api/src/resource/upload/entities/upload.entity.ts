import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from 'typeorm'

@Entity()
export class FileEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  filename: string

  @Column()
  bookName: string

  @CreateDateColumn()
  uploadedAt: Date
}
