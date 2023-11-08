import { Injectable } from '@nestjs/common';
import { Frase } from './frases.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrearFrasesDto } from './Dto/create-frases.dto';
import { UpdateFrasesDto } from './Dto/update-frases.dto';

@Injectable()
export class FrasesService {


    // Usuarios
    constructor(@InjectRepository(Frase) private fraseRepository: Repository<Frase>) { }

    //CREAR
    createFrases(frase: CrearFrasesDto) {

        const NewFrase = this.fraseRepository.create(frase)
        return this.fraseRepository.save(NewFrase)
    }

    //OBTENER
    getFrases() {
        return this.fraseRepository.find()
    }

    //OBTENER SOLO UNO
    getFrase(id: number) {
        return this.fraseRepository.findOne({
            where: {
                id
            }
        })
    }

    //ELIMINAR
    deleteFrase(id: number) {
        return this.fraseRepository.delete({id})
    }

    //EDITAR
    updateFrase(id: number, frase: UpdateFrasesDto){
        return this.fraseRepository.update({id}, frase)
    }

}
