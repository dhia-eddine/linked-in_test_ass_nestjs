import { Injectable, NotFoundException } from '@nestjs/common';
import { AssessmentDto } from 'src/assessments/dtos/assessment.dto';

@Injectable()
export class AssessmentsService {
  private assessments = [
    { id: 1, title: 'Test 1', score: 10 },
    { id: 2, title: 'Test 2', score: 15 },
    { id: 3, title: 'Test 3', score: 20 },
  ];

  fetchAssessments() {
    return this.assessments;
  }

  getAssessmentById(id: number) {
    const assessment = this.assessments.find((c) => c.id === id);
    if (!assessment) {
      throw new NotFoundException('Assessment not found');
    }
    return assessment;
  }

  createAssessment(assessmentDto: AssessmentDto) {
    const newAssessment = new AssessmentDto();
    newAssessment.id = assessmentDto.id;
    newAssessment.title = assessmentDto.title;
    newAssessment.score = assessmentDto.score;

    this.assessments.push(newAssessment);
    return newAssessment;
  }
  // This is a shorthand way to copy the properties of an object into another one using spread and the id auto +1
  // or this
  //   createAssessment(assessmentDto: AssessmentDto) {
  //     const newAssessment = {
  //       id: this.assessments.length + 1,
  //       ...assessmentDto,
  //     };
  //     this.assessments.push(newAssessment);
  //     return newAssessment;
  //   }

  updateAssessment(id: number, assessmentDto: AssessmentDto) {
    const assessment = this.getAssessmentById(id);
    assessment.title = assessmentDto.title;
    assessment.score = assessmentDto.score;
    return assessment;
  }

  deleteAssessment(id: number) {
    const assessment = this.getAssessmentById(id);
    const index = this.assessments.indexOf(assessment);
    this.assessments.splice(index, 1);
    return assessment;
  }
}
