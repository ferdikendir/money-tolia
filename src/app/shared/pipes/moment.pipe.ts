import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';
import { isMoment } from 'moment';

@Pipe({
  name: 'momentFormat',
  standalone: true
})
export class MomentFormatPipe implements PipeTransform {

  transform(value: moment.Moment, format: string): any {
    if (!value) {
      return '';
    }

    if (!isMoment(value)) {
      value = moment(value);
    }

    return value.format(format);
  }

}
