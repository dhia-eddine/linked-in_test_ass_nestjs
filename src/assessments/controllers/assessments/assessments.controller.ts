import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { AssessmentDto } from 'src/assessments/dtos/assessment.dto';
import { AssessmentsService } from 'src/assessments/services/assessments/assessments.service';

@Controller('assessments')
export class AssessmentsController {
  constructor(private assessmentsService: AssessmentsService) {}

  @Get()
  getAssessments() {
    return this.assessmentsService.fetchAssessments();
  }

  @Get(':id')
  getAssessmentById(@Param('id', ParseIntPipe) id: number) {
    return this.assessmentsService.getAssessmentById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createAssessment(@Body() assessmentDto: AssessmentDto) {
    return this.assessmentsService.createAssessment(assessmentDto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  updateAssessment(@Param('id', ParseIntPipe) id: number, @Body() assessmentDto: AssessmentDto) {
    return this.assessmentsService.updateAssessment(id, assessmentDto);
  }

  @Delete(':id')
  deleteAssessment(@Param('id', ParseIntPipe) id: number) {
    return this.assessmentsService.deleteAssessment(id);
  }
}
