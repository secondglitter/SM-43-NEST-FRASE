import { Controller,Post,Patch,Get,Delete,Body,Param, ParseIntPipe } from '@nestjs/common';
import { FrasesService } from './frases.service';
import { Frase } from './frases.entity';
import { CrearFrasesDto } from './Dto/create-frases.dto';
import { UpdateFrasesDto } from './Dto/update-frases.dto';



@Controller('frases')
export class FrasesController {

    constructor(private frasesService : FrasesService){}

    @Get()
    getFrases(){
        return this.frasesService.getFrases();
    }

    @Get(':id')
    getFrase(@Param('id', ParseIntPipe) id:number): Promise<Frase>{
        return this.frasesService.getFrase(id);
    }

    @Post()
    createFrases(@Body() NewFrase:CrearFrasesDto){
        console.log(NewFrase)
        return this.frasesService.createFrases(NewFrase)
    }

    @Delete(':id')
    deleteFrase(@Param('id', ParseIntPipe) id:number){
        return this.frasesService.deleteFrase(id);
    }
    
    @Patch(':id')
    updateFrase(@Param('id', ParseIntPipe) id:number, @Body() frase: UpdateFrasesDto){
        return this.frasesService.updateFrase(id, frase)
    }

}
