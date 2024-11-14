import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneroController } from './genero.controller';
import { GeneroService } from './genero.service';
import { Genero } from './genero.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('GeneroController', () => {
  let controller: GeneroController;
  let service: GeneroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([Genero])],
      controllers: [GeneroController],
      providers: [
        GeneroService,
        { provide: getRepositoryToken(Genero), useClass: Repository },
      ],
    }).compile();

    controller = module.get<GeneroController>(GeneroController);
    service = module.get<GeneroService>(GeneroService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
