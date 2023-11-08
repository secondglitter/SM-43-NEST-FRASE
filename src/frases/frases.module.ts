import { Module } from '@nestjs/common';
import { FrasesController } from './frases.controller';
import { FrasesService } from './frases.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Frase } from './frases.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Frase])],
  controllers: [FrasesController],
  providers: [FrasesService]
})
export class FrasesModule {}
