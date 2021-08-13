import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEpassInput } from './dto/create-epass.input';
import { UpdateEpassInput } from './dto/update-epass.input';
import { Epass } from './entities/epass.entity';

@Injectable()
export class EpassService {

  constructor(@InjectRepository(Epass) private epassRepository: Repository<Epass>) { }

  create(createEpassInput: CreateEpassInput): Promise<Epass> {
    let proj = this.epassRepository.create(createEpassInput);
    return this.epassRepository.save(createEpassInput)

  }

  async find(): Promise<Epass[]> {
    return this.epassRepository.find();
  }

  async findOne(id: string): Promise<Epass> {
    return this.epassRepository.findOne(id);
  }

  update(id: string, updateEpassInput: UpdateEpassInput) {
    let project: Epass = this.epassRepository.create(updateEpassInput)
    project.id = id;
    return this.epassRepository.save(project)
  }

  async remove(id: string) {
    let proj = this.findOne(id)
    if (proj) {
      let ret = await this.epassRepository.delete(id)
      if (ret.affected === 1) {
        return proj;
      }
    }
    throw new NotFoundException(`Record cannot find by id ${id}`)
  }

  async forCitizen(id: string){
    return await this.epassRepository.find({"citizenId":id})
  }
}