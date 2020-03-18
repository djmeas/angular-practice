import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Skill } from '../model/skill.model';
import { GetSkill, GetSkills } from '../actions/skill.actions';
import { SkillService } from '../services/skill/skill.service';
import { tap } from 'rxjs/operators';

export class SkillStateModel {
  list: Skill[];
  view: Skill;
}

@State<SkillStateModel>({
  name: 'skills',
  defaults: {
    list: [],
    view: null
  }
})
@Injectable()
export class SkillState {
  constructor(private skillService: SkillService) {
    console.log('employee.state reached!');
  }

  @Selector()
  static getAllSkills(state: SkillStateModel) {
    return state.list;
  }

  @Selector()
  static getSkill(state: SkillStateModel) {
    return state.view;
  }

  @Action(GetSkills)
  getSkills({ getState, setState }: StateContext<SkillStateModel>) {
    return this.skillService.getSkills().pipe(
      tap(result => {
        console.log('setting state for skills: ', result);
        const state = getState();
        setState({
          ...state,
          list: result
        });
      })
    );
  }

  @Action(GetSkill)
  getSkill({ getState, setState }: StateContext<SkillStateModel>, { id }) {
    return this.skillService.getSkill(id).pipe(
      tap(result => {
        const state = getState();
        setState({
          ...state,
          view: result
        });
      })
    );
  }
}
