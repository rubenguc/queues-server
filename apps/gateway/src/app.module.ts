import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { NatsModule } from '@repo/common/transports';

@Module({
  imports: [NatsModule],
  controllers: [AppController],
})
export class AppModule {}
