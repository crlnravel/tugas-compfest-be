import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { MakananModule } from './makanan/makanan.module';

@Module({
  imports: [DatabaseModule, MakananModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
