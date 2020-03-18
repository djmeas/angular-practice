import { Skill } from '../model/skill.model';

export class GetSkills {
  static readonly type = '[Skill] Get All';
  constructor() {
    console.log('GetSkills action reached...');
  }
}

export class GetSkill {
  static readonly type = '[Skill] Get Single';
  constructor(public id) {
    console.log('GetSkill action reached...');
  }
}
