import { Module } from '@nestjs/common';
import { AssessmentsController } from './controllers/assessments/assessments.controller';
import { AssessmentsService } from './services/assessments/assessments.service';

@Module({
  controllers: [AssessmentsController],
  providers: [AssessmentsService]
})
export class AssessmentsModule {}
