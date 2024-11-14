import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Conexión establecida y aplicación en funcionamiento';
  }
}
