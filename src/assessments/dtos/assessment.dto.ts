import {IsString, IsNumber, Max, IsNotEmpty } from 'class-validator';

export class AssessmentDto {
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @Max(20)
  score: number;
}
