import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../task-status.enum';

export class TaskValidationStatusPipe implements PipeTransform {
  readonly statuses = [
    TaskStatus.DONE,
    TaskStatus.IN_PROGRESS,
    TaskStatus.OPEN,
  ];

  validateStatus(status: any) {
    return this.statuses.indexOf(status) >= 0;
  }

  transform(value: any) {
    value = value.toUpperCase();
    if (!this.validateStatus(value)) {
      throw new BadRequestException(`Invalid status = ${value}`);
    }
    return value;
  }
}
