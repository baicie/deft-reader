import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
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

  @Column()
  md5: string

  @UpdateDateColumn()
  updateTime: Date

  @Column()
  size: number
}
