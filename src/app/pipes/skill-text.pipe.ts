import { Pipe, PipeTransform } from '@angular/core';
import { generateSkill } from '../utils/skill.utils';

@Pipe({
  name: 'skillText'
})
export class SkillTextPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    return generateSkill(value);
  }
}
