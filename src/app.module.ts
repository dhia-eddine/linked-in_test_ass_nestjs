import { Module } from '@nestjs/common';
import { AssessmentsModule } from './assessments/assessments.module';


@Module({
  imports: [AssessmentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
