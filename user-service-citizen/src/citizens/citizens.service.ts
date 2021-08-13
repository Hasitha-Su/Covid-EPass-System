import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCitizenInput } from './dto/create-citizen.input';
import { UpdateCitizenInput } from './dto/update-citizen.input';
import { Citizen } from './entities/citizen.entity';

@Injectable()
export class CitizensService {

  constructor(@InjectRepository(Citizen) private citizenRepository: Repository<Citizen>){}

  create(createCitizenInput: CreateCitizenInput):Promise<Citizen> {
    let citizen = this.citizenRepository.create(createCitizenInput)
    return this.citizenRepository.save(citizen);
  }

  async findAll(): Promise<Citizen[]> {
    return await this.citizenRepository.find();
  }

  async findOne(id: string): Promise<Citizen> {
    return await this.citizenRepository.findOne(id);
  }

  async update(id: string, updateCitizenInput: UpdateCitizenInput) {
    let citizen: Citizen = this.citizenRepository.create(updateCitizenInput)
    citizen.id = id;
    return this.citizenRepository.save(citizen)
  }

  async remove(id: string) {
    let citizen = this.findOne(id)
    if (citizen) {
      let ret = await this.citizenRepository.delete(id)
      if (ret.affected === 1) {
        return citizen;
      }
    }
    throw new NotFoundException(`Not Found Record With Id ${id}`)
  }

}